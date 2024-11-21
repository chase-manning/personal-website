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
import ethers from "ethers";
import erc20Abi from "./erc20-abi.json";
import multAbi from "./multicall-abi.json";

const RPC = "https://my-cool-rpc.com/";
const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const MULTI_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";

const provider = new ethers.JsonRpcProvider(RPC);

const multicall = new ethers.Contract(MULTI_ADDRESS, multiAbi, provider);
const uniContract = new ethers.Contract(UNI_ADDRESS, erc20Abi, provider);

const result = await multicall.aggregate3.staticCall([
  {
    target: UNI_ADDRESS,
    allowFailure: false,
    callData: uniContract.interface.encodeFunctionData("symbol()"),
  },
  {
    target: UNI_ADDRESS,
    allowFailure: false,
    callData: uniContract.interface.encodeFunctionData("decimals()"),
  },
]);

console.log(result[0]); // Logs: UNI

console.log(result[1]); // Logs: 18
```

So here we have an exmpla of using multicall with Ethers. You can see at the top we're importing the multicall abi. We're also setting the address here, and creating the contract. Now the multicall contract works just like any other contract, so to use multicall, we're going to call the aggregate3 function. This function takes a list as an input, where each item in the list is a view that we want to query. The struct for this requires the target address of the contract we want to read, in this case, the UNI token contract again. Allow failure is pretty much just if this call should be wrapped in a try/catch or not. And the calldata is the hexidecimal data for the view you would like to query and the parameters. Here we are querying two views, symbol and decimals. Thankfully Ethers has a nice helper function for us that allows us to encode the function data so we can just enter the name of the view we want. We can see what is returned from here is a list of the results.

So this is just one contract call, so you can see how this would reduce RPC calls and speed up queries.

You may notice that instead of calling the function directly here, we are using statiCall here. We'll come back to this in a bit to explain what that means and why we are doing it here.

---

## Wagmi Example

```javascript
import { useReadContracts } from "wagmi";
import erc20Abi from "./erc20-abi.json";

const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const USER = "0x15463F7566d797a4b36517eB3A1cAFaB58f1A381";

function App() {
  const result = useReadContracts({
    contracts: [
      {
        abi: erc20Abi,
        address: UNI_ADDRESS,
        functionName: "symbol",
      },
      {
        abi: erc20Abi,
        address: UNI_ADDRESS,
        functionName: "decimals",
      },
    ],
  });

  return <div>{`Symbol: ${result.data[0]}, Decimals: ${result.data[1]}`}</div>;
}
```

??

And here's the same thing implemented in wagmi. It's quite similar to what we did before for reading views, although we're now using the useReadContracts hook. A nice thing about wagmi, is that it automatically uses multicall when we're querying multiple contract views for this. So there's no need to think about it and you can be confident it's taking care of that under the hood.

---

## Simulating Transactions

- There is often the need to know the outcome of a transaction before executing it
- For example, showing the user how many tokens they will receive from a Unsiwap swap
- Some contracts have dedicated views for this, that simulate the execution logic
- However, this is sometimes not practical and they don't exist
- One way to simulate transactions is with staticCall if the function returns the data you want
- And another way is to run on a forked environment

???

There is often the need when integrating with blockchains that you will want to know the outcome of a transaction before you execute it. For example, if you're integrating with Uniswap, you want to know how much of the token you will receive after you swap, and what the price impact is of that swaps. Some contracts have dedicated views for this, so if there was a `swap` function on a contract, they would also have a view `getSwapResult` that returns what the result of the swap would be. It's good to keep in mind when developing Solidity that you always want to be adding these type of views in where you can.

However, sometimes it is not practical to add a view like this. Maybe because the business logic requires modifying state which means you can't make it a view. In this case there's a couple of ways we can simulate the transaction.

If the function we're calling returns the output. For example say your `swap` function returns the amount of tokens you get back at the end, then we can use Ethers `staticCall` for this. `staticCall` is an Ethers feature that pretends to call a function, and returns the result as if it was called. You may recall we did this a few slides ago with the aggregate3 call. The reason we needed it here, is that aggregate3 isn't actually a view, but is a function. They do this so that you can also use this function for executing multiple transactions within one transaction.

---

## staticCall Example Code

```javascript
import ethers from "ethers";
import dexAbi from "./dex-abi.json";

const RPC = "https://my-cool-rpc.com/";
const DEX_ADDRESS = "0x3A61da6D37493E2f248A6832F49b52Af0a6f4Fbb";
const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

const provider = new ethers.JsonRpcProvider(RPC);

const dexContract = new ethers.Contract(DEX_ADDRESS, dexAbi, provider);

// function swap(address assetIn, address assetOut,
//      uint256 amountIn) external returns (uint256 amountOut);
const amountOut = await dexContract.swap.callStatic(
  UNI_ADDRESS,
  USDC_ADDRESS,
  ethers.parseEther("100")
);

console.log(amountOut); // Logs: 20000000000
```

???

So in this example we have an imaginary dex, and this dex just has one function, swap. It takes the input token, and the output token, and the input amount. And then it sends you the output amount and returns the output amount. Because this function returns the amount the user received, we're able to use callStatic here to get this before executing the transaction.

But what if the solidity developer wasn't as helpful, and didn't include a return here? How could we simulate this?

---

## Fork Simulating Transacions

- Another way to simulate a transation is to first fork the chain
- From there you can run transactions against this fork state
- Then query the chain afterwards to see the change in state
- One prduct that provides this as a service is Tenderly (tenderly.co)
- They have APIs that expose this functionality

???

So if there is not a return on the function, then the only way to simulate this is to run this against a forked environment. So, forking the chain, running those transactions in this forked environment, then querying the chain afterwards to see the change in state. Tenderly is a product that provides this as a service. So you don't need to worry about setting up this infrustructure yourself. They have convenient APIs that handle the forking and simulating for you.

---

## Tenderly Example

```javascript
const TENDERLY = "https://optimism.gateway.tenderly.co/my_api_key";

const response = await fetch(TENDERLY, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 0,
    jsonrpc: "2.0",
    method: "tenderly_simulateBundle",
    params: [
      [
        {
          from: USER,
          to: DEX_ADDRESS,
          data: dexContract.interface.encodeFunctionData("swap", [
            UNI_ADDRESS,
            USDC_ADDRESS,
            ethers.parseEther("100"),
          ]),
        },
      ],
      "latest",
    ],
  }),
});

const data = await response.json();

console.log(data); // Logs: Lots of data about the transaction
```

???

So here is some example code that is running a simulation in tenderly of this swap. You can see this is a rest request to the tenderly API, similar to what we did earlier in this lecture with direct RPC calls. The method we're using here is `tenderly_simulateBundle`, which allows us to simulate multiple transactions at once, for example you could use this to simulate approving a token, and then swapping it, all at once. In this example though we are just simulating one function call though, which is our swap from earlier. We're entering the user that is calling this function, the address, and the function data which in this case is our swap data. What is returned from this is an object that contains a significant amount of data from the transaction. Including all the events that were triggered, the balance changes of all addresses, the USD value of the changes, the gas used, and much more. Generally this type of simulation should be able to cover all of your needs in terms of getting output data to display on the UI.

But you can tell even just at first glance that this is a lot slower, and more complex than simply calling a contract view. So something to always remember when developing solidity, is to add views for anything the front end might want to query or simulate. And where you can't add a view, add a return statement so you can use staticCall to simulate it. Tenderly is slow and expensive, you don't want this to be your primary way of integrating with your contracts.

---

## Pop Quiz! What could be wrong with this code?

```javascript
import ethers from "ethers";
import dexAbi from "./dex-abi.json";

const RPC = "https://my-cool-rpc.com/";
const DEX_ADDRESS = "0x3A61da6D37493E2f248A6832F49b52Af0a6f4Fbb";
const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new ethers.JsonRpcProvider(RPC);
const signer = new ethers.Wallet(pk, PROVIDER);

const dexContract = new ethers.Contract(DEX_ADDRESS, dexAbi, signer);

await dexContract.swap(UNI_ADDRESS, USDC_ADDRESS, ethers.parseEther("100"));
```

A quick pop quiz, what could be wrong with this code?
....
I'm after specfically something that could be wrong with the last line of the code where we do the swap.
...
Okay the answer I'm looking for is that this transaction could potentially be sandwhich attacked. An attacker could frontrunning this transaction by manipulating the state of the dex so that we get barely any USDC. Commonly this type of attack is mitigated by passing through some minAmountOut as an input to the swap, so that if the state is manipualted the transaction will revert. But we can see here that this is not an option with this function. So, depending on how the logic works inside this swap function, they may have some other protective systems in place here, but there is a risk that we could get sandwich attacked.

So, from a front end integration perspective, how can we mitigate risk here for the user?

---

## Private RPCs

- Private RPCs function similarly to public RPCs with some notable differences
- Private RPCs often don't allow for reading views, only submitting transactions
- Private RPCs do not submit transactions to the public Mempool
- Private PRCs only share transactions with a subset of builders
- Those builders pinky promise not to frontrun your transaction maliciously
- Often the transaction will be frontrun, but they will give you around 90% of the profits

??

Private RPCs are an alternative to traditional RPCs for submitting transations. They function similarly to a normal RPC with some notable differences. One is that most private RPCs don't allow you to read views from them. They are not there to help you read data off chain. They only allow you to submit transactions. Unlike most RPCs that broadcast your transaction to the public mempool, private RPCs will keep your transaction locally, and only use the transaction when they are building a block. The transaction will be shared only with a subset of builders. Some private RPCs belong to the builders themselves, others are aggregators that share it with multiple builders. You need to be careful which builders you share your transactions with, as you are trusting them that they won't frontrun your transaction maliciously. Generally they won't, as it would harm their reputation as a builder, and users would stop sending private transactions to them. But this appraoch does carry risk.

One approach you will often see with private RPCs, particularly Flashbots. Is that they builder will actually frontrun your transaction, and try extract as much MEV as they can from it. However, they will return the magority of this MEV to you (around 90%), and give the other 10% to the validator. While it would be better for the user to have no MEV, if there is no practical way to avoid this frontrunning through the contract, thsi can be a nice alternative. And acts as somewhat of a safety net against these types of attacks.

---

## Flashbots Example

```javascript
import ethers from "ethers";
import dexAbi from "./dex-abi.json";

const RPC = "https://my-cool-rpc.com/";
const PRIVATE_RPC = "https://rpc.flashbots.net/fast";
const DEX_ADDRESS = "0x3A61da6D37493E2f248A6832F49b52Af0a6f4Fbb";
const UNI_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new ethers.JsonRpcProvider(RPC);
const privateProvider = new ethers.JsonRpcProvider(PRIVATE_RPC);
const signer = new ethers.Wallet(pk, privateProvider);

const dexContract = new ethers.Contract(DEX_ADDRESS, dexAbi, provider);
```

???

Here is a code example for sending a transaction using a private RPC. In this case Flashbots which is one of the popular ones. It is an aggregator over many builders with lots of customisation options. You'll see the endpoint is set at the top here. You'll also notice there are two providers set, one as we had before which we will use for reading views. And one below which we will use for the private transaction call.

---

## Flashbots Example

```javascript
const estimatedGas = dexContract.estimateGas.swap(
  UNI_ADDRESS,
  USDC_ADDRESS,
  ethers.parseEther("100")
);
const txData = dexContract.interface.encodeFunctionData("swap", [
  UNI_ADDRESS,
  USDC_ADDRESS,
  ethers.parseEther("100"),
]);
const currentGasPrice = await provider.getGasPrice();
const tx = {
  to: DEX_ADDRESS,
  gasPrice: currentGasPrice,
  gasLimit: estimatedGas * BigInt(2),
  data: txData,
};
await signer.sendTransaction(tx);
```

???

Sending a transaction through a private RPC is a bit different. We need to construc the transaction data ourselves and user the signer.sendTransaction function at the bottom here. Which means we need a few additional details. One is that we need to find out how much gas the transaction will consume. We do this with the estimateGas function at the top here. And then later on, we multiply that by 2 to introduce lots of buffer. In production you would probably add a tighter margin here of maybe 20%. We also need to pass through the transaction data, so we'll use encodeFunctionData again which we've done a couple of times now. And finally, we need to pass through the gas price that we want to submit the trasaction for, here we're just setting it to the current gas price which we can get with provider.getGasPrice.

So this transaction will be submitted as before, but this time through a private RPC adding some additional protection.

---

## ENS

- ENS is a service that gives your wallet address an easier to read username
- They are usually in the format `vitalik.eth`, similar to a domain name
- When registering an ENS domain, you can set up a bidirectional mapping between your wallet address and ENS
- Allowing users to send tokens to vitalik.eth instead of your wallet address
- This makes it more user friendly to share your address with others
- This is not supported natively by the EVM, and requires integrators to support this

???

ENS is a service that gives your wallet address an easier to read username. They are usually in the format `vitalik.eth`, similar to a domain name. When registering an ENS domain, you can set up a bidirectional mapping between your wallet address and ENS. Allowing users to send tokens to vitalik.eth instead of your wallet address. This makes it more user friendly to share your address with others, as you can just share chase.eth instead of some long string of characters that they would need to copy paste. However, this isn't supported naively by the EVM, and it requires integrators such as us to support this.

---

## Get Address From ENS

```javascript
import { getEnsAddress } from "@wagmi/core";

const usersAddress = getEnsAddress({
  name: "vitalik.eth",
});
```

???

Here is a code sample for getting the users address from an ENS name using wagmi. In practice you would use something like this from an address input field. Conditionally checking if what they entered was an ENS, and if it is, getting the address to use for the transaction. Ideally all address input fields should seamlessly support ENS or address inputs.

---

## NFTs (ERC-721)

- NFTs are becoming a common part of products across the space
- Uniswap uses NFTs to represent positions on chain
- There is sometimes a need to display NFT metadata in a UI
- NFT data is often stored partially on chain, and partially off chain
- This is because of size restrictions on chain
- There are ways to store NFT data on chain using SVGs

???

NFTs are seeing more and more use in products across the space. They are a useful standard and can see uses outside of monkey pictures. We're even seeing them used in DeFi with Uniswap V3 using them to represent financial positions. When working with NFTs you will often want to display the NFT metadata on the UI for the user to see. We touched before on the size limitations with storing data on chain. This is particularly an issue with NFTs, where the data that needs to be stored is sometimes large PNGs that would be impossible or too expensive to store on chain. Because of this, many developers choose to store the images off chain, in a centralsied database exposed via a public link. The url to the images is then stored on chain in the NFT metadata.

It is possible to store NFT images entirely on-chain. There are several NFT projects that have done this. Including Uniswap who stores their data on chain. This works by building the image with purely SVGs, and customising them using string concatination and some other on chain data.

---

## Displaying NFTs

```javascript
import ethers from "ethers";
import nftAbi from "./nft-abi.json";

const RPC = "https://my-cool-rpc.com/";
const CAT_NFT_ADDRESS = "0x15463f7566d797a4b36517eb3a1cafab58f1a381";

const provider = new ethers.JsonRpcProvider(RPC);

const catNftContract = new Contract(CAT_NFT_ADDRESS, nftAbi, provider);

const tokenUri = await catNftContract.tokenURI(123);

console.log(tokenUri); // Logs: ERC721 Metadata JSON Schema
```

???

Here is an exaple of querying the metadata for an NFT. In this example it is a cat NFT collection. The core function that you call to get this data is the tokenURI function. Notice this takes an input, this is the ID of the NFT. An NFT contract could have any amount of NFTs linked to it, and they are indexed by their ID. This retuns the token URI data, which is a JSON file with data about the NFT.

---

## Displaying NFTs

```json
{
  "title": "Cat NFT Metadata",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Cute cat #123"
    },
    "description": {
      "type": "string",
      "description": "This cat is very cute"
    },
    "image": {
      "type": "string",
      "description": "https://miro.medium.com/v2/resize:fit:1080/0*A7MUqyCLvZDcHkfM.jpg"
    }
  }
}
```

???

Here is an example one, you can see the title of this JSON at the top. The name of the NFT. The description. And at the end there the image, which is a link to an image that you can render on your UI. Unfortunately, because the NFT space developed so fast and rather chaotically. There are many NFTs that use slightly different standards for this response data. And it sometimes needs to be looked at on a case by case basis. But this is a common response you would expect to see from a modern NFT collection.
