import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import NavbarView from "@/components/NavbarView";
import FooterView from "@/components/FooterView";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import React from "react";

export default function NotFound() {
    return (
        <main className="font-work-sans">
            <ThemeProvider>
                {/*-z-10*/}
                <div className="fixed inset-0">
                    <BackgroundGradientAnimation
                        containerClassName="fixed inset-0 opacity-95 -z-10"
                        className="opacity-50"
                        gradientBackgroundStart="rgba(0,0,0,0)"
                        gradientBackgroundEnd="rgba(0,0,0,0)"
                        size="100%"
                        blendingValue="screen"
                        interactive={false}
                        firstColor="108, 0, 162"
                        secondColor="221, 74, 255"
                        thirdColor="100, 220, 255"
                    />
                </div>

                <NavbarView />

                <section className="section_container text-center">
                    <h1 className="text-3xl font-bold mb-4 mt-16">404 - Page Not Found</h1>
                    <p className="text-lg mb-20">Sorry, the page you are looking for does not exist.</p>

                    <ul className="mt-7 card_grid">
                        {paintings?.length > 0 ? (
                            paintings.map((p: PaintingCodable) => (
                                <PaintingCardRowView
                                    key={p.slug}
                                    {...p}
                                />
                            ))
                        ) : (
                            <p className="no-results">No artworks found</p>
                        )}
                    </ul>
                </section>

                <FooterView />
            </ThemeProvider>
        </main>
    );
}