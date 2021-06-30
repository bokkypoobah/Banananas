var fs = require('fs');
const util = require('util');
require('./MoonCatRescueResults.js');

console.log("moonCatTotalSupply: " + moonCatTotalSupply);
console.log("moonCatRescueIndex: " + moonCatRescueIndex);
console.log("moonCatDetailsByRescueOrders: " + moonCatDetailsByRescueOrders.length);
console.log("moonCatGenesisCatsAddedEvents: " + moonCatGenesisCatsAddedEvents.length);

const lookup = {};
for (let i in moonCatRescueEvents) {
  const e = moonCatRescueEvents[i];
  lookup[e[5]] = { catId: e[5], tx: e[3], block: e[1], timestamp: e[6], by: e[4] };
}
// console.log(lookup);
for (let i in moonCatGenesisCatsAddedEvents) {
  const e = moonCatGenesisCatsAddedEvents[i];
  for (let j in e[4]) {
    const e1 = e[4][j];
    lookup[e1] = { catId: e1, tx: e[3], block: e[1], timestamp: e[5], by: "0xa97f8ffc8f8e354475880448334e4e99a0e7212f" };
  }
}
// console.log(lookup);
// '0xff5e000ca7':
//  { catId: '0xff5e000ca7',
//    tx:
//     '0x4d5472934a07e2078049e0ac539a18f442c5321b3d7a6a1f404c8dffd77d5985',
//    block: 4363303,
//    timestamp: 1507932258,
//    by: '0xa97f8ffc8f8e354475880448334e4e99a0e7212f' },

const output = [];
for (let i in moonCatDetailsByRescueOrders) {
  const e = moonCatDetailsByRescueOrders[i];
  const l = lookup[e[1]];
  // console.log(e);
  if (l) {
    output.push({ rescueIndex: i, catId: e[1], block: l.block, tx: l.tx, timestamp: l.timestamp, by: l.by })
  } else {
    console.log("Cannot find catId '" + e[1] + "' for rescueOrder: " + i);
    console.log(e);
  }
}
// console.log(output);

const OUTPUTREPORT = "moonCatData.js";
(async () => {
  await fs.writeFile(OUTPUTREPORT, "const MOONCATDATA=" + JSON.stringify(output, null, 2) + ";", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTREPORT);
  });
})();

console.log(process.cwd());
