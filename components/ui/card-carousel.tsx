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
  showNavigation = false,
}) => {
    const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
    will-change: transform;
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
    backface-visibility: hidden;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  /* Custom pagination styles */
  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
    transition: all 0.3s ease !important;
  }

  .swiper-pagination-bullet-active {
    background: white !important;
    transform: scale(1) !important;
  }

  /* Dynamic bullets - making center bullet larger */
  .swiper-pagination-bullet-active-main {
    transform: scale(1) !important;
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
                        <div className={`w-full ${images.length <= 2 && "max-sm:px-2"}`}>
                            <Swiper
                                observer
                                observeParents
                                observeSlideChildren
                                autoplay={{
                                    delay: autoplayDelay,
                                    disableOnInteraction: false
                                }}
                                // effect={"coverflow"}
                                effect={images.length > 2 ? "coverflow" : "cards"}
                                grabCursor={true}
                                centeredSlides={images.length > 2}
                                loop={images.length > 1}
                                // slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2.5,
                                }}
                                pagination={showPagination && images.length > 2 ? {
                                    clickable: true,
                                    dynamicBullets: true,
                                    dynamicMainBullets: 3,
                                } : false}
                                navigation={
                                    showNavigation
                                        ? {
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }
                                        : undefined
                                }
                                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 10,
                                    },
                                    500: {
                                        slidesPerView: "auto",
                                        spaceBetween: 50,
                                    },
                                    1024: {
                                        slidesPerView: "auto",
                                        spaceBetween: 50,
                                        coverflowEffect: {
                                            modifier: 1.5
                                        }
                                    }
                                }}

                            >
                                {/*{images.length < 3 ? (*/}
                                {/*    <div className="flex gap-4 justify-center">*/}
                                {/*        {images.map((image, index) => (*/}
                                {/*            <div*/}
                                {/*                key={index}*/}
                                {/*                className="aspect-[4/5] rounded-3xl h-[74vh] -mb-8"*/}
                                {/*                onClick={() => handleImageClick(image.src)}*/}
                                {/*            >*/}
                                {/*                <Image*/}
                                {/*                    src={image.src}*/}
                                {/*                    width={500}*/}
                                {/*                    height={500}*/}
                                {/*                    className="w-full h-full rounded-xl object-cover"*/}
                                {/*                    alt={image.alt}*/}
                                {/*                    priority={index === 0}*/}
                                {/*                />*/}
                                {/*            </div>*/}
                                {/*        ))}*/}
                                {/*    </div>*/}
                                {/*) : (*/}
                                    <>
                                        {/*{images.map((image, index) => (*/}
                                        {/*    <SwiperSlide key={`hq-${index}`}>*/}
                                        {/*        <div*/}
                                        {/*            className="aspect-[4/5] w-full rounded-3xl"*/}
                                        {/*            onClick={() => handleImageClick(image.src)}*/}
                                        {/*        >*/}
                                        {/*            <Image*/}
                                        {/*                src={image.src}*/}
                                        {/*                width={500}*/}
                                        {/*                height={500}*/}
                                        {/*                className="w-full h-full rounded-xl object-cover"*/}
                                        {/*                alt={image.alt}*/}
                                        {/*                priority={index === 0 || index === 1 || index === images.length - 1}*/}
                                        {/*            />*/}
                                        {/*        </div>*/}
                                        {/*    </SwiperSlide>*/}
                                        {/*))}*/}
                                        {images.map((image, index) => (
                                            <SwiperSlide key={`hq-${index}`}>
                                                <div className="aspect-[4/5] w-full rounded-3xl" onClick={() => handleImageClick(image.src)}>
                                                    <Image
                                                        src={image.src}
                                                        width={800}
                                                        height={1000}
                                                        alt={image.alt}
                                                        className="w-full h-full rounded-xl object-cover"
                                                        // loading={index < 3 ? "eager" : "lazy"}
                                                        loading={"eager"}
                                                        // priority={index === 0 || index === 1 || index === images.length - 1}
                                                        priority={index < 2}
                                                        sizes="(max-width: 768px) 80vw, 400px"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                        {images.map((image, index) => (
                                            <SwiperSlide key={`lq-${index}`}>
                                                <div
                                                    className="aspect-[4/5] w-full rounded-3xl"
                                                    onClick={() => handleImageClick(image.src)}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        width={800}
                                                        height={1000}
                                                        className="w-full h-full rounded-xl object-cover"
                                                        alt={image.alt}
                                                        // loading={index < 3 ? "eager" : "lazy"}
                                                        // priority={index < 2}
                                                        sizes="(max-width: 768px) 80vw, 400px"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </>
                                {/*)}*/}
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
