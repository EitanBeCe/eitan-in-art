import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {PaintingCodable} from "@/lib/paintings";
import Image from "next/image";
import clsx from "clsx";

export function PaintingCardRowView({ slug, title, description, images }: PaintingCodable
) {
    return (
        <a href={`/${slug}`} target="_blank">
            <CardContainer className="inter-var" containerClassName="pt-8 pb-0 flex items-center justify-center">
                {/*<CardBody className={`bg-gray-50 relative group/card hover:shadow-[0_0_45px_0px] hover:${shadowColor} dark:hover:${shadowColor}/80 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-shadow duration-200 ease-linear`}>*/}
                <CardBody
                    className={clsx(
                        "bg-gray-50 relative group/card hover:shadow-[0_0_45px_0px]",
                        "dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-shadow duration-200 ease-linear",
                        slug.includes("chail") || slug.includes("mizmor")
                            ? "hover:shadow-pink-400"
                            :slug.includes("chai")
                                ? "hover:shadow-red-500"
                                : slug.includes("gold") || slug.includes("spring")
                                    ? "hover:shadow-yellow-400"
                                    : slug.includes("blue") || slug.includes("hillel") || slug.includes("wedding") || slug.includes("talit")
                                        ? "hover:shadow-sky-400"
                                            : slug.includes("white")
                                                ? "hover:shadow-white-100"
                                                    : slug.includes("russian") || slug.includes("horse") || slug.includes("ketubah") || slug.includes("savor")
                                                        ? "hover:shadow-green-500"
                        : "hover:shadow-purple-500 dark:hover:shadow-purple-500/80",
                    )}
                >
                    <CardItem
                        translateZ="70"
                        className="text-xl font-bold text-neutral-600 dark:text-white truncate"
                    >
                        {title}
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 truncate"
                    >
                        {description}
                    </CardItem>

                    <CardItem translateZ="120" className="w-full h-full mt-4">
                        <Image
                            src={images[0]}
                            height="1000"
                            width="1000"
                            className={`h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl ${slug.includes("hillel") ? "object-bottom" : ""}`}
                            alt={title.slice(0, 16)}
                            priority
                        />
                    </CardItem>

                    <div className="flex justify-between items-center mt-10">
                        <CardItem
                            translateZ={40}
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold ml-auto"
                        >
                            Show Painting
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </a>
    );
}
