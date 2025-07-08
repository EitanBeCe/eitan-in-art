import React from "react";
import Navbar from "@/components/Navbar";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <ThemeProvider
        //     attribute="class"
        //     defaultTheme="dark"
        //     enableSystem={false}
        //     forcedTheme="dark"
        // >
            <main className="font-work-sans">
                <Navbar />

                {children}
            </main>
        // </ThemeProvider>
    );
}