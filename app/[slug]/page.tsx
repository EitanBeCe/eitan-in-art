import { PaintingView } from "@/components/PaintingView";
import paintings from "@/lib/paintings";
import { notFound } from "next/navigation";
import { Metadata } from 'next'

interface PageProps {
    // params: Promise<{
    //     slug: string;
    // }>;
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const painting = paintings.find((p) => p.slug === slug);

    if (!painting) {
        return {
            title: 'Not Found | Eitan in Art',
            description: 'The page you are looking for does not exist.'
        }
    }

    return {
        title: `${painting.title} | Eitan in Art`,
        description: painting.description || 'Original artwork by Eitan',
        authors: [{ name: "Eitan", url: "https://artelberg.netlify.app" }],
        openGraph: {
            title: `${painting.title} | Eitan in Art`,
            description: painting.description || 'Original artwork by Eitan',
            url: `https://artelberg.netlify.app/${painting.slug}`,
            siteName: "Eitan in Art",
            images: [{
                url: painting.images[0],
                width: 1200,
                height: 630,
                alt: painting.title
            }],
            type: "website",
        },
        twitter: {
            card: 'summary_large_image',
            title: `${painting.title} | Eitan in Art`,
            description: painting.description || 'Original artwork by Eitan',
            images: [painting.images[0]]
        }
    }
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    // const painting = paintings.find((p) => p.slug === slug);
    // if (!painting) {
    //     notFound();
    // }

    const currentIndex = paintings.findIndex((p) => p.slug === slug);
    if (currentIndex === -1) {
        notFound();
    }

    const painting = paintings[currentIndex];
    const nextIndex = (currentIndex + 1) % paintings.length;
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;

    const next = paintings[nextIndex];
    const prev = prevIndex !== null ? paintings[prevIndex] : null;

    return (
        <PaintingView
            {...painting}
            nextPainting={{
                slug: next.slug,
                title: next.title,
                image: next.images[0],
            }}
            prevPainting={
                prev
                    ? { slug: prev.slug, title: prev.title, image: prev.images[0] }
                    : undefined
            }
        />
    );
}

export async function generateStaticParams() {
    return paintings.map((painting) => ({
        slug: painting.slug,
    }));
}