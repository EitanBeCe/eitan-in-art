import { PaintingCodable } from "@/lib/paintings";
import Image from "next/image";
import {CardCarouselView} from "@/components/ui/card-carousel";
import React from "react";
import DeliveryAndPrintsInfoView from "@/components/DeliveryAndPrintsInfoView";
import InstagramVideoView from "@/components/InstagramVideoView";

export function PaintingView({ slug, title, description, images, paint, size, price, colors, isSold, isPrintsAvailable, wasExhibited, videoUrl }: PaintingCodable) {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={
                        slug.includes("business")
                            ? images[5]
                            : slug.includes("abstract")
                                ? images[1]
                        : images[0]
                    }
                    alt="background"
                    fill
                    className={`object-cover blur scale-105 brightness-[68%] bg-black`}
                    // priority
                    quality={10}
                />
            </div>

            <div className="pt-4 pb-10 relative">
            {/*<div className="mx-auto max-sm:px-3 px-8 py-4 relative">*/}
                <h1 className="text-2xl px-2 md:text-3xl font-bold mb-5 text-center">{title}</h1>

                {/*<ImageCarouselView images={images} />*/}

                <CardCarouselView
                    images={images.map((i) => ({ src: i, alt: title }))}
                    autoplayDelay={2000}
                    showPagination={true}
                    showNavigation={true}
                />

                {/*Content*/}
                <div className="flex flex-col lg:flex-row gap-8 px-4 pt-4 max-w-7xl mx-auto">
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
                                <p><span className="font-semibold">Prints:</span> {isPrintsAvailable ? "Available" : "Original only"}</p>
                                <p><span className="font-semibold">Original:</span> {isSold ? "Sold" : "Available"}</p>
                                {wasExhibited && <p><span
                                    className="font-semibold">Exhibition:</span> {wasExhibited ? "Has been exhibited" : "Not exhibited"}
                                </p>}
                            </div>
                        </div>

                        {/* Description */}
                        {description && (
                            <p className="text-lg text-gray-700 dark:text-white whitespace-pre-wrap">
                                {description}
                            </p>
                        )}
                    </div>

                    <DeliveryAndPrintsInfoView/>
                </div>
            </div>

            {videoUrl && <InstagramVideoView videoUrl={videoUrl}/>}
        </div>
    );
}
