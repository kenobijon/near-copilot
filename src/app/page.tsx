"use client";
import Chat from "@/components/chat";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const messages = [
    {
      content: "what is AI?",
      role: "user",
      id: "0.6541305248962412",
    },
    {
      id: "LppGOvH",
      createdAt: "2023-11-03T20:34:59.109Z",
      content:
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. AI can be categorized as either weak or strong. Weak AI, also known as narrow AI, is an AI system that is designed and trained for a particular task. Virtual personal assistants, such as Apple's Siri, are a form of weak AI. Strong AI, also known as artificial general intelligence, is an AI system with generalized human cognitive abilities.\n\nAI is closely linked with machine learning (rapid algorithmic processing of information), and digital neural networks, which refer to the increasingly responsive, interactive, and automated world of software. AI has a wide range of applications, including trading bots for automated interaction with smart contracts, AI-generated art and value, and many more.\n Verified Sources: \n1. [https://github.com/near/wiki/tree/main/wiki/support/learning/understanding-web3/02_landscape/2.6_emerging-technologies.md](https://github.com/near/wiki/tree/main/wiki/support/learning/understanding-web3/02_landscape/2.6_emerging-technologies.md)\n2. [https://near-horizon.notion.site/HZN-Community-Hub-ae241296ec72487db7b76aae050fb894](https://near-horizon.notion.site/HZN-Community-Hub-ae241296ec72487db7b76aae050fb894)\n3. [https://github.com/near/nearcore/tree/master/utils/mainnet-res/res/mainnet_genesis.json](https://github.com/near/nearcore/tree/master/utils/mainnet-res/res/mainnet_genesis.json)\n4. [https://github.com/near/nearcore/tree/master/pytest/tests/sandbox/patch_state.py](https://github.com/near/nearcore/tree/master/pytest/tests/sandbox/patch_state.py)\n",
      role: "assistant",
    },
    {
      content: "What is Chat GPT?",
      role: "user",
      id: "0.16678104805308092",
    },
    {
      id: "T04jBT0",
      createdAt: "2023-11-03T20:35:47.450Z",
      content:
        "Looks like what you are looking for can be found in full [here](https://github.com/near/wallet-selector/tree/main/packages/opto-wallet/src/lib/icon.ts)I could not find the answer to this in the verified sources.\n Verified Sources: \n1. [https://github.com/near/wallet-selector/tree/main/packages/near-mobile-wallet/src/lib/icon.ts](https://github.com/near/wallet-selector/tree/main/packages/near-mobile-wallet/src/lib/icon.ts)\n2. [https://github.com/near/wallet-selector/tree/main/packages/sender/src/lib/icon.ts](https://github.com/near/wallet-selector/tree/main/packages/sender/src/lib/icon.ts)\n3. [https://github.com/near/wallet-selector/tree/main/packages/opto-wallet/src/lib/icon.ts](https://github.com/near/wallet-selector/tree/main/packages/opto-wallet/src/lib/icon.ts)\n",
      role: "assistant",
    },
    {
      content: "What is NEAR?",
      role: "user",
      id: "0.42059880590260823",
    },
    {
      id: "RgpsxKE",
      createdAt: "2023-11-03T21:25:32.120Z",
      content:
        "NEAR is a user-friendly and carbon-neutral blockchain that has been built from the ground up to be performant, secure, and infinitely scalable. It is a decentralized application platform running on its own blockchain, which solves usability and scaling issues via sharding.\n\nIn technical terms, NEAR is a layer one, sharded, proof-of-stake blockchain built with usability in mind. It uses human-readable accounts (e.g., `alice.near`), leverages a web-based wallet, and has a simple yet rich system of Access Keys to handle account permissions.\n\nTransactions on NEAR are incredibly fast (~1s transactions) and cheap (<1¢ in fees). The network is certified carbon-neutral and consumes in a year the same energy bitcoin consumes in 3 minutes.\n\nFor developers, NEAR provides a great experience. It enables the creation of smart contracts using Javascript or Rust, offers simple onboarding thanks to its complete documentation and a multitude of examples, and holds office hours every weekday where anyone can participate. Additionally, 30% of gas fees go to the developers.\n\nNEAR scales infinitely and resists short-term usage spikes thanks to its sharding. It is interoperable with Ethereum using Rainbow Bridge, the first trustless bridge ever created, and is EVM compatible with Project Aurora, allowing for easy deployment of Solidity contracts.\n\nThe NEAR Protocol is a permissionless, Proof-of-Stake blockchain protocol that anyone can access, add transactions to, or read from. The public NEAR blockchain is an instantiation of the reference code, but theoretically, this repo could be forked and deployed as a separate chain, as much as many protocols have done to build upon the core Bitcoin code.\n\nThe early development of the protocol and its tooling has been done by Pagoda (formerly NEAR Inc), a US-based software research and development company. However, Pagoda does not own or run the NEAR Protocol, which is decentralized. It continues to propose changes to the reference implementation codebase as one of multiple third-party entities performing R&D work for the protocol.\n\nThe NEAR Foundation, a non-profit foundation headquartered in Switzerland, is responsible for contracting protocol maintainers, funding ecosystem development, and shepherding core governance of the protocol.\n Verified Sources: \n1. [https://github.com/near/docs/tree/master/docs/1.concepts/basics/protocol.md](https://github.com/near/docs/tree/master/docs/1.concepts/basics/protocol.md)\n2. [https://github.com/near/wiki/tree/main/wiki/overview/faq.md](https://github.com/near/wiki/tree/main/wiki/overview/faq.md)\n3. [https://github.com/near/wiki/tree/main/wiki/support/learning/understanding-web3/02_landscape/2.3_NEAR-Protocol.md](https://github.com/near/wiki/tree/main/wiki/support/learning/understanding-web3/02_landscape/2.3_NEAR-Protocol.md)\n4. [https://github.com/near/wiki/tree/main/wiki/overview/getting-started.mdx](https://github.com/near/wiki/tree/main/wiki/overview/getting-started.mdx)\n",
      role: "assistant",
    },
    {
      content: "give me a link to NEAR",
      role: "user",
      id: "0.676967950776947",
    },
    {
      id: "0452Ij9",
      createdAt: "2023-11-03T21:27:04.316Z",
      content:
        "Sure, here are some important links related to NEAR:\n\n- NEAR Protocol's official Twitter account: [@NEARprotocol](https://twitter.com/NEARprotocol)\n- NEAR Blockchain's Twitter account: [@NEAR\\_blockchain](https://twitter.com/NEAR\\_blockchain)\n- NEAR Developers' Twitter account: [@NEARdevs](https://twitter.com/NEARdevs)\n- NEAR Community Blog: [https://medium.com/nearprotocol](https://medium.com/nearprotocol)\n- NEAR Documentation: [https://docs.near.org](https://docs.near.org)\n- NEAR Discord: [https://near.chat](https://near.chat)\n- NEAR Telegram: [https://t.me/cryptonear](https://t.me/cryptonear)\n- NEAR Governance Forum: [https://gov.near.org](https://gov.near.org)\n- NEAR Ecosystem Map: [https://github.com/near/ecosystem](https://github.com/near/ecosystem)\n- NEAR Communities: [https://nearguilds.com/guilds](https://nearguilds.com/guilds)\n- NEAR News: [https://nearweek.com](https://nearweek.com)\n- NEAR Projects: [https://awesomenear.com](https://awesomenear.com)\n- NEAR DAOs: [https://sputnik.fund](https://sputnik.fund) and [https://astrodao.com](https://astrodao.com)\n- NEAR Education: [https://www.near.university](https://www.near.university) and [https://learnnear.club](https://learnnear.club)\n Verified Sources: \n1. [https://github.com/near/wiki/tree/main/Archive/overview.md](https://github.com/near/wiki/tree/main/Archive/overview.md)\n2. [https://github.com/near/wiki/tree/main/Archive/technology/use-cases.md](https://github.com/near/wiki/tree/main/Archive/technology/use-cases.md)\n3. [https://github.com/near/wiki/tree/main/Archive/technology/docs/README.md](https://github.com/near/wiki/tree/main/Archive/technology/docs/README.md)\n4. [https://github.com/near/wiki/tree/main/wiki/overview/tokenomics/neardrop.md](https://github.com/near/wiki/tree/main/wiki/overview/tokenomics/neardrop.md)\n",
      role: "assistant",
    },
  ];
  return (
    <div className="w-full h-screen min-h-screen items-center justify-center">
      {/* {messages.map((message, i) => {
        return <ReactMarkdown key={i} children={message.content} />;
      })} */}
      <Chat />
    </div>
  );
}
