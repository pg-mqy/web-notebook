"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const i18nLoaders = {
    en: () => import("./../../i18n/zh.json").then((m) => m.default),
    zh: () => import("./../../i18n/en.json").then((m) => m.default),
};

export function useT() {
    const params = useParams();
    const lang = (params.lang as keyof typeof i18nLoaders) || "en"; // 读取 URL 语言，默认 "en"

    const [t, setT] = useState<Record<string, string>>({});

    useEffect(() => {
        const loadI18n = async () => {
            const translations = await (i18nLoaders[lang] ? i18nLoaders[lang]() : i18nLoaders.en());
            setT(translations);
        };

        loadI18n();
    }, [lang]);

    return t;
}
