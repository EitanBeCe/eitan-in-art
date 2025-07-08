import React from "react";
import Navbar from "@/components/Navbar";
import {ThemeToggle} from "@/components/providers/ThemeToggleView";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="font-work-sans">
            <Navbar />
            <ThemeToggle />

            {children}
        </main>
    );
}