import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { CONTRACT_ADDRESS, NOTEBOOK_CONTRACT_ABI, PRC_URL } from "@/shared/constants";

interface Note {
    content: string;
    author: string;
}

export const Notebook = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Set up ethers provider and contract
        const provider = new ethers.JsonRpcProvider(PRC_URL);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, NOTEBOOK_CONTRACT_ABI, provider);

        try {
            const data = await contract.getAllNotes();
            setNotes(data || []);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
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
