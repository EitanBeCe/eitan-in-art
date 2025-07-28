import React from "react";
import NavbarView from "@/components/NavbarView";
import FooterView from "@/components/FooterView";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="dark font-work-sans text-foreground">
            <NavbarView hideThemeToggler />
            {children}
            <FooterView />
        </section>
    );
}