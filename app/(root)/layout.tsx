import React from "react";
import NavbarView from "@/components/NavbarView";
import FooterView from "@/components/FooterView";
import {ThemeToggleButton} from "@/components/providers/theme-toggle-button";
import {ThemeProvider} from "@/components/providers/ThemeProvider";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="font-work-sans">
                <ThemeProvider>
                    {/*<div className="fixed inset-0">*/}
                    {/*    <BackgroundGradientAnimation*/}
                    {/*        containerClassName="fixed inset-0 opacity-95 z-[-1]"*/}
                    {/*        className="opacity-50"*/}
                    {/*        gradientBackgroundStart="rgba(0,0,0,0)"*/}
                    {/*        gradientBackgroundEnd="rgba(0,0,0,0)"*/}
                    {/*        size="100%"*/}
                    {/*        blendingValue="screen"*/}
                    {/*        interactive={false}*/}
                    {/*        firstColor="108, 0, 162"*/}
                    {/*        secondColor="221, 74, 255"*/}
                    {/*        thirdColor="100, 220, 255"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <NavbarView />
                    <div className="absolute top-2 right-2">
                        <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
                    </div>

                    {children}

                    <FooterView />
                </ThemeProvider>
        </main>
    );
}