import { PaintingCodable } from "@/lib/paintings";
import Image from "next/image";
import {CardCarousel} from "@/components/ui/card-carousel";
import React from "react";

export function PaintingView({ title, description, images, paint, size, price, colors, isSold, isPrintsAvailable, wasExhibited }: PaintingCodable) {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={images[0]}
                    alt="background"
                    fill
                    className="object-cover blur brightness-75"
                    // priority
                    quality={10}
                />
            </div>

            {/* Content */}
            {/*<div className="mx-auto max-sm:px-3 px-8 py-4 relative">*/}
            <div className="py-4 relative">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">{title}</h1>

                {/*<ImageCarouselView images={images} />*/}

                {/*https://blocks.mvp-subha.me/*/}
                {/*https://skiper-ui.com/*/}

                <CardCarousel
                    images={images.map((i) => ({ src: i, alt: title }))}
                    autoplayDelay={2000}
                    showPagination={true}
                    showNavigation={true}
                />

                {/* Technical details */}
                <div className="max-w-2xl mx-auto mt-8 space-y-6">
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
            </div>
        </div>
    );
}