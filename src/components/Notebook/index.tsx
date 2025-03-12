
import we3 from 'web3';
import React, {useEffect, useState} from 'react';

interface Note {
    content: string;
    author: string;
}

export const Notebook = () => {
    const contractABI = [
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
    const w3 = new we3('https://bsc-testnet-rpc.publicnode.com');
    const contractAddress = '0x9F400a5312AF72E1d20747Ac1A0B471D9B83109A';
    const contract = new w3.eth.Contract(contractABI, contractAddress);
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await contract.methods.getAllNotes().call();
        setNotes(data || []);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <table className="table-auto border-collapse">
                <thead>
                <tr>
                    <th className="border px-4 py-2">Id</th>
                    <th className="border px-4 py-2">Author</th>
                    <th className="border px-4 py-2">Content</th>
                    <th className="border px-4 py-2">Action</th>
                </tr>
                </thead>
                <tbody>
                {notes.map((note, index) => (
                    <tr key={index} className="border">
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{note?.author}</td>
                        <td className="border px-4 py-2">{note?.content}</td>
                        <td className="border px-10 py-2 flex">
                            <span className='cursor-pointer mr-10px c-blue'>编辑</span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
