#!/bin/sh

MOONCATRESCUEDATA=MoonCatRescueData.txt
MOONCATRESCUERESULTS=MoonCatRescueResults.js

# geth attach http://localhost:8545 << EOF | tee $MOONCATRESCUEDATA
geth attach http://localhost:8545 << EOF > $MOONCATRESCUEDATA

loadScript("deploymentData.js");

console.log("eth.blockNumber: " + eth.blockNumber);

var moonCat = eth.contract(MOONCATRESCUEABI).at(MOONCATRESCUEADDRESS);

// Testing - set to smaller number
var MAX = 1000000;

var totalSupply = moonCat.totalSupply();
console.log("totalSupply: " + totalSupply);
console.log("RESULT: moonCatTotalSupply = " + totalSupply + ";");

var rescueIndex = moonCat.rescueIndex();
console.log("rescueIndex: " + rescueIndex);
console.log("RESULT: moonCatRescueIndex = " + rescueIndex + ";");

console.log("RESULT: moonCatDetailsByRescueOrders = [");
for (var i = 0; i < rescueIndex && i < MAX; i++) {
  var catId = moonCat.rescueOrder(i);
  var catDetails = moonCat.getCatDetails(catId);
  console.log("RESULT: [" + i + ", \"" + catDetails[0] + "\", \"" + catDetails[1] + "\", \"" + catDetails[2] + "\", \"" +
    catDetails[3] + "\", \"" + catDetails[4].shift(-18).toFixed(18) + "\", \"" + catDetails[5] + "\", \"" +
    catDetails[6].shift(-18).toFixed(18) + "\"],");
}
console.log("RESULT: ];");


var maxBlockNumber = eth.blockNumber;
var MOONCATRESCUEDEPLOYMENTBLOCKNUMBER = 4134866;
// Testing - set to smaller number
var PAGESIZE = 10000;

// Testing
// maxBlockNumber = MOONCATRESCUEDEPLOYMENTBLOCKNUMBER + PAGESIZE * 2;


var fromBlock = MOONCATRESCUEDEPLOYMENTBLOCKNUMBER;
var row = 0;
console.log("RESULT: moonCatRescueEvents = [");
while (fromBlock < maxBlockNumber) {
  var toBlock = fromBlock + PAGESIZE;
  if (toBlock > maxBlockNumber) {
    toBlock = maxBlockNumber;
  }
  console.log("Processing CatRescued events from " + fromBlock + " to " + toBlock);
  var catRescuedEvents = moonCat.CatRescued({}, { fromBlock: fromBlock, toBlock: toBlock });
  catRescuedEvents.watch(function (error, result) {
      var timestamp = eth.getBlock(result.blockNumber).timestamp;
      console.log("RESULT: [" + row + ", " + result.blockNumber + ", " + result.transactionIndex + ", \"" + result.transactionHash + "\", \"" + result.args.to + "\", \"" + result.args.catId + "\", " + timestamp + "],");
      row++;
  });
  catRescuedEvents.stopWatching();
  fromBlock += PAGESIZE;
}
console.log("RESULT: ];");


fromBlock = MOONCATRESCUEDEPLOYMENTBLOCKNUMBER;
row = 0;
console.log("RESULT: moonCatGenesisCatsAddedEvents = [");
while (fromBlock < maxBlockNumber) {
  var toBlock = fromBlock + PAGESIZE;
  if (toBlock > maxBlockNumber) {
    toBlock = maxBlockNumber;
  }
  console.log("Processing GenesisCatsAdded events from " + fromBlock + " to " + toBlock);
  var genesisCatsAddedEvents = moonCat.GenesisCatsAdded({}, { fromBlock: fromBlock, toBlock: toBlock });
  genesisCatsAddedEvents.watch(function (error, result) {
      var timestamp = eth.getBlock(result.blockNumber).timestamp;
      console.log("RESULT: [" + row + ", " + result.blockNumber + ", " + result.transactionIndex + ", \"" + result.transactionHash + "\", " + JSON.stringify(result.args.catIds) + ", " + timestamp + "], ");
      row++;
  });
  genesisCatsAddedEvents.stopWatching();
  fromBlock += PAGESIZE;
}
console.log("RESULT: ];");


EOF

grep -a "RESULT: " $MOONCATRESCUEDATA | sed "s/RESULT: //" > $MOONCATRESCUERESULTS
cat $MOONCATRESCUERESULTS
