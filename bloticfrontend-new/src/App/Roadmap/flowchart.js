import React from "react";

import Card from "./Card";

function FlowChart() {
  const nodes = [
    {
      id: 1,
      className: "roadmap-left-line",
      heading: "Web3",
      buttons: [
        { label: "Introduction", link: "https://blotic.super.site/introduction" },
        { label: "Web1 vs Web2 vs Web3", link: "https://blotic.super.site/web1-vs-web2-vs-web3" },
        { label: "Core Ideas", link: "https://blotic.super.site/core-ideas" },
      ],
    },
    {
      id: 2,
      className: "roadmap-right-line",
      heading: "Blockchain",
      buttons: [
        { label: "Understanding Tech", link: "https://blotic.super.site/understanding-the-tech" },
        { label: "Decentralisation", link: "https://blotic.super.site/decentralisation" },
        { label: "Security", link: "https://blotic.super.site/security" },
        { label: "Scalability", link: "https://blotic.super.site/scalability" },
        { label: "Trilemma", link: "https://blotic.super.site/trilemma" },
        { label: "Mining", link: "https://blotic.super.site/mining" },
        { label: "Concensus Mechanism", link: "https://blotic.super.site/consensus-mechanism" },
      ],
    },
    {
      id: 3,
      className: "roadmap-left-line",
      heading: "Cryptocurrencies",
      buttons: [
        { label: "Basics", link: "https://blotic.super.site/basics" },
        { label: "Whitepaper", link: "https://blotic.super.site/whitepapers" },
        { label: "Bitcoin", link: "https://blotic.super.site/bitcoin" },
        { label: "Ethereum", link: "https://blotic.super.site/ethereum" },
        { label: "L1 vs L2", link: "https://blotic.super.site/l1-vs-l2" },
        { label: "Eth Scaling Solution", link: "https://blotic.super.site/eth-scaling-solution" },
        { label: "Coin vs Tokens", link: "https://blotic.super.site/coin-vs-token" },
        { label: "Stablecoins", link: "https://blotic.super.site/stablecoins" },
        { label: "Wallets", link: "https://blotic.super.site/wallets" },
        { label: "Exchanges", link: "https://blotic.super.site/exchanges" },
        { label: "Tokenomics", link: "https://blotic.super.site/tokenomics" },
        { label: "ZK", link: "https://blotic.super.site/zk" },
      ],
    },
    {
      id: 4,
      className: "roadmap-right-line",
      heading: "NFTs",
      buttons: [
        { label: "Introduction", link: "https://blotic.super.site/introduction" },
        { label: "ERC 721 vs 1155", link: "https://blotic.super.site/erc-721-vs-1155" },
        { label: "Soul Bound Tokens", link: "https://blotic.super.site/soul-bound-tokens" },
        { label: "P2E Games", link: "https://blotic.super.site/p2e-games" },
      ],
    },
    {
      id: 5,
      className: "roadmap-left-line",
      heading: "Metaverse",
      buttons: [
        { label: "History", link: "https://blotic.super.site/history" },
        { label: "Introduction", link: "https://blotic.super.site/introduction" },
        { label: "Need of Metaverse", link: "https://blotic.super.site/need-of-metaverse" },
        { label: "Working of Metaverse", link: "https://blotic.super.site/working-of-metaverse" },
        { label: "Uses of Metaverse", link: "https://blotic.super.site/uses-of-metaverse" },
        { label: "Existing Metaverse", link: "https://blotic.super.site/existing-metaverse" },
      ],
    },
    {
      id: 6,
      className: "roadmap-right-line",
      heading: "Smart Contracts",
      buttons: [
        { label: "About Smart Contracts", link: "https://blotic.super.site/about-smart-contracts" },
        { label: "Use Cases", link: "https://blotic.super.site/use-cases" },
        { label: "DeFi", link: "https://blotic.super.site/defi" },
        { label: "DeFi Applications", link: "https://blotic.super.site/defi-applications" },
        { label: "DApps", link: "https://blotic.super.site/dapps" },
        { label: "Popular DApps", link: "https://blotic.super.site/popular-dapps" },
      ],
    },
    {
      id: 7,
      className: "roadmap-left-line",
      heading: "DAO",
      buttons: [
        { label: "Idea behind DAO", link: "https://blotic.super.site/idea-behind-dao" },
        { label: "Types of DAO", link: "https://blotic.super.site/types-of-daos" },
        { label: "Extra", link: "https://blotic.super.site/extra" },
      ],
    },
    {
      id: 8,
      className: "roadmap-right-line",
      heading: "Jobs in Web3",
      buttons: [
        { label: "Learning Platforms", link: "https://blotic.super.site/learning-platforms" },
        { label: "Job Boards", link: "https://blotic.super.site/job-boards" },
        { label: "Developer Roadmap", link: "https://blotic.super.site/developer-roadmap" },
        { label: "Tech", link: "https://blotic.super.site/tech" },
        { label: "Rust", link: "https://blotic.super.site/rust" },
        { label: "Non-Tech", link: "https://blotic.super.site/non-tech" },
      ],
    },
    {
      id: 9,
      className: "roadmap-left-line",
      heading: "Web3 Slangs",
      buttons: [
        { label: "Web3 Slangs", link: "https://blotic.super.site/web3-slangs" },
      ],
    },
    {
      id: 10,
      className: "roadmap-right-line",
      heading: "Popular Websites",
      buttons: [
        { label: "DApp World", link: "https://blotic.super.site/dapp-world" },
        { label: "Blockchain Scanner", link: "https://blotic.super.site/blockchain-scanner" },
      ],
    },
    // Add more nodes with different button configurations and headings
  ];

  return (
    <div className="roadmap-flowchart">
      <div className="roadmap-card1">
        {nodes.map((node) => (
          <Card
            className={node.className}
            key={node.id}
            cardHeading={node.heading}
            buttons={node.buttons}
          />
        ))}
      </div>
    </div>
  );
}

export default FlowChart;
