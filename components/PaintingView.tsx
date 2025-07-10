import { PaintingCodable } from "@/lib/paintings";
import ImageCarouselView from "@/components/ImageCarouselView";
import Image from "next/image";

export function PaintingView({ title, description, images, paint, size, price, colors }: PaintingCodable) {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={images[0]}
                    alt="background"
                    fill
                    className="object-cover blur brightness-75"
                    priority
                    quality={10}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8 relative">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                <ImageCarouselView images={images} />

                <div className="max-w-2xl mx-auto mt-8 space-y-6">
                    {/* Technical details */}
                    <div className="grid grid-cols-2 gap-4 text-lg bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                        <div className="space-y-2">
                            <p><span className="font-semibold">Materials:</span> {paint}</p>
                            <p><span className="font-semibold">Size:</span> {size}cm</p>
                        </div>
                        <div className="space-y-2">
                            <p><span className="font-semibold">Colors:</span> {colors}</p>
                            <p><span className="font-semibold">Price:</span> ${price.toLocaleString()}</p>
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