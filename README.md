# Bananas




<br />

## Scraped "Static" Data

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

Data for all tokens have been combined using [scripts/02_generateData.js](scripts/02_generateData.js) to generate [scripts/bananaData.js](scripts/bananaData.js) and the compact version [scripts/bananaData.min.js](scripts/bananaData.min.js):

```javascript

```

You may find this data useful for your projects.

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd - Jun 30 2019. The MIT Licence.
