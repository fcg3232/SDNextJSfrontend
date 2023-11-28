export const CONTRACT_ADDRESS="0x92B136410E1702bd6996304a02B9DfdB60EFC62c"


export const CONTRACT_ABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_EscrowsAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_VotingAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_PurchasePrice",
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
			},
			{
				"internalType": "uint256",
				"name": "_InitialEscrow",
				"type": "uint256"
			}
		],
		"name": "AddPropInfo",
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
				"name": "_propertyTokenAddress",
				"type": "address"
			}
		],
		"name": "CreateProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "GrantPropOwnerRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "LogAdmin",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_propertyadmin",
				"type": "address"
			}
		],
		"name": "PropertyAdmin",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_discription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Start_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "End_Time",
				"type": "uint256"
			}
		],
		"name": "Proposals",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "revokePoolOwnerRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
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
		"name": "StartSell",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "TransferOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "INDEX",
				"type": "uint256"
			}
		],
		"name": "voting",
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
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetCompletePropDetails",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
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
		"name": "Owner",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PropertyContractAddress",
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
				"name": "_address",
				"type": "address"
			}
		],
		"name": "PT_Balances",
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
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
		"name": "TotalProperties",
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
		"name": "USDC_Balance",
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
		"name": "USDT_Balance",
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






// export const CONTRACT_ADDRESS="0x5dCa45881a07Fa3Dfc252B32f63A9607F296f93c"


// export const CONTRACT_ABI=[
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_EscrowsAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_VotingAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_PurchasePrice",
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
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_InitialEscrow",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "AddPropInfo",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "enum Escrow.TypeOfFund",
// 				"name": "Type_token",
// 				"type": "uint8"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "TokenQuant",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_price",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Buyers",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_propertyTokenAddress",
// 				"type": "address"
// 			}
// 		],
// 		"name": "CreateProperty",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "EndReSelling",
// 		"outputs": [],
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
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "_qantToken",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "_price",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "BuyTokens",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "GrantPropOwnerRole",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "success",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "grantRole",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "propOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "_admin",
// 				"type": "address"
// 			}
// 		],
// 		"name": "LogAdmin",
// 		"type": "event"
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
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "_propertyadmin",
// 				"type": "address"
// 			}
// 		],
// 		"name": "PropertyAdmin",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_discription",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "Start_time",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "End_Time",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Proposals",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
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
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "renounceRole",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
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
// 		"name": "revokePoolOwnerRole",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "revokeRole",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "bytes32",
// 				"name": "previousAdminRole",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "bytes32",
// 				"name": "newAdminRole",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "RoleAdminChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "RoleGranted",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "RoleRevoked",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
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
// 		"name": "Sellers",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "StartSell",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "StatrtResell",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
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
// 		"name": "Token_Transfer",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
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
// 		"name": "TransferOwner",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "success",
// 				"type": "bool"
// 			}
// 		],
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
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "INDEX",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "voting",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "enum Escrow.TypeOfFund",
// 				"name": "Type_token",
// 				"type": "uint8"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_tokens",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "withdrawTokens",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "DEFAULT_ADMIN_ROLE",
// 		"outputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "",
// 				"type": "bytes32"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "GetCompletePropDetails",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"components": [
// 							{
// 								"internalType": "address",
// 								"name": "propertyTokenAddress",
// 								"type": "address"
// 							}
// 						],
// 						"internalType": "struct IProp.PropertyModel",
// 						"name": "prop",
// 						"type": "tuple"
// 					},
// 					{
// 						"components": [
// 							{
// 								"internalType": "address",
// 								"name": "propertyAddress",
// 								"type": "address"
// 							},
// 							{
// 								"internalType": "address",
// 								"name": "Escrows",
// 								"type": "address"
// 							},
// 							{
// 								"internalType": "address",
// 								"name": "VotingAddress",
// 								"type": "address"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "PurchasePrice",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "TotalTokenHolders",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "ListingFee",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "ServicingFee",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "TokenPrice",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "BuySellingFee",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "uint256",
// 								"name": "Escrow",
// 								"type": "uint256"
// 							},
// 							{
// 								"internalType": "bool",
// 								"name": "StartSell",
// 								"type": "bool"
// 							},
// 							{
// 								"internalType": "bool",
// 								"name": "Resell",
// 								"type": "bool"
// 							}
// 						],
// 						"internalType": "struct IProp.PropertyInfo",
// 						"name": "PropertyDetails",
// 						"type": "tuple"
// 					}
// 				],
// 				"internalType": "struct IProp.CompletePropertDetails",
// 				"name": "propDetails",
// 				"type": "tuple"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "getRoleAdmin",
// 		"outputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "",
// 				"type": "bytes32"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "role",
// 				"type": "bytes32"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "hasRole",
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
// 		"name": "isActive",
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
// 		"name": "isResell",
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
// 		"inputs": [],
// 		"name": "Owner",
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
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "PropertyContractAddress",
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
// 		"name": "PT_Balances",
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
// 				"internalType": "bytes4",
// 				"name": "interfaceId",
// 				"type": "bytes4"
// 			}
// 		],
// 		"name": "supportsInterface",
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
// 		"name": "TotalProperties",
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
// 		"name": "USDC_Balance",
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
// 		"name": "USDT_Balance",
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