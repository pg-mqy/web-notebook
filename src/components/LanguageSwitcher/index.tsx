"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const locales = ["en", "zh"];
const cookieName = "lang";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState("en");

    useEffect(() => {
        const langFromCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${cookieName}=`))
            ?.split("=")[1];

        if (langFromCookie && locales.includes(langFromCookie)) {
            setCurrentLocale(langFromCookie);
        }
    }, []);

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;
        if (newLocale === currentLocale) return;

        document.cookie = `${cookieName}=${newLocale}; path=/; max-age=31536000`; // 存储1年
        const newPath = `/${newLocale}${pathname.replace(/^\/(en|zh)/, "")}`;
        router.push(newPath);
        setCurrentLocale(newLocale);
    };

    return (
        <select value={currentLocale} onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="zh">中文</option>
        </select>
    );
};

export default LanguageSwitcher;
