import { PaintingView } from "@/components/PaintingView";
import paintings from "@/lib/paintings";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const painting = paintings.find((p) => p.slug === slug);

    if (!painting) {
        notFound();
    }

    return <PaintingView {...painting} />;
}

export async function generateStaticParams() {
    return paintings.map((painting) => ({
        slug: painting.slug,
    }));
}