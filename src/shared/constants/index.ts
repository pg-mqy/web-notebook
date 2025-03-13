export const PRC_URL = 'https://bsc-testnet-rpc.publicnode.com';

export const CONTRACT_ADDRESS = '0x9F400a5312AF72E1d20747Ac1A0B471D9B83109A';

export const NOTEBOOK_CONTRACT_ABI = [
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
                "name": "noteId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "content",
                "type": "string"
            }
        ],
        "name": "NoteAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "noteId",
                "type": "uint256"
            }
        ],
        "name": "NoteDeleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "noteId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newContent",
                "type": "string"
            }
        ],
        "name": "NoteUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "content",
                "type": "string"
            }
        ],
        "name": "addNote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "noteId",
                "type": "uint256"
            }
        ],
        "name": "deleteNote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "description",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllNotes",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "content",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "author",
                        "type": "address"
                    }
                ],
                "internalType": "struct Notebook.Note[]",
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
                "name": "noteId",
                "type": "uint256"
            }
        ],
        "name": "getNote",
        "outputs": [
            {
                "internalType": "string",
                "name": "content",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "author",
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
        "name": "hasWritten",
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
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "noteCounter",
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
                "internalType": "uint256",
                "name": "noteId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "newContent",
                "type": "string"
            }
        ],
        "name": "updateNote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]