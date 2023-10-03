import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    background: "#FFD3B6",
    title: "揭示真相 (Tell the Truth)",
    /* Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, */
    description: (
      <>
        我们坚信在Web3时代，揭示真相是至关重要的。作为"极客web3"，我们承诺向读者提供准确、客观的信息和分析，帮助他们了解Web3技术的本质、潜力和社会影响。我们追求真实的报道，为您带来独立而可靠的见解。
      </>
    ),
  },
  {
    background: "#DCEDC1",
    title: "基石 (The Fundamental)",
    /* Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, */
    description: (
      <>
        在这个快速发展的Web3世界中，我们将为您提供关键的基础知识。作为Web3专家，我们致力于探索和解释Web3技术的核心概念和原则。从区块链到智能合约，从去中心化身份到加密经济，我们将帮助您建立对Web3基础的深入理解。
      </>
    ),
  },
  {
    background: "#FFAAA5",
    title: "Web3专家 (Web3 Experts)",
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, */
    description: (
      <>
        我们是Web3领域的专家团队。"极客web3"聚集了行业内最有才华的专业人士，他们对Web3技术和生态系统有着深入的了解。无论是最新的技术趋势、项目分析还是市场动态，我们的专家将为您提供独到的见解和观点，助您在Web3世界中保持领先。
      </>
    ),
  },
  {
    background: "#A8E6CF",
    title: "节点网络 (Node Network)",
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, */
    description: (
      <>
        "极客 web3"在各个赛道都拥有自己的节点人脉（Node），我们与 Web3
        技术的各个领域保持紧密联系，并将这些知识进行结构化的输出。不论您关注的是
        DeFi、Game、NFT 还是其他 Web3
        创新领域，我们将为您提供精准、深入的资讯和见解。
      </>
    ),
  },
];

function Feature({ Svg, background, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div
        className="text--center padding-horiz--md"
        style={{ background: background, padding: 20 }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
