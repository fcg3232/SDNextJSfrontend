export const ESCROW_ADDRESS="0x1483cC26f595A63a4E8ea25d7990cd06498258B6"

export const ESCROW_ABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_proptoken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_initialEscrow",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ListingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ServicingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TokenPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_BuySellingFee",
				"type": "uint256"
			}
		],
		"name": "AccountInformation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "BuyerCancellOrder",
		"outputs": [
			{
				"internalType": "enum Escrow.OrderStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_buyer",
				"type": "address"
			},
			{
				"internalType": "enum Escrow.TypeOfFund",
				"name": "_Type_of_Currency",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_NoPropertToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_SendingTokenCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "BuyersOffer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getStatusofBuyer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "SallerCancellOrder",
		"outputs": [
			{
				"internalType": "enum Escrow.OrderStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_seller",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_toeknQuant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "SellerOffer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Accountant",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "AccountantAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "BuyerAddres",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "BuyersIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "checkStatusofBuyer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetAccountInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "TokenofProperty",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "initialEscrow",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ListingFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ServicingFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "TokenPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "BuySellingFee",
						"type": "uint256"
					}
				],
				"internalType": "struct Escrow.AccountInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			}
		],
		"name": "GetBuyers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "buyerAddress",
						"type": "address"
					},
					{
						"internalType": "enum Escrow.TypeOfFund",
						"name": "Type_of_Currency",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "NoPropertToken",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "SendingTokenCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ExpiryTime",
						"type": "uint256"
					},
					{
						"internalType": "enum Escrow.OrderStatus",
						"name": "orderStatus",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "Fund_Released",
						"type": "bool"
					}
				],
				"internalType": "struct Escrow.BuyerInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "GetOrderStatus",
		"outputs": [
			{
				"internalType": "enum Escrow.OrderStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			}
		],
		"name": "GetSeller",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sellerAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "TokenQuantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "PlateFormFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ExpiryTime",
						"type": "uint256"
					},
					{
						"internalType": "enum Escrow.OrderStatus",
						"name": "orderStatus",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "Fund_Released",
						"type": "bool"
					}
				],
				"internalType": "struct Escrow.SelerInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "GotCoinType",
		"outputs": [
			{
				"internalType": "enum Escrow.TypeOfFund",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "IntialBuyerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "NoOfPropTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "SellerAddres",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "SellersIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_propAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "StableTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Escrow.TypeOfFund",
				"name": "tokentype",
				"type": "uint8"
			}
		],
		"name": "TokenToUSD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Total_Investor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalBuyers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalInitialBuyers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalSellers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalTokenHolders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "USDC_balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "USDT_balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// export const ESCROW_ABI=[
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_proptoken",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_initialEscrow",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_ListingFee",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_ServicingFee",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_TokenPrice",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_BuySellingFee",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "AccountInformation",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "BuyerCancellOrder",
// 		"outputs": [
// 			{
// 				"internalType": "enum Escrow.OrderStatus",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_buyer",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "enum Escrow.TypeOfFund",
// 				"name": "_Type_of_Currency",
// 				"type": "uint8"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_NoPropertToken",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_SendingTokenCount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_price",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "BuyersOffer",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getStatusofBuyer",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "SallerCancellOrder",
// 		"outputs": [
// 			{
// 				"internalType": "enum Escrow.OrderStatus",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "renounceOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_seller",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_toeknQuant",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_price",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "SellerOffer",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "AccountantAddress",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "BuyerAddres",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "BuyersIndex",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "checkStatusofBuyer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "GetAccountInfo",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "address",
// 						"name": "TokenofProperty",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "initialEscrow",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "ListingFee",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "ServicingFee",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "TokenPrice",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "BuySellingFee",
// 						"type": "uint256"
// 					}
// 				],
// 				"internalType": "struct Escrow.AccountInfo[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			}
// 		],
// 		"name": "GetBuyers",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "address",
// 						"name": "buyerAddress",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "enum Escrow.TypeOfFund",
// 						"name": "Type_of_Currency",
// 						"type": "uint8"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "NoPropertToken",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "SendingTokenCount",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "Price",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "ExpiryTime",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "enum Escrow.OrderStatus",
// 						"name": "orderStatus",
// 						"type": "uint8"
// 					},
// 					{
// 						"internalType": "bool",
// 						"name": "Fund_Released",
// 						"type": "bool"
// 					}
// 				],
// 				"internalType": "struct Escrow.BuyerInfo[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "GetOrderStatus",
// 		"outputs": [
// 			{
// 				"internalType": "enum Escrow.OrderStatus",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			}
// 		],
// 		"name": "GetSeller",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "address",
// 						"name": "sellerAddress",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "TokenQuantity",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "Price",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "PlateFormFee",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "ExpiryTime",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "enum Escrow.OrderStatus",
// 						"name": "orderStatus",
// 						"type": "uint8"
// 					},
// 					{
// 						"internalType": "bool",
// 						"name": "Fund_Released",
// 						"type": "bool"
// 					}
// 				],
// 				"internalType": "struct Escrow.SelerInfo[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "GotCoinType",
// 		"outputs": [
// 			{
// 				"internalType": "enum Escrow.TypeOfFund",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "NoOfPropTokens",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "SellersIndex",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "StableTokens",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "enum Escrow.TypeOfFund",
// 				"name": "tokentype",
// 				"type": "uint8"
// 			}
// 		],
// 		"name": "TokenToUSD",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "USDC_balance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "USDT_balance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]