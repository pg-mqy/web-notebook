import "server-only";

const i18n = {
    en: () => import("./en.json").then((module) => module.default),
    zh: () => import("./zh.json").then((module) => module.default),
};

export const getI18n = async (locale) => i18n[locale]();