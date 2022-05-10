import { ethers, providers } from "ethers";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import store from "./reduxStore";
import { nftABI, tokenABI } from "../abis/abis";
import { useSelector } from "react-redux";

const updateUser = (payload) => {
  return {
    type: "UPDATE_USER",
    payload: payload,
  };
};

const updateChain = (payload) => {
  return {
    type: "UPDATE_CHAIN",
    payload: payload,
  };
};

const updateSigner = (payload) => {
  return {
    type: "UPDATE_SIGNER",
    payload: payload,
  };
};

const updateUserBalances = (payload) => {
  return {
    type: "UPDATE_USER_BALANCE",
    payload: payload,
  };
};

const updateContractInfo = (payload) => {
  return {
    type: "UPDATE_CONTRACT_INFO",
    payload: payload,
  };
};

let provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-2-s2.binance.org:8545/"
);

let nftAddress = "0x048F816CD9372F5c9AC114274ceF1385437E754F"; // NFT
let tokenAddress = "0xCa4063060c0b57d586a5140C237285d6625e7bd3"; //BUSD

let nftInstance = new ethers.Contract(nftAddress, nftABI, provider);
let tokenInstance = new ethers.Contract(tokenAddress, tokenABI, provider);

// BALANCES

export const getUserBalances = (userAddress) => {
  return async (dispatch) => {
    try {
      if (!userAddress) {
        let reduxStore = store.getState().common;
        userAddress = reduxStore.userAddress;
      }

      let balance = await tokenInstance.balanceOf(userAddress);
      let allowance = await tokenInstance.allowance(userAddress, nftAddress);
      let pending = await nftInstance.userEarnings(userAddress);
      let tickets = await nftInstance.walletOfOwner(userAddress);
      let lastEntry = await nftInstance.lastEntry();

      let validTickets = tickets.filter((e) => Number(e) >= Number(lastEntry));

      console.log("user data", {
        busdBalance: ethers.utils.formatUnits(balance, 18),
        validTickets,
        pendingRewards: ethers.utils.formatUnits(pending, 18),
        busdApproved: allowance > 0,
      });

      dispatch(
        updateUserBalances({
          busdBalance: ethers.utils.formatUnits(balance, 18),
          validTickets,
          pendingRewards: ethers.utils.formatUnits(pending, 18),
          busdApproved: allowance > 0,
        })
      );
    } catch (error) {
      console.log(error, "getUserBalances");
    }
  };
};

export const getContractInfo = () => {
  return async (dispatch) => {
    try {
      let entries = await nftInstance.roundEntries();
      let jackpot = await nftInstance.jackpot();
      let smallJackpot = await nftInstance.smallPrizePot();
      let totalPayout = await nftInstance.totalPayout();

      console.log("contract data", {
        entries: Number(entries),
        jackpot: ethers.utils.formatUnits(jackpot, 18),
        smallJackpot: ethers.utils.formatUnits(smallJackpot, 18),
        totalPayout: ethers.utils.formatUnits(totalPayout, 18),
      });

      dispatch(
        updateContractInfo({
          entries: Number(entries),
          jackpot: ethers.utils.formatUnits(jackpot, 18),
          smallJackpot: ethers.utils.formatUnits(smallJackpot, 18),
          totalPayout: ethers.utils.formatUnits(totalPayout, 18),
        })
      );
    } catch (error) {
      console.log(error, "getContractInfo");
    }
  };
};

// STAKING FUNCTIONS

export const initAction = (type, _amount) => {
  return async (dispatch) => {
    try {
      let signer = store.getState().signer;
      let newNftInstance = new ethers.Contract(
        nftAddress,
        nftABI,
        signer.signer
      );

      let tx;

      switch (type) {
        case "BUY":
          let amount = Number(_amount).toString();
          tx = await newNftInstance.butTickets(amount);
          break;
        case "CLAIM":
          tx = await newNftInstance.claimEarnings();
          break;
        case "APPROVE":
          let newTokenInstance = new ethers.Contract(
            tokenAddress,
            tokenABI,
            signer.signer
          );
          tx = await newTokenInstance.approve(
            nftAddress,
            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
          );
          break;
        default:
          break;
      }

      let receipt = await tx.wait();

      dispatch(getUserBalances());
      dispatch(getContractInfo());

      return receipt;
    } catch (error) {
      console.log(error, "initAction");
      if (error.data) {
        window.alert(error.data.message);
      }
    }
  };
};

// WALLET CONNECTION

export const connectMetamask = () => {
  return async (dispatch) => {
    try {
      console.log("hola");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      let userAddress = accounts[0];
      const id = await window.ethereum.request({
        method: "eth_chainId",
      });

      let chainId = parseInt(id, 16);
      console.log(chainId, "chainId");

      dispatch(
        updateChain({
          chainId,
        })
      );
      dispatch(getSigner());
      dispatch(getUserBalances(accounts[0]));

      window.ethereum.on("accountsChanged", function (accounts) {
        dispatch(
          updateUser({
            userAddress: accounts[0],
            connectionType: "metamask",
            provider: null,
          })
        );
        dispatch(getSigner());
        dispatch(getUserBalances(accounts[0]));
      });

      window.ethereum.on("chainChanged", (_chainId) => {
        window.location.reload();
      });

      if (userAddress) {
        dispatch(
          updateUser({
            userAddress,
            connectionType: "metamask",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const connectWalletConnect = () => {
  return async (dispatch) => {
    try {
      console.log("hola");
      const provider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed1.ninicoin.io/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        // network: "binance",
        chainId: 56,
        infuraId: null,
      });

      await provider.enable();

      dispatch(getSigner("WALLET_CONNECT", provider));

      const web3 = new Web3(provider);

      const accounts = await web3.eth.getAccounts();
      let chainId = await web3.eth.getChainId();

      dispatch(
        updateChain({
          chainId,
        })
      );

      dispatch(getUserBalances(accounts[0]));

      provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
        dispatch(
          updateUser({
            userAddress: accounts[0],
            connectionType: "WALLET_CONNECT",
          })
        );
        dispatch(getUserBalances(accounts[0]));
        dispatch(getSigner("WALLET_CONNECT", provider));
      });

      // Subscribe to session disconnection
      provider.on("disconnect", (code, reason) => {
        dispatch(disconnectWallet());
      });

      provider.on("chainChanged", (chainId) => {
        dispatch(
          updateChain({
            chainId,
          })
        );
      });

      if (accounts) {
        dispatch(
          updateUser({
            userAddress: accounts[0],
            connectionType: "WALLET_CONNECT",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const disconnectWallet = () => {
  let reduxStore = store.getState().common;
  return async (dispatch) => {
    try {
      let { connectionType } = reduxStore;
      if (connectionType === "WALLET_CONNECT") {
        const provider = new WalletConnectProvider({
          rpc: {
            56: "https://bsc-dataseed1.ninicoin.io/",
            97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
          },
          chainId: 4,
          infuraId: null,
        });
        await provider.disconnect();
      }

      dispatch(
        updateUser({
          userAddress: "",
          connectionType: "",
          provider: null,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// PROVIDER SIGNER

const getSigner = (walletType, provider) => {
  return async (dispatch) => {
    try {
      let signer;
      if (walletType === "WALLET_CONNECT") {
        const web3Provider = new providers.Web3Provider(provider);

        signer = await web3Provider.getSigner(0);
      } else {
        let newProvider = new ethers.providers.Web3Provider(window.ethereum);
        signer = await newProvider.getSigner(0);
      }

      dispatch(
        updateSigner({
          signer,
        })
      );
    } catch (error) {
      console.log(error, "signer");
    }
  };
};
