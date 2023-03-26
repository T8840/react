import React, { useEffect, useState } from "react";
import axios from "axios";

export function NFTList({ walletAddress }) {
  const [nfts, setNfts] = useState([]);
  const [nftsByType, setNftsByType] = useState({});

  useEffect(() => {
    async function fetchNFTs() {
      // 获取钱包持有的 NFT 列表（Rinkeby 测试网络）
      const response = await axios.get(`https://rinkeby-api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&offset=0&limit=50`);
      const nftMetadata = response.data.assets.map((asset) => {
        return {
          tokenId: asset.token_id,
          type: asset.asset_contract.schema_name,
          name: asset.name,
          imageUrl: asset.image_url,
        };
      });

      console.log(nftMetadata);

      setNfts(nftMetadata);
    }

    fetchNFTs();
  }, [walletAddress]);

  useEffect(() => {
    const nftGroups = {};

    nfts.forEach((nft) => {
      const type = nft.type;
      if (!nftGroups[type]) {
        nftGroups[type] = [];
      }
      nftGroups[type].push(nft);
    });

    setNftsByType(nftGroups);
  }, [nfts]);

  // ... 根据类型渲染 NFT 的代码 ...
  // 在这里添加您之前编写的代码，以根据 NFT 类型生成不同的 HTML 结构

  return (
    <div>
      {/* 根据类型渲染 NFT 的代码 */}
    </div>
  );
}
