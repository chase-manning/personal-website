import { ProjectType } from "./Project";
import backd from "../../assets/projects/backd.jpg";
import uwucrew from "../../assets/projects/uwucrew.jpg";
import waifusion from "../../assets/projects/waifusion.jpg";
import billionaires from "../../assets/projects/billionaires.jpg";
import cryptoCapsule from "../../assets/projects/crypto-capsule.jpg";
import ami from "../../assets/projects/ami.jpg";
import state from "../../assets/projects/state.jpg";
import sitesoft from "../../assets/projects/sitesoft.jpg";
import slingshot from "../../assets/projects/slingshot.jpg";
import orcon from "../../assets/projects/orcon.jpg";
import pso from "../../assets/projects/pso.jpg";
import dateformat from "../../assets/projects/dateformat.jpg";
import dapp from "../../assets/projects/dapp-template.jpg";

export interface TabType {
  label: string;
  projects: ProjectType[];
}

const portfolioTabs: TabType[] = [
  {
    label: "Web3",
    projects: [
      {
        name: "Backd Fund",
        description:
          "The DeFi protocol for increasing the yield and utility of your crypto assets with reactive liquidity.",
        image: backd,
        link: "https://backd.fund/",
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
      {
        name: "Crypto Capsule",
        description:
          "Crypto Capsule is a tool for creating timelock contracts that can be used as a decentralised term deposit or trust fund.",
        image: cryptoCapsule,
        link: "https://cryptocapsule.io/",
      },
      {
        name: "Bitcoin Billionaires",
        description:
          "A collection of unique pixel art NFTs from the creators of Bitcoin Billionaire, the hit mobile game with over 10 million downloads.",
        image: billionaires,
        link: "https://billionaires.io/",
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
        name: "Photoshop Online",
        description:
          "An ongoing attempt to rebuild Photoshop as a online web application with live editing using websockets.",
        image: pso,
        link: "https://photoshoponline.app/",
      },
      {
        name: "Dateformat",
        description:
          "The fastest, and most popular javascript date formatting library on npm.",
        image: dateformat,
        link: "https://github.com/felixge/node-dateformat",
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
