import React from "react";
import NavbarView from "@/components/NavbarView";
import {ThemeToggle} from "@/components/providers/ThemeToggleView";
import FooterView from "@/components/FooterView";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="font-work-sans">
            <NavbarView />
            <ThemeToggle />

            {children}

            <FooterView />
        </main>
    );
}