// import {USDT_ADDRESS, USDT_ABI } from '../contract/USDT';
// import {USDC_ADDRESS, USDC_ABI } from '../contract/USDC';
// import {ESCROW_ADDRESS, ESCROW_ABI } from '../contract/Escrow';
// import {VOTTING_ADDRESS, VOTTING_ABI } from '../contract/Voting';
import Web3 from 'web3';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
// import QRCodeModal from '@walletconnect/qrcode-modal/dist/umd/index.min.js';
// import axios from "axios";
// import { url, setHeaders } from "./api";
import  CONTRACT_ABI  from '../contract/SecondaryDAO.json';
import USDT_ABI from '../contract/USDT.json';
import USDC_ABI from '../contract/USDC.json';

const USDTADDRESS = "0x5417928Ef1Ab9e341E92872b3995ed03cb3f7e34";
const USDCADDRESS = "0x67B77178515655715C0fD328B057aD318B76B6Bb";
const CONTRACT_ADDRESS="0xD2D5b79f49C77319e71080dad82b0044BaF8AC07";
const WhiteList_ADDRESS="0x6f463fd67F7e6742bA8C636879De8001df52FA2b";

export const initialState = {
    status: null,
    web3: null,
    contract: null,
    // socketContract: null,
    accounts: [],
    web3loadingerror: null,
    propContracts:[],
    UsdtContract: null,
    UsdcContract: null,
    EscrowContract: null,
    VotingContract: null,
}

export const loadBlockchain = createAsyncThunk( "loadBlockchain", async (_, thunkAPI) => {
    try {
        // if(Web3.givenProvider && Web3.givenProvider.chainId ==="0x3"){
        if (Web3.givenProvider) {
            await Web3.givenProvider.enable();
            const web3 = new Web3(Web3.givenProvider);
            // console.log('web3', web3)
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            // console.log('contract', contract)
            const accounts = await web3.eth.getAccounts();
            //web3 Socket
            // const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
            //     `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
            // ))

            // const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            const UsdtContract = new web3.eth.Contract(USDT_ABI, USDTADDRESS);
            const UsdcContract = new web3.eth.Contract(USDC_ABI, USDCADDRESS);
            // const EscrowContract = new web3.eth.Contract(ESCROW_ABI, ESCROW_ADDRESS);
            // const VotingContract = new web3.eth.Contract(VOTTING_ABI, VOTTING_ADDRESS);
            return {
                web3,
                accounts,
                contract,
                // socketContract,
                UsdtContract,
                UsdcContract,
                // EscrowContract,
                // VotingContract,
            }
        }
        else {
            return {
                web3loadingerror: 'errorloading'

            }

        }

    } catch (error) {
        console.log('error', error)

    }
});




export const loadWalletConnect = createAsyncThunk( "loadWalletConnect", async (_, thunkAPI) => {
    try {
        const provider = new WalletConnectProvider({
            rpc: {
              5: "https://goerli.infura.io/v3/b0b0d100567e4e59bb2bab1a2c353381",
            },
            chainId: 5,
          });


        if (provider) {
            await provider.enable();
            const web3 = new Web3(provider);
            console.log('web3', web3)
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log('contract', contract)
            const accounts = await web3.eth.getAccounts();
            const UsdtContract = new web3.eth.Contract(USDT_ABI, USDTADDRESS);
            const UsdcContract = new web3.eth.Contract(USDC_ABI, USDCADDRESS);
            //web3 Socket
            // const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
            //     `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
            // ))

            // const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            // const EscrowContract = new web3.eth.Contract(ESCROW_ABI, ESCROW_ADDRESS);
            // const VotingContract = new web3.eth.Contract(VOTTING_ABI, VOTTING_ADDRESS);
            return {
                web3,
                accounts,
                contract,
                UsdtContract,
                UsdcContract,
                // EscrowContract,
                // VotingContract,
                // socketContract,
            }
        }
        else {
            return {
                web3loadingerror: 'errorloading'

            }

        }

    } catch (error) {
        console.log('error', error)

    }
});


// export const loadContracts = createAsyncThunk(
//     "loadContracts",
//     async (id) => {
//       try {
//         const response = await axios.get(`${url}/products/find/${id}`,
//           setHeaders()
//         );
//         const data = response.data;
//         if (Web3.givenProvider && data) {
//             await Web3.givenProvider.enable();
//             const web3 = new Web3(Web3.givenProvider);
//             console.log('web3', web3)
//             const propContracts = new web3.eth.Contract(CONTRACT_ABIS, data.uid);
        
//         return {
//             propContracts,
//         };
//     }
//       } catch (error) {
//         console.log(error.response.data);
//         console.log(error.propContracts);
//         toast.error(error.response?.data, {
//           position: "bottom-left",
//         });
//       }
//     }
//   );


export const updatAccount = createAsyncThunk( "updatAccount", async (data, thunkAPI) => {
    try {
         let accounts = data
            return {
                accounts,
            }
    } catch (error) {
        console.log('error', error)

    }
});


const web3ConnectSlice = createSlice({
    name: 'web3Connect',
    initialState,
    reducers: {},
    extraReducers: {
        [loadBlockchain.pending.toString()]: (state, { payload }) => {
            state.status = "pending"
        },
        [loadBlockchain.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.contract = payload?.contract;
            state.accounts = payload?.accounts;
            // state.socketContract = payload?.socketContract;
            state.UsdtContract = payload?.UsdtContract;
            state.UsdcContract = payload?.UsdcContract;
            // state.EscrowContract = payload?.EscrowContract;
            // state.VotingContract = payload?.VotingContract;
            state.status = "success";
        },
        [loadBlockchain.rejected.toString()]: (state, { payload }) => {
            state.status = "rejected";
        },

        [loadWalletConnect.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.contract = payload?.contract;
            state.accounts = payload?.accounts;
            state.UsdtContract = payload?.UsdtContract;
            state.UsdcContract = payload?.UsdcContract;
            // state.EscrowContract = payload?.EscrowContract;
            // state.VotingContract = payload?.VotingContract;
            // state.socketContract = payload?.socketContract;
            state.status = "success";
        },
        [updatAccount.fulfilled.toString()]: (state, { payload }) => {
            state.accounts = payload?.accounts;
        },
        // [loadContracts.fulfilled.toString()]: (state, { payload }) => {
        //     state.propContracts = payload?.propContracts;
        // }
    }
})

export const web3Reducer = web3ConnectSlice.reducer;
