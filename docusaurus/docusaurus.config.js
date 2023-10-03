// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/duotoneLight");
const darkCodeTheme = require("prism-react-renderer/themes/duotoneDark");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "极客 Web3",
  tagline:
    "极客 web3 正广纳有识之士，我们的定位是 Web3版《经济学人》，专注于泛 Web3 相关技术及其社会影响，立志于打造 public goods 平台，并充当创业者展示 idea 的重要渠道。" +
    "欢迎加入！",
  favicon: "img/web3_geeks_logo_small_output.png",

  // Set the production url of your site here
  url: "https://ic123.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "极客 Web3 社区", // Usually your GitHub org/user name.
  projectName: "Web3Geeks", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: `G-W64Y138P08`,
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ic123-xyz/ic123/tree/main/docusaurus",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        // blog: {
        //   showReadingTime: true,
        //   blogTitle: "互联网计算机ICP中文社区新闻",
        //   blogDescription: "来自ICP生态的社区新闻，产品进展，开发者动态",
        //   blogSidebarCount: "ALL",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/icp-on-chain-badge-2-1.png",
      metadata: [
        {
          name: "keywords",
          content:
            "Geek, Web3, Crypto, Blockchain, 区块链, 极客, NFT, DeFi, Web 3.0",
        },
      ],
      navbar: {
        title: "Web3Geeks",
        logo: {
          alt: "ICP Logo",
          src: "img/web3_geeks_logo_small_output.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "hotArticleSidebar",
            position: "left",
            label: "热门文章",
          },
          {
            href: "https://twitter.com/eternal1997L",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "申请加入",
            items: [
              {
                label: "Advisor - 0xkookoo",
                href: "https://twitter.com/0xkookoo",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/eternal1997L",
              },
              {
                label: "Telegram",
                href: "https://t.me/geeksweb3",
              },
              {
                label: "Medium",
                href: "https://medium.com/@eternal1997L",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 极客 Web3 社区, Powered by Internet Computer`,
        logo: {
          alt: "100% hosted on-chain ICP badge",
          src: "img/icp-on-chain-badge-horizontal.png",
          width: 300,
          height: 36,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "mark_us",
        content: "正式发布，抢先体验",
        backgroundColor: "#04D9C4",
        textColor: "#000000",
        isCloseable: false,
      },
    }),
};

module.exports = config;
