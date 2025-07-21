import React from "react";
import NavbarView from "@/components/NavbarView";
import FooterView from "@/components/FooterView";
import {ThemeToggleButton} from "@/components/providers/theme-toggle-button";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="font-work-sans">
            <NavbarView />
            <div className="absolute top-2 right-2">
                <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
            </div>

            {children}

            <FooterView />
        </main>
    );
}