class: center, middle

# Building Full Stack Decentralised Applications

???

Welcome to my guest lecture on Building Full Stack Decentralised Applications. I understand so far in this course you have been focusing mostly on the development side of building smart contracts. Well this lecture will aim to give you some context on the rest of the development stack for building out front ends and supporting tools and frameworks to create a full product based around your smart contracts. Basically I'm here to preach the good word of TypeScript, and why it can be just as cool as Solidity.

---

## About me

- Name: Chase Manning
- From: New Zealand
- Job: Software Engineer
- Area: Full Stack/Product

???

- Moved to london just over 3 years ago
- Worked building DApps for 4+ years

---

## What is a Decentralised Application?

- Also known as a `DApp`
- A DApp is an application that manages it's state primarily on a blockchain

???

Give a simple example, such as a TODO app

---

class: center, middle

# Example DApps

---

<image width="100%"  src="https://i.imgur.com/gfrIU81.png" />

???

Uniswap

---

<image width="100%"  src="https://i.imgur.com/jOgYLqq.png" />

???

Aave

---

<image width="100%"  src="https://i.imgur.com/iM5XFSt.png" />

???

Polymarket

---

## Differences Building DApps vs Apps

- DApps have no ongoing technical maintenance costs
- DApp back end code is immutable
- DApps are composable
- DApps are open source by default
- DApps have limited storage and throughput
- DApps are slow

???

Blockchain hosting is indefinite and paid upfront. Meaning there are no technical costs in maintaining the back end after deployment. There's many cases where a person has deployed a DApp once, and it's existed and had ongoing use for years without any additional costs or maintenance from the developer.

By default, smart contracts are immutable and can't be changed after deployment. One benefit of this for users is that there is less trust required for them when using your product. There is no fear that the developer could change things unexpectedly. The downside to this is that it makes it harder to fix bugs and introduce features.

DApps are natively composable. If you wanted to build some product on top of Facebook that integrated with their product directly. You would need to reach out to them, create some sort of aggreement, gain permissioned access to the API etc. However with Uniswap for example, you can grab their Router contract address, and integrate a new front end or wrapper contract any time without them even knowing. Some products lean into this composability such as Liquity L-I-Q-U-I-T-Y, who created a lending protocol that doesn't have an official front end. Instead they encourage their community to build their own front ends and share them so that the front end of their application is decentralised. Similarly Synthetix S-Y-N-T-H-E-T-I-X is a perpetual futures product, that also doesn't have any official front end, but instead pitches itself as a liquidity layer that other products can build on top of. They make profit from the fees charged to users who integrate.

By default, when you deploy a smart contract to the blockchain, the bytecode for this is open source. Usually developers will verify the smart contract also, which makes the Solidity (or Vyper) source code open source. This can lead to a faster paced development environment, as projects and reference and build on top of the work of other projects, instead of starting from 0. One downside of this is that it makes it easier for people to steal your project code and 'fork' your project. For this reason, community is considered quite important for DApps.

There are hard limitations on the amount of data you can store per transaction on blockchains, and the number of transactions that can be processed per second. By modern standards these are quite low. Meaning there are large categories of Applications that would not be suitable to be build as a DApp. Anything that requires very fast transaction times and large amounts of data would be better suited as a traditional application.

In traditional app development, you can often expect actions to take a fraction of a second. However with most blockchains, transactions can take a few seconds to go through. There are some new blockchains being developed that have faster transaction speeds. But there sometimes come at a cost of being more centralised.

---

class: center, middle

# How to integrate a Front End with Smart Contracts

???

Next we're going to talk about how you integrate a Front End, so usually a website, with a Smart Contract. Which will be the main content of this lecture.

---

## RPCs

- RPC (Remote Procedure Call)
- RPCs allow a Front End to connect to blockchain data
- Possible to use only an RPC to connect a Front End to a Smart Contract

???

I understand you've learned about RPCs already, but just a quick refresher as we'll be building on top of this knowledge next.

RPCs are the primary way that front ends will interract with blockchains. They work by making REST requests to query data from nodes.

It is possible to build a complete full stack DApp using only RPC requests. However, it would be quite a verbose way to make these requests, and would quickly get messy for larger applications.

---

## RPC Request Example

```javascript
const RPC = "https://my-cool-rpc.com/";
const USER = "0x15463f7566d797a4b36517eb3a1cafab58f1a381";

const response = await fetch(RPC, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 0,
    method: "eth_getBalance",
    params: [USER],
  }),
});
const data = await response.json();

console.log(data); // Logs: { jsonrpc: '2.0', id: 0, result: '0xdc83a6f1f92553' }
```

???

Here is an example request/response. Using the `eth_getBalance` method this is requesting what the ETH balance is for the given address. The resopnse is returning this value in hexidecimal. So on your front end, you would need to handle converting this hexidecimal to something that can be presented more easily to the user. The id here is arbitrary, it's just to identify which response matches which request for when you are batching requests.

---

## Ethers library

- Ethers is a simple library for interracting with blockchains
- It is written in TypeScript
- It wraps the RPC calls to create a easier to use API for these calls

???

Ethers is a simple library for interracing with blockchains. It's written in Typescript, which is also the language that is most commonly used for building front ends for DApps. We will be focusing on TypeScript for the majority of this lecture. Ethers abstracts away the RPC calls directly, replacing them with more convenient functions. It is possible to build a front end integration using only ethers, and it is fairly common to do so.

---

## Example

```javascript
import ethers from "ethers";

const RPC = "https://my-cool-rpc.com/";
const USER = "0x15463f7566d797a4b36517eb3a1cafab58f1a381";

const provider = new ethers.JsonRpcProvider(RPC);

const ethBalance = await provider.getBalance(USER);

console.log(ethBalance); // Logs: 62069247923791187n

console.log(ethers.formatEther(ethBalance)); // Logs: 0.062069247923791187
```

???

In this example we are importing the ethers package at the top here. We have the same constants as before. And then we are creating a provider. A provider is an abstraction of a connection to the Ethereum network providing a concise, consistent interface to standard Ethereum node functionality. One of the functions the provider object provides is a getbalance function, which returns the ETH balance for the given address. Here we are using this to get the eth balance. You'll notice immmediately that this is much less code than the direct RPC requests. And also is more intuitive to read and write. We're logging the response here, and you'll notice the first log is a very large number followed by a small `n`. This is the version of the balance that is scaled to 18 decimals, and that small `n` represents that it is a bigint type, which can support no decimals, but very large numbers. Ethers has a utilitiy function `formatEther` which scales this down to a number that is a bit more legible and can be displayed on the UI.

---

## Ethers Contract Object

```javascript
import ethers from "ethers";
import erc20Abi from "./erc20-abi.json";

const RPC = "https://my-cool-rpc.com/";
const USER = "0x15463F7566d797a4b36517eB3A1cAFaB58f1A381";
const CHASE = "0x3A61da6D37493E2f248A6832F49b52Af0a6f4Fbb";
const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const PRIVATE_KEY = "[[users private key]]";

const provider = new ethers.JsonRpcProvider(RPC);
const signer = new ethers.Wallet(pk, PROVIDER);

const uniContract = new ethers.Contract(UNI_ADDRESS, erc20Abi, signer);

const uniBalance = await uniContract.balanceOf(USER);

const tx = await uniContract.transfer(CHASE, uniBalance);

console.log(tx.hash); // Logs: 0xbed1ab34efcea49dd55c51134916a6ea8b28967fe32509573039e565102f2a75

const receipt = await tx.wait();

console.log(receipt); // Logs: (an object with transaction data)
```

???

We'll now introduce another feature of Ethers which is commonly used which is the Contract object. This allows you to create a TypeScript object that represents your smart contract on chain. Which you can then use to conveniently query views from your contract. Or call functions to create transactions.

We have a new import at the start here, it is importing the ABI for an ERC20 contract. As a reminder, an API is a JSON object the lists all of the functions, views and events that a smart contract has. We have a couple of new constants here, one is a dummy address for myself, one is the Uniswap Token UNI and one is the users private key. Which we would never store in plain text like this, but this is just for an example. Just further down we have the creation of the Contract object for the UNI Token. We pass as an input here the address of the token, the ABI, and the signer. A signer is similar to a provider, other than it also allows for posting transactions for the user. We could also create this contract passing through the provider here instead, and the contract object would still work, but would only allow for reading views.

From there it's just one line to query a view, so here we're getting the users balance of the UNI token. And it's also just one line to call a function and raise a transaction, here we're doing that to call the transfer function to send the users UNI balance to myself. Optionally, calling a function returns a transaction object, which we can then wait to load until the transaction has been executed on chain.

So you can see with this code, it you could now use this to link up to a front end to display some data abou the users state on the blockchain. And with the press of a button you could transfer tokens to another address.

---

## wagmi

- wagmi is yet another abstraction layer for blockchain integration
- It focuses mostly on integrating with React front ends
- It doesn't use `ethers` under the hood, but rather `viem` (a similar library)
- It helps with things such as connecting wallets, live polling data and managing state

???

wagmi is yet antoher abstraction layer for blockchain intergration. It's going to help out mostly for React or maybe Vue front end integrations. Exposing a lot of react hooks that are useful in building out DApp front ends. wagmi consideres itself too cool to use ethers, the team created their own variant called viem. But for the purpose of general wagmi usage, we don't need to understand the nuances in the tech they are using under the hood.

wagmi got it's name from a popular crypto meme "We're All Going to Make It" which is associated with community celebrating the success of their product or token.

---

## Reading View Example

```javascript
import { useReadContract } from "wagmi";
import erc20Abi from "./erc20-abi.json";

const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const USER = "0x15463F7566d797a4b36517eB3A1cAFaB58f1A381";

function App() {
  const result = useReadContract({
    abi: erc20Abi,
    address: UNI_ADDRESS,
    functionName: "balanceOf",
    args: [USER],
  });

  if (result.isPending) return <div>Loading...</div>;

  if (result.isError) return <div>{result.error}</div>;

  return <div>{`User's Balance: ${result.data}`}</div>;
}
```

???

Here is some example code for reading a view using wagmi. Things look a little different now as we're inside a React component. For those who aren't farmiliar with a React component, it's just a lightweight way to break you front end code up into smaller sections. Just like functions, but they will return some HTML.

You'll notice there's a few things we're missing here, such as the RPC, and the provider. That is because those are created globally as part of setting up wagmi and connecting the users wallet. So they are nicely abstracted away.

For reading the contract we're using a react hook from wagmi called useReadContract. Similar to the Ethers contract object, this takes the address of the contract and the abi. We also specify here the view we want to call, and the input parameters for this function.

The result object it retuns has lots of useful data on it, including if the result is still pending, if it has an error, the data from the call and much more.

Here we're doing some conditional rendering, showing a loading state while the view call is pending. An error state if there is an error. And then returning the users balance once we have it.

One nice feature about wagmi compared to using Ethers directly, is this view is going to automatically update whenever the state changes on chain. With Ethers, the call we made was only accurate at that block, and if the data changed later on it would be outdated. Using `useReadContract` however will automatically update as the users balance changes.

While this code looks a bit harder to read at first, it has many more features built in that make our lives easeir when integrating.

---

## Sending Transaction Example

```javascript
import { useWriteContract } from "wagmi";
import erc20Abi from "./erc20-abi.json";

const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const CHASE = "0x3A61da6D37493E2f248A6832F49b52Af0a6f4Fbb";

function App() {
  const { writeContract } = useWriteContract();

  return (
    <button
      onClick={() =>
        await writeContract({
          abi: erc20Abi,
          address: UNI_ADDRESS,
          functionName: "transfer",
          args: [CHASE, 100],
        })
      }
    >
      Send UNI to Chase
    </button>
  );
}
```

???

And here we have another example, this time of sending a transaction. Similar to the example before with Ethers, this is transferring some UNI tokens to another user. The hook we are using for this is `userWriteContract` which we call by passing through the details of the contract we're calling, the function, and the args. Note that for creating this transaction, we don't need the private key of the user. That's because wagmi will handle that for us in the background, it will prompt the user to sign the transaction in their connected wallet when we call the `writeContract` function. So this implementation is much more suitable for a customer facing DApp.

---

## Multicall

- For some DApps you may need to query significant amounts of data on chain
- With what we learned so far, this would require one RPC call per query
- This can be slow, and also transaction heavy
- Many RPCs have rate limits and will error for lots of concurrent requests
- Multicall allows for batching these into a single call
- This saves requests, reduces errors, and speeds up load time

???

For some dapps you may need to query a significant amount of data on chain. With what we learned so far, this would require one RPC call per query. This can be slow and also transaction heavy. Lots of RPCs that people use have rate limits built in. So if you build your site like this, they can encounter errros from many concurrent requests that can cause your site not to load. Multicall allows for you to make several requests in the same transaction. Which should reduce errors and speed up load time.

---

## Multicall Contract

```solidity
struct Call3 {
    // Target contract to call.
    address target;
    // If false, the entire call will revert if the call fails.
    bool allowFailure;
    // Data to call on the target contract.
    bytes callData;
}

struct Result {
    // True if the call succeeded, false otherwise.
    bool success;
    // Return data if the call succeeded, or revert data if the call reverted.
    bytes returnData;
}

/// @notice Aggregate calls, ensuring each returns success if required
/// @param calls An array of Call3 structs
/// @return returnData An array of Result structs
function aggregate3(Call3[] calldata calls) public payable returns (Result[] memory returnData);
```

???

Multicall is based on a contract that is deployed on lots of EVM blockchains. It has an aggregate3 view which takes a list of calls, and returns a list of results. It's a simple contract which just loops through all of the calls. But it has the benefit of making it just one RPC call.

---

## Ethers Example

```javascript

```
