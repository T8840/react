// const axios = require("axios");
// const { ethers } = require("ethers");

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

async function connectWalletAndFetchNFTs() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // 请求用户钱包连接
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // 获取钱包地址
      const walletAddress = await signer.getAddress();

      // 调用 fetchNFTs 函数
      await fetchNFTs(walletAddress);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  } else {
    console.error("Ethereum is not supported in this browser.");
  }
}

connectWalletAndFetchNFTs();
