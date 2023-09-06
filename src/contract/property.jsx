export const CONTRACT_ABIS=[
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "propertyTokenAddress",
						"type": "address"
					}
				],
				"internalType": "struct IProp.PropertyModel",
				"name": "_prop",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_qantToken",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "BuyTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "LogPropertyContractAddress",
		"type": "event"
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
				"internalType": "enum Escrow.TypeOfFund",
				"name": "Type_token",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "TokenQuant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "Buyers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
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
		"inputs": [],
		"name": "EndReSell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetInitialBuyers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SatrtSelling",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
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
		"name": "Sellers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "StatrtResell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TokenCount",
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
		"name": "TokenPrice",
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
		"name": "Token_Transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCompletePropDetails",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "address",
								"name": "propertyTokenAddress",
								"type": "address"
							}
						],
						"internalType": "struct IProp.PropertyModel",
						"name": "prop",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "propertyAddress",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "Escrows",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "VotingAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "PurchasePrice",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "TotalTokenHolders",
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
							},
							{
								"internalType": "uint256",
								"name": "Escrow",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "StartSell",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "Resell",
								"type": "bool"
							}
						],
						"internalType": "struct IProp.PropertyInfo",
						"name": "PropertyDetails",
						"type": "tuple"
					}
				],
				"internalType": "struct IProp.CompletePropertDetails",
				"name": "propDetails",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isActive",
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
		"name": "isResell",
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "propertyAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "Escrows",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "VotingAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "PurchasePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "TotalTokenHolders",
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
					},
					{
						"internalType": "uint256",
						"name": "Escrow",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "StartSell",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "Resell",
						"type": "bool"
					}
				],
				"internalType": "struct IProp.PropertyInfo",
				"name": "_sta",
				"type": "tuple"
			}
		],
		"name": "setInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "TokenQuant",
				"type": "uint256"
			},
			{
				"internalType": "enum Escrow.TypeOfFund",
				"name": "Type_token",
				"type": "uint8"
			}
		],
		"name": "stableToken",
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
				"internalType": "uint256",
				"name": "TokenQuant",
				"type": "uint256"
			},
			{
				"internalType": "enum Escrow.TypeOfFund",
				"name": "Type_token",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "stableTokencounts",
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
		"inputs": [
			{
				"internalType": "enum Escrow.TypeOfFund",
				"name": "Type_token",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_tokens",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]