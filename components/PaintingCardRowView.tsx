"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {PaintingCodable} from "@/lib/paintings";
import Image from "next/image";

export function PaintingCardRowView({ slug, title, description, images }: PaintingCodable
) {
    return (
        <a href={`/${slug}`} target="_blank">
            <CardContainer className="inter-var">
                {/*<CardBody className="bg-gray-50 relative group/card hover:shadow-[0_0_45px_0px] hover:shadow-purple-500 dark:hover:shadow-purple-500/80 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-shadow duration-200 ease-linear">*/}
                <CardBody className="bg-gray-50 relative group/card hover:shadow-[0_0_45px_0px] hover:shadow-purple-500 dark:hover:shadow-purple-500/80 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                        translateZ="70"
                        className="text-xl font-bold text-neutral-600 dark:text-white truncate"
                    >
                        {title}
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ="40"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 truncate"
                    >
                        {description}
                    </CardItem>

                    <CardItem translateZ="120" className="w-full h-full mt-4">
                        <Image
                            src={images[0]}
                            height="1000"
                            width="1000"
                            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
