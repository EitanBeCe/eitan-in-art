import { PaintingCodable } from "@/lib/paintings";

export function PaintingView({ title, description, image }: PaintingCodable) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <img
                src={image}
                alt={title}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6"
            />
            {description && (
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}