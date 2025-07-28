import { PaintingCodable } from "@/lib/paintings";
import Image from "next/image";
import {CardCarouselView} from "@/components/ui/card-carousel";
import React from "react";
import SocialsView from "@/components/SocialsView";

export function PaintingView({ title, description, images, paint, size, price, colors, isSold, isPrintsAvailable, wasExhibited }: PaintingCodable) {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={images[0]}
                    alt="background"
                    fill
                    className="object-cover blur brightness-75" // scale-105 to hide white borders
                    // priority
                    quality={10}
                />
            </div>

            <div className="py-4 relative">
            {/*<div className="mx-auto max-sm:px-3 px-8 py-4 relative">*/}
                <h1 className="text-2xl px-2 md:text-3xl font-bold mb-4 text-center">{title}</h1>

                {/*<ImageCarouselView images={images} />*/}

                <CardCarouselView
                    images={images.map((i) => ({ src: i, alt: title }))}
                    autoplayDelay={2000}
                    showPagination={true}
                    showNavigation={true}
                />

                {/*Content*/}
                <div className="flex flex-col lg:flex-row gap-8 px-4 max-w-7xl mx-auto">
                    <div className="flex-1 space-y-6">
                        {/* Technical details */}
                        <div className="grid grid-cols-2 gap-4 text-lg bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                            <div className="space-y-2">
                                <p><span className="font-semibold">Materials:</span> {paint}</p>
                                <p><span className="font-semibold">Size:</span> {size}cm</p>
                                <p><span className="font-semibold">Colors:</span> {colors}</p>
                            </div>
                            <div className="space-y-2">
                                <p><span className="font-semibold">Price:</span> ₪{price.toLocaleString()}</p>
                                <p><span className="font-semibold">Status:</span> {isSold ? "Sold" : "Available"}</p>
                                <p><span className="font-semibold">Prints:</span> {isPrintsAvailable ? "Available" : "Original only"}</p>
                                {wasExhibited && <p><span
                                    className="font-semibold">Exhibition:</span> {wasExhibited ? "Has been exhibited" : "Not exhibited"}
                                </p>}
                            </div>
                        </div>

                        {/* Description */}
                        {description && (
                            <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Side Block - additional info */}
                    <div className="lg:w-80 shrink-0">
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm sticky top-4">
                            <h2 className="text-xl font-bold mb-4">Prices & Shipping</h2>

                            {/* Print Prices */}
                            <div className="space-y-3 mb-6">
                                <h3 className="font-semibold">Print Prices:</h3>
                                <div className="space-y-2">
                                    <p>Small (20x30cm) - ₪200</p>
                                    <p>Medium (30x40cm) - ₪350</p>
                                    <p>Large (50x70cm) - ₪600</p>
                                </div>
                            </div>

                            {/* Shipping */}
                            <div className="space-y-3 mb-6">
                                <h3 className="font-semibold">Shipping:</h3>
                                <div className="space-y-2">
                                    <p>Israel: 2-7 business days</p>
                                    <p>Worldwide: 7-14 business days</p>
                                    {/*<p>Free shipping over ₪500</p>*/}
                                </div>
                            </div>

                            {/* Production Time */}
                            <div className="space-y-3 mb-6">
                                <h3 className="font-semibold">Production Time:</h3>
                                <div className="space-y-2">
                                    <p>Print creation: 2-5 business days</p>
                                    <p>Your custom painting creation: 1-20 business days</p>
                                </div>
                            </div>

                            {/* Contacts */}
                            <div className="-m-3 space-y-3 mt-8 p-6 bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-xl border-2 border-purple-500/50 backdrop-blur-sm shadow-lg">
                                <h3 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                                    Ready to Order?
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-center font-medium">
                                        To order a print or an original artwork, please contact me:
                                    </p>
                                    <div className="flex justify-center">
                                        <SocialsView />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
