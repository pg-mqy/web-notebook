"use client";
import {Notebook} from "@/components/Notebook";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between p-24 text-2xl">
            <div className="text-center">
                <Notebook/>
            </div>
        </div>
    )
}

