import React from "react";
import NavbarView from "@/components/NavbarView";
import FooterView from "@/components/FooterView";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="dark font-work-sans text-foreground">
            <NavbarView />
            {children}
            <FooterView />
        </main>
    );
}