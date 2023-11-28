export const VOTTING_ADDRESS="0x6d379aa24219840317EFB34DA05E847662527587"
export const VOTTING_ABI=[
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
				"internalType": "string",
				"name": "discription",
				"type": "string"
			}
		],
		"name": "Create_Proposal",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "Get_Proposal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Discription",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Total_Vote",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Start_Voting",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "End_Voting",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.Propose[]",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "No_of_vote",
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
		"name": "Proposal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
		"name": "Proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "Discription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Total_Vote",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Start_Voting",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "End_Voting",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VotingAddress",
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
				"name": "INDEX",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "vot",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]