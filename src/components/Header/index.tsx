import {ThemeSwitcher} from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useT} from "../../../public/hooks/useT";
import useMetaMask from "../../../public/hooks/useMetaMask";
import React from "react";

export default function Header() {
    const t = useT();
    const {account, balance, connectWallet} = useMetaMask();
    return (
        <header className="bg-white dark:bg-gray-900">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span>{t.header_Home}</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                   href="/"
                                >
                                    {t.header_About}
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    {t.header_WhitePaper}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        <ThemeSwitcher/>
                        <LanguageSwitcher/>
                        {
                            account ? (
                                <div className="sm:flex sm:gap-4" onClick={connectWallet}>
                                    <p><strong>账户地址:</strong> {account}</p>
                                    <p><strong>余额:</strong> {balance} MATIC</p>
                                </div>
                            ) : (
                                <div className="sm:flex sm:gap-4" onClick={connectWallet}>
                                    <a
                                        className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                                        href="#"
                                    >
                                        {t.header_ConnectWallet}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}
