var fs = require('fs');
const util = require('util');


const OSINPUTDATADIR = "osraw/";
let osrecords = {};
for (let i = 0; i < 8888; i += 50) {
  var filename = OSINPUTDATADIR + i + ".json";
  try {
    var data = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (data.assets == null || data.assets.length == 0) {
      console.log("Assets missing for: " + i);
    }
    for (let j = 0; j < data.assets.length; j++) {
      const asset = data.assets[j];
      osrecords[asset.token_id] = asset;
    }
  } catch (e) {
    console.log("Error in file: " + filename);
  }
}

// 568 missing image - had to refresh metadata on OS
// console.log(osrecords[567]);
// console.log(osrecords[568]);
// console.log(osrecords[569]);

const LEFTIES = [
  113, 160, 171, 193, 377, 430, 439, 552, 810, 926,
  1055, 1089, 1161, 1209, 1242, 1442, 1475, 1609, 1918,
  2021, 2087, 2173, 2390, 2418, 2637, 2828, 2919, 2944, 2949,
  3034, 3158, 3371, 3435, 3469, 3684, 3490, 3493, 3850, 3991,
  4137, 4149, 4272, 4383, 4460, 4565, 4731, 4799, 4802, 4807, 4847, 4864, 4914,
  5054, 5257, 5494, 5575, 5594, 5728, 5788, 5802, 5845, 5852, 5857,
  6114, 6244, 6265, 6328, 6438, 6504, 6578, 6612, 6639, 6671, 6818,
  7112, 7171, 7193, 7331, 7351, 7625, 7708, 7845, 7878, 7908, 7957,
  8057, 8065, 8126, 8160, 8173, 8333, 8428, 8510, 8607, 8704, 8722, 8835, 8880
];

const MADBOOGIELOGO = [
  1842, 2428, 3430, 3439, 3553, 4175, 4764, 7710, 8120
];

let lefties = {};
for (let i = 0; i < LEFTIES.length; i++) {
  lefties[LEFTIES[i]] = LEFTIES[i];
}
let madBoogieLogo = {};
for (let i = 0; i < MADBOOGIELOGO.length; i++) {
  madBoogieLogo[MADBOOGIELOGO[i]] = MADBOOGIELOGO[i];
}
// console.log("lefties: " + JSON.stringify(lefties));

const INPUTDATADIR = "raw/";
let records = [];
for (let i = 0; i < 8888; i++) {
  var filename = INPUTDATADIR + i + ".json";
  try {
    var data = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (data.description == null || data.description.length == 0) {
      console.log("Description missing for: " + i);
    }
    const osData = osrecords[data.tokenId];
    if (!osData) {
      console.log("Cannot find OS data for: " + data.tokenId);
    }
    records.push({
      tokenId: data.tokenId,
      name: data.name,
      image: data.image,
      osimage: osData == null ? null : osData.image_url,
      permalink: osData == null ? null : osData.permalink,
      // description: data.description,
      attributes: data.attributes,
      facing: lefties[data.tokenId] ? "Left" : "Right",
      madBoogieLogo: madBoogieLogo[data.tokenId] ? "True" : null,
    });
  } catch (e) {
    console.log("Error in file: " + filename);
  }
}
// console.log(JSON.stringify(records.slice(0, 3), null, 2))
//
// const lookup = {};
// for (let i in moonCatRescueEvents) {
//   const e = moonCatRescueEvents[i];
//   lookup[e[5]] = { catId: e[5], tx: e[3], block: e[1], timestamp: e[6], by: e[4] };
// }
// // console.log(lookup);
// for (let i in moonCatGenesisCatsAddedEvents) {
//   const e = moonCatGenesisCatsAddedEvents[i];
//   for (let j in e[4]) {
//     const e1 = e[4][j];
//     lookup[e1] = { catId: e1, tx: e[3], block: e[1], timestamp: e[5], by: "0xa97f8ffc8f8e354475880448334e4e99a0e7212f" };
//   }
// }
// // console.log(lookup);
// // '0xff5e000ca7':
// //  { catId: '0xff5e000ca7',
// //    tx:
// //     '0x4d5472934a07e2078049e0ac539a18f442c5321b3d7a6a1f404c8dffd77d5985',
// //    block: 4363303,
// //    timestamp: 1507932258,
// //    by: '0xa97f8ffc8f8e354475880448334e4e99a0e7212f' },
//
// const output = [];
// for (let i in moonCatDetailsByRescueOrders) {
//   const e = moonCatDetailsByRescueOrders[i];
//   const l = lookup[e[1]];
//   const apiDataRecord = records[i];
//   // console.log(JSON.stringify(apiDataRecord));
//   if (l) {
//     output.push({
//       rescueIndex: i,
//       catId: e[1],
//       rescued: {
//         block: l.block,
//         tx: l.tx,
//         timestamp: l.timestamp,
//         by: l.by
//       },
//       name: apiDataRecord.name,
//       description: apiDataRecord.description,
//       image: apiDataRecord.image,
//       attributes: apiDataRecord.attributes,
//       details: apiDataRecord.details,
//     })
//   } else {
//     console.log("Cannot find catId '" + e[1] + "' for rescueOrder: " + i);
//     console.log(e);
//   }
// }
// // console.log(output);
//
const OUTPUTMINREPORT = "bananaData.min.js";
(async () => {
  await fs.writeFile(OUTPUTMINREPORT, "const BANANADATA=" + JSON.stringify(records) + ";", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTMINREPORT);
  });
})();

const OUTPUTREPORT = "bananaData.js";
(async () => {
  await fs.writeFile(OUTPUTREPORT, "const BANANADATA=" + JSON.stringify(records, null, 2) + ";", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTREPORT);
  });
})();

console.log(process.cwd());
