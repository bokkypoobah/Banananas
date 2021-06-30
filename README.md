# Bananas

See https://bokkypoobah.github.io/Bananas/


<br />

## Scraped "Static" Data

### Bananaas API Server

The script [scripts/01_getIndividualJSONs.sh](scripts/01_getIndividualJSONs.sh) retrieves the JSON files from `https://www.boringbananas.co/api/{tokenId}`.

Sample data for tokenId 666:

```javascript
{
    "attributes": [
        {
            "trait_type": "Background",
            "value": "Lilac"
        },
        {
            "trait_type": "Banana Base",
            "value": "Yellow"
        },
        {
            "trait_type": "Mouth",
            "value": "Pipe"
        },
        {
            "trait_type": "Eyes",
            "value": "Trippy"
        },
        {
            "trait_type": "Head Gear",
            "value": "Raiden"
        }
    ],
    "description": "BoringBananasCo is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
    "external_url": "https://www.boringbananas.co",
    "image": "https://gateway.pinata.cloud/ipfs/QmXMDb9vyzcJgpGJDcQgvDEKHPfwoWq6sLeuun988yZDKG",
    "name": "#666",
    "tokenId": 666
}
```

<br />

### OpenSea Data

The script [scripts/02_getOSJSONs.sh](scripts/02_getOSJSONs.sh) retrieves the JSON files from OpenSea for the Banansdfa contract.

Sample data:

```javascript
{
    "assets": [
        {
            "animation_original_url": null,
            "animation_url": null,
            "asset_contract": {
                "address": "0xb9ab19454ccb145f9643214616c5571b8a4ef4f2",
                "asset_contract_type": "non-fungible",
                "buyer_fee_basis_points": 0,
                "created_date": "2021-06-29T15:43:01.014289",
                "default_to_fiat": false,
                "description": "BoringBananasCo is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
                "dev_buyer_fee_basis_points": 0,
                "dev_seller_fee_basis_points": 500,
                "external_link": "https://boringbananas.co",
                "image_url": "https://lh3.googleusercontent.com/QyaD6gIdSOJQPCbq9l_KgpPebbwfBqomb4Dl_yCyF1sM4qIJFz-WpXoWgtBudYGAJ1jWV_kmtJsPexZ-2laczBVUZH3oGNR-v0K4=s120",
                "name": "Boring Bananas Co.",
                "nft_version": "3.0",
                "only_proxied_transfers": false,
                "opensea_buyer_fee_basis_points": 0,
                "opensea_seller_fee_basis_points": 250,
                "opensea_version": null,
                "owner": 53605433,
                "payout_address": "0x5100c9852f99278f1188278b4c0534d2a55c37c5",
                "schema_name": "ERC721",
                "seller_fee_basis_points": 750,
                "symbol": "BBC",
                "total_supply": "0"
            },
            "background_color": null,
            "collection": {
                "banner_image_url": null,
                "chat_url": null,
                "created_date": "2021-06-29T18:01:31.191756",
                "default_to_fiat": false,
                "description": "BoringBananasCo is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
                "dev_buyer_fee_basis_points": "0",
                "dev_seller_fee_basis_points": "500",
                "discord_url": null,
                ...
```

<br />

### Generate Combined Data

Data for all tokens have been combined using [scripts/03_generateData.js](scripts/03_generateData.js) to generate [scripts/bananaData.js](scripts/bananaData.js) and the compact version [scripts/bananaData.min.js](scripts/bananaData.min.js):

```javascript
const BANANADATA=[
  {
    "tokenId": 0,
    "name": "#0",
    "image": "https://gateway.pinata.cloud/ipfs/Qme4bfYh3jnPFvLwLYFxWYkSQoym72M5ZgGRZzqiTPuLuK",
    "osimage": "https://lh3.googleusercontent.com/suqHN-z-s8dWibjOYT2ciNqyYY6vKN8mbd-odZpsegC5cAuZ4_j2A9xa92ZdImvfiqsPN2rSfsaUlcjQiejp3U6B4nUcJtQNclzx_w",
    "description": "BoringBananasCo is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Downtown"
      },
      {
        "trait_type": "Banana Base",
        "value": "Green"
      },
      {
        "trait_type": "Mouth",
        "value": "Grrrr"
      },
      {
        "trait_type": "Eyes",
        "value": "Cyberpunk"
      },
      {
        "trait_type": "Head Gear",
        "value": "Dood"
      }
    ]
  },
  {
    "tokenId": 1,
    "name": "#1",
    ...
```

You may find this data useful for your projects.

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd - Jun 30 2019. The MIT Licence.
