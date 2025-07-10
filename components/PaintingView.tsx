import { PaintingCodable } from "@/lib/paintings";
import ImageCarouselView from "@/components/ImageCarouselView";
import Image from "next/image";

export function PaintingView({ title, description, images }: PaintingCodable) {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={images[0]}
                    alt="background"
                    fill
                    className="object-cover blur-md brightness-75"
                    priority
                    quality={10}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8 relative">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                <ImageCarouselView images={images} />

                {description && (
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>
        </div>

    );
}