"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div>
            <p>当前主题: {theme}</p>
            <select value={theme} onChange={e => setTheme(e.target.value)}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    );
}
