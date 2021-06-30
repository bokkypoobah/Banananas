var fs = require('fs');
const util = require('util');

const INPUTDATADIR = "raw/";
// const INPUTDATAFILE = "docs/config.json";
// const OUTPUTDATAJS = "slumdoge.js";
// const OUTPUTDATAJSON = "slumdoge.json";

// console.log("Reading data from '" + INPUTDATAFILE + "' ...");

let records = [];
for (let i = 0; i < 25440; i++) {
  var filename = INPUTDATADIR + i + ".json";
  try {
    var data = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (data.description == null || data.description.length == 0) {
      console.log("Description missing for: " + i);
    }
    records.push({ image: data.image, name: data.name, attributes: data.attributes });
  } catch (e) {
    console.log("Error in file: " + filename);
  }
}

// (async () => {
//   await fs.writeFile(OUTPUTDATAJS, "const SLUMDOGEDATA=" + JSON.stringify(records, null, 2) + ";", (err) => {
//       if (err) throw err;
//       console.log('Data written to file: ' + OUTPUTDATAJS);
//   });
// })();
// (async () => {
//   await fs.writeFile(OUTPUTDATAJSON, JSON.stringify(records, null, 2), (err) => {
//       if (err) throw err;
//       console.log('Data written to file: ' + OUTPUTDATAJSON);
//   });
// })();


// const https = require('https')
// const url = "https://slumdoge.s3.ap-southeast-2.amazonaws.com/0";
// https.get(url, res => {
//   let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     data = JSON.parse(data);
//     console.log(data);
//   })
// }).on('error', err => {
//   console.log(err.message);
// })

// var config = JSON.parse(fs.readFileSync(INPUTDATAFILE, 'utf8'));
//
// console.log(util.inspect(config, showHidden=false, depth=3, colorize=true));
//
// console.log("allTokenIds: " + util.inspect(getAllTokenIds(config), showHidden=false, depth=3, colorize=true));
// console.log("allParents: " + util.inspect(getAllParents(config), showHidden=false, depth=3, colorize=true));
// console.log("allAttributes: " + util.inspect(getAllAttributes(config), showHidden=false, depth=3, colorize=true));
// console.log("allAncientDNAs: " + util.inspect(getAllAncientDNAs(config), showHidden=false, depth=3, colorize=true));
//
// for (let tokenId in Object.keys(config.tokens)) {
//   let token = config.tokens[tokenId];
//   const filenamePrefix = pad64Zeroes(tokenId);
//   const jsonFilename = OUTPUTDATADIR + filenamePrefix + ".json";
//   console.log(jsonFilename + " " + JSON.stringify(token));
//
//   const data = {};
//   const attributes = [];
//   data.name = config.name_prefix + ' #' + pad3Zeroes(tokenId);
//   data.description = data.name + '. ' + config.description;
//   data.external_url = config.external_url_prefix + '#/' + tokenId;
//   data.image = config.external_url_prefix + 'media/' + token.imageName;
//   data.imageTransparentBG = config.external_url_prefix + 'media/' + token.imageTBName;
//   attributes.push({ "trait_type": "Collection", "value": config.collection });
//   attributes.push({ "trait_type": "Generation", "value": token.generation });
//
//   for (let parentIndex in token.parents) {
//     let parent = token.parents[parentIndex];
//     console.log("parent" + " " + JSON.stringify(parent));
//     attributes.push({ "trait_type": "Parent", "value": parent.name });
//   }
//
//   for (let attributeIndex in token.attributes) {
//     let attribute = token.attributes[attributeIndex];
//     console.log("attribute" + " " + JSON.stringify(attribute));
//     attributes.push({ "trait_type": "Attribute", "value": attribute });
//   }
//
//   for (let ancientDNAIndex in token.ancientDNA) {
//     let ancientDNA = token.ancientDNA[ancientDNAIndex];
//     console.log("ancientDNA" + " " + JSON.stringify(ancientDNA));
//     attributes.push({ "trait_type": "Ancient DNA", "value": ancientDNA });
//   }
//
//   data.attributes = attributes;
//   (async () => {
//     await fs.writeFile(jsonFilename, JSON.stringify(data, null, 2), (err) => {
//         if (err) throw err;
//         console.log('Data written to file: ' + jsonFilename + " " + JSON.stringify(data, null, 2));
//     });
//   })();
//
// }
//
// // https://ipfs.io/ipfs/Qmdmw1BZA9eF8iH4yK7v3fjqqGEWXFM4x6bu4aLc2wdamB/Baby_000_background.png
// // {
// //   "description": "Zombie Baby #000",
// //   "external_url": "https://ethervendingmachine.io/nfts/0000000000000000000000000000000000000000000000000000000000000000.png",
// //   "image": "https://ethervendingmachine.io/nfts/0000000000000000000000000000000000000000000000000000000000000000.png",
// //   "name": "Zombie Baby #000",
// //   "attributes": [
// //       {
// //         "trait_type": "Collection",
// //         "value": "Zombie Babies"
// //       },
// //       {
// //         "trait_type": "Parent 1",
// //         "value": "Zombie #3636"
// //       },
// //       {
// //         "trait_type": "Parent 2",
// //         "value": "Zombie #4472"
// //       },
// //       {
// //         "trait_type": "Attribute",
// //         "value": "Front Beard Dark"
// //       },
// //       {
// //         "trait_type": "Attribute",
// //         "value": "Earring"
// //       },
// //       {
// //         "trait_type": "Attribute",
// //         "value": "Top Hat"
// //       },
// //       {
// //         "trait_type": "Ancient DNA",
// //         "value": "None"
// //       },
// //       {
// //         "display_type": "number",
// //         "trait_type": "Generation",
// //         "value": 2
// //       }
// //     ]
// // }
//
//
//
// function pad3Zeroes(s) {
//   var o = s.toString();
//   while (o.length < 3) {
//     o = "0" + o;
//   }
//   return o;
// }
//
// function pad64Zeroes(s) {
//   var o = s.toString();
//   while (o.length < 64) {
//     o = "0" + o;
//   }
//   return o;
// }
//
// function getAllTokenIds(config) {
//   return Object.keys(config.tokens);
// }
//
// function getAllParents(config) {
//   let allParents = {};
//   for (let tokenId in Object.keys(config.tokens)) {
//     let token = config.tokens[tokenId];
//     for (let parentIndex in token.parents) {
//       let parent = token.parents[parentIndex];
//       if (allParents[parent] === undefined) {
//         allParents[parent] = 1;
//       }
//     }
//   }
//   return Object.keys(allParents);
// }
//
// function getAllAttributes(config) {
//   let allAttributes = {};
//   for (let tokenId in Object.keys(config.tokens)) {
//     let token = config.tokens[tokenId];
//     for (let attributeIndex in token.attributes) {
//       let attribute = token.attributes[attributeIndex];
//       if (allAttributes[attribute] === undefined) {
//         allAttributes[attribute] = 1;
//       }
//     }
//   }
//   return Object.keys(allAttributes);
// }
//
// function getAllAncientDNAs(config) {
//   let allAncientDNAs = {};
//   for (let tokenId in Object.keys(config.tokens)) {
//     let token = config.tokens[tokenId];
//     for (let ancientDNAIndex in token.ancientDNA) {
//       let ancientDNA = token.ancientDNA[ancientDNAIndex];
//       if (allAncientDNAs[ancientDNA] === undefined) {
//         allAncientDNAs[ancientDNA] = 1;
//       }
//     }
//   }
//   return Object.keys(allAncientDNAs);
// }
//
// // Simple Addition Function in Javascript
// function add(a, b) {
//   return a+b
// }
// console.log(add(4, 6))

console.log(process.cwd());
