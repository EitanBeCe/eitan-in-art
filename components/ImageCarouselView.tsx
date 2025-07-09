'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
    images: { src: string; alt?: string }[];
};

export default function ImageCarouselView({ images }: Props) {
    const [loaded, setLoaded] = useState(false);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'snap', //'snap' | 'free' | 'free-snap'
        slides: { perView: 1, spacing: 10 },
        drag: true,
        created: () => setLoaded(true),
    });

    return (
        <div className="w-full max-w-xl mx-auto">
            <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
                {images.map((img, index) => (
                    <div key={index} className="keen-slider__slide">
                        <Image
                            src={img.src}
                            alt={img.alt || `image-${index}`}
                            width={1200}
                            height={900}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 800px"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
