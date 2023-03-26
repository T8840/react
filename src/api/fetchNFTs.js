const axios = require("axios");

async function fetchNFTs(walletAddress) {
  const response = await axios.get(`https://rinkeby-api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&offset=0&limit=50`);
  const nftMetadata = response.data.assets.map((asset) => {
    return {
      tokenId: asset.token_id,
      type: asset.asset_contract.schema_name,
      name: asset.name,
      imageUrl: asset.image_url,
    };
  });

//   console.log(nftMetadata);

  const nftsByType = nftMetadata.reduce((result, nft) => {
    const type = nft.type;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(nft);
    return result;
  }, {});

  console.log(nftsByType);
}
