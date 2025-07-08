"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-4 right-4 px-4 py-2 rounded-md bg-primary text-primary-foreground"
        >
            {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
}