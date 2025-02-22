"use client";
import {useT} from "../../../public/hook/UseT";

export default function Home() {
    const t = useT();
    return (
        <div className="flex flex-col items-center justify-between p-24 text-2xl">
            <div>{t.page}</div>
        </div>
    );
}

