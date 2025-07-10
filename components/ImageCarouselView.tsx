'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
    images: string[];
};

export default function ImageCarousel({ images }: Props) {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [autoplay, setAutoplay] = useState(true);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'snap',
        slides: {
            perView: 1.6,
            spacing: 10,
            origin: 'center',
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setIsMounted(true);
        },
    });

    // Autoplay
    useEffect(() => {
        if (!isMounted || !instanceRef.current) return;

        timer.current = setInterval(() => {
            instanceRef.current?.next();
        }, 6000);

        return () => {
            if (timer.current) clearInterval(timer.current);
        };
    }, [isMounted]);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="w-full max-w-6xl mx-auto relative overflow-hidden">

            {/* SLIDER */}
            <div ref={sliderRef} className="keen-slider rounded-xl">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide flex justify-center items-center"
                    >
                        <Image
                            src={img}
                            alt={`image-${index}`}
                            width={1000}
                            height={800}
                            className="w-full h-auto object-contain max-h-[80vh] rounded-md"
                            sizes="(max-width: 768px) 100vw, 900px"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* ARROWS — only on desktop */}
            {/*{!isMobile && (*/}
            {!isMobile && isMounted && (
                <>
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 px-3 rounded-full shadow-md transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 px-3 rounded-full shadow-md transition"
                    >
                        →
                    </button>
                </>
            )}

            {/* DOTS */}
            {isMounted && (
                <div className="flex justify-center items-center gap-2 mt-4 ml-16">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-4 h-3 rounded-full ${
                                currentSlide === idx
                                    ? 'bg-white'
                                    : 'bg-gray-500 hover:bg-gray-400'
                            } transition`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}

                    <button
                        onClick={() => setAutoplay((prev) => !prev)}
                        className="ml-4 text-sm px-2 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition flex items-center gap-2"
                        aria-label={autoplay ? 'Pause autoplay' : 'Play autoplay'}
                    >
                        {autoplay ? <PauseIcon /> : <PlayIcon />}
                    </button>
                </div>
            )}
        </div>
    );
}

const PlayIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 4l12 6-12 6V4z" />
    </svg>
);

const PauseIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 4h3v12H6zM11 4h3v12h-3z" />
    </svg>
);
