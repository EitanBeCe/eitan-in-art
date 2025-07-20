"use client"

import React, {useEffect, useState} from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules"

interface CarouselProps {
    images: { src: string; alt: string }[]
    autoplayDelay?: number
    showPagination?: boolean
    showNavigation?: boolean
}

export const CardCarouselView: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
    const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  @media (min-width: 768px) {
    .swiper-slide {
      width: 360px;
    }
  }
    
  @media (min-width: 1024px) {
    .swiper-slide {
      width: 400px;
    }
  }
    
  @media (min-width: 1440px) {
    .swiper-slide {
      width: 460px;
    }
  }
 
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `

    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    useEffect(() => {
        if (fullscreenImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [fullscreenImage]);


    const handleImageClick = (img: string) => {
        setFullscreenImage(img);
    };

    return (
        <section className="w-ace-y-4">
            <style>{css}</style>
            {/*<div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">*/}
            <div className="w-full">
                {/*<div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">*/}
                <div className="relative mx-auto flex w-full flex-col md:items-start md:gap-8">
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="w-full">
                            <Swiper
                                spaceBetween={50}
                                autoplay={{
                                    delay: autoplayDelay,
                                    disableOnInteraction: false,
                                }}
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2.5,
                                }}
                                pagination={showPagination}
                                navigation={
                                    showNavigation
                                        ? {
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }
                                        : undefined
                                }
                                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                                breakpoints={
                                    {1024: {
                                        coverflowEffect: {
                                            modifier: 1.5
                                        }
                                    }}
                                }
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="size-full rounded-3xl"
                                            onClick={() => handleImageClick(image.src)}
                                        >
                                            <Image
                                                src={image.src}
                                                width={500}
                                                height={500}
                                                className="size-full rounded-xl"
                                                alt={image.alt}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="size-full rounded-3xl"
                                            onClick={() => handleImageClick(image.src)}
                                        >
                                            <Image
                                                src={image.src}
                                                width={200}
                                                height={200}
                                                className="size-full rounded-xl"
                                                alt={image.alt}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={() => setFullscreenImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-xl p-2 px-4 hover:bg-white/10 rounded-full"
                        onClick={() => setFullscreenImage(null)}
                    >
                        ✕
                    </button>
                    <Image
                        src={fullscreenImage}
                        alt="Fullscreen view"
                        width={1920}
                        height={1080}
                        className="max-w-[95vw] max-h-[95vh] object-contain"
                        quality={100}
                    />
                </div>
            )}
        </section>
    )
}
