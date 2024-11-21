import { ProjectType } from "../pages/landing-page/Project";
import backd from "../assets/projects/backd.jpg";
import uwucrew from "../assets/projects/uwucrew.jpg";
import aiko from "../assets/projects/aiko.jpg";
import waifusion from "../assets/projects/waifusion.jpg";
import billionaires from "../assets/projects/billionaires.jpg";
import cryptoCapsule from "../assets/projects/crypto-capsule.jpg";
import killerGF from "../assets/projects/killer-gf.jpg";
import ami from "../assets/projects/ami.jpg";
import state from "../assets/projects/state.jpg";
import sitesoft from "../assets/projects/sitesoft.jpg";
import slingshot from "../assets/projects/slingshot.jpg";
import orcon from "../assets/projects/orcon.jpg";
import reactPhotoStudio from "../assets/projects/react-photo-studio.jpg";
import dateformat from "../assets/projects/dateformat.jpg";
import dapp from "../assets/projects/dapp-template.jpg";
import debtFarming from "../assets/projects/debt-farming.jpg";
import akula from "../assets/projects/akula.jpg";
import gummy from "../assets/projects/gummy.jpg";
import tlx from "../assets/projects/tlx.jpg";

export interface TabType {
  label: string;
  projects: ProjectType[];
}

const portfolioTabs: TabType[] = [
  {
    label: "Web3",
    projects: [
      {
        name: "TLX",
        description:
          "TLX provides leveraged tokens for over 50 assets with up to 20x leverage, powered by Synthetix, on the Optimism blockchain.",
        image: tlx,
        link: "https://tlx.fi/",
      },
      {
        name: "Mero Finance",
        description:
          "The DeFi protocol for increasing the yield and utility of your crypto assets with reactive liquidity.",
        image: backd,
        link: "https://mero.finance/",
      },
      {
        name: "Crypto Capsule",
        description:
          "Crypto Capsule is a tool for creating timelock contracts that can be used as a decentralised term deposit or trust fund.",
        image: cryptoCapsule,
        link: "https://blockchain-time-capsule.web.app/",
      },
      {
        name: "Debt Farming",
        description:
          "The best DeFi yields on Ethereum for your favourite crypto assets.",
        image: debtFarming,
        link: "https://debtfarming.com/",
      },
      {
        name: "Akula",
        description:
          "Akula is the fastest Ethereum protocol client implementation. It supports Faster sync speeds, crash resilience and a state API.",
        image: akula,
        link: "https://akula-dac7e.web.app/",
      },
      {
        name: "Killer GF",
        description:
          "An anime art NFT collection on Ethereum, featuring cute girlfriends that are also killer assassins. Art by ex-Riot Games artist Zeronis.",
        image: killerGF,
        link: "https://killergf.com/",
      },
      {
        name: "Aiko Virtual",
        description:
          "A collection of 8,888 NFTs that are all about 'Cyber Cute', an aesthetic that blends future tech with anime.",
        image: aiko,
        link: "https://aikovirtual.com/",
      },
      {
        name: "Bitcoin Billionaires",
        description:
          "A collection of unique pixel art NFTs from the creators of Bitcoin Billionaire, the hit mobile game with over 10 million downloads.",
        image: billionaires,
        link: "https://billionaires.io/",
      },
      {
        name: "Uwucrew",
        description:
          "uwucrew is a generative collection of 9,670 avatar NFTs inspired by anime and pop culture.",
        image: uwucrew,
        link: "https://uwucrew.art/",
      },
      {
        name: "Waifusion",
        description:
          "Waifusion is a set of 16,384 uniquely generated, anime inspired, digital waifu NFT collectibles on Ethereum and Binance Smart Chain.",
        image: waifusion,
        link: "https://waifusion.io/",
      },
    ],
  },
  {
    label: "Web2",
    projects: [
      {
        name: "State Insurance",
        description:
          "State Insurance protects over 400,000 New Zealanders. Recipient of Reader's Digest Trusted Brand Award.",
        image: state,
        link: "https://business.state.co.nz/",
      },
      {
        name: "AMI Insurance",
        description:
          "AMI is one of New Zealand's most trusted insurers, receiving the trusted Brand award for eight years running.",
        image: ami,
        link: "https://business.ami.co.nz/",
      },
      {
        name: "Site Connect",
        description:
          "New Zealand's leading site management & health and safety system for construction and property management.",
        image: sitesoft,
        link: "https://sitesoft.com/",
      },
      {
        name: "Orcon Power",
        description:
          "From broadband to power and mobile plans, Orcon offers a range of services to make your life simpler, easier & faster.",
        image: orcon,
        link: "https://www.orcon.net.nz/power",
      },
      {
        name: "Slingshot Power",
        description:
          "Slingshot is the fourth largest telecommunications company in New Zealand that bundles power into a single plan.",
        image: slingshot,
        link: "https://www.slingshot.co.nz/power",
      },
    ],
  },
  {
    label: "Other",
    projects: [
      {
        name: "React Photo Studio",
        description:
          "React Photo Studio is a free online photo editor for photography and design",
        image: reactPhotoStudio,
        link: "https://reactphotostudio.app/",
      },
      {
        name: "Dateformat",
        description:
          "The fastest, and most popular javascript date formatting library on npm.",
        image: dateformat,
        link: "https://github.com/felixge/node-dateformat",
      },
      {
        name: "Gummy Dashboard",
        description:
          "A simple and free dashboard for displaying your favourite sites using iframes",
        image: gummy,
        link: "https://gummy-a10e0.web.app/",
      },
      {
        name: "Dapp CRA Template",
        description:
          "A project boilerplate create react app template for creating EVM dapps.",

        image: dapp,
        link: "https://github.com/chase-manning/cra-template-dapp",
      },
    ],
  },
];

export default portfolioTabs;
