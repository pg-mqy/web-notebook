import {Inter} from "next/font/google";
import "../globals.css";
import {ThemeProviders} from "@/context/ThemeProviders";

const inter = Inter({subsets: ["latin"]});

interface LangParams {
    lang: string;
}

export async function generateStaticParams() {
    return [{lang: "en"}, {lang: "zh"}];
}

export default async function RootLayout({children, params,}: Readonly<{
    children: React.ReactNode;
    params: LangParams;
}>) {
    const locale = await params;
    return (
        <html lang={locale.lang} suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProviders>{children}</ThemeProviders>
        </body>
        </html>
    );
}