"use client";

import {ThemeProvider} from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function ThemeProviders({children}: { children: React.ReactNode }) {
    return<ThemeProvider attribute="class">
        <Header/>
        <main>{children}</main>
        <Footer/>
    </ThemeProvider>;
}
