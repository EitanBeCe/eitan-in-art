"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {ThemeToggleButton} from "@/components/providers/theme-toggle-button";
import React from "react";
import {FaArrowLeft, FaTruck} from "react-icons/fa";

interface NavbarViewProps {
    isPaintingView?: boolean;
}

const NavbarView = ({ isPaintingView = false }: NavbarViewProps
) => {
    const router = useRouter();

    return (
        <header className={`flex items-center justify-between gap-1 px-5 py-3 bg-black/5`}>
            {isPaintingView ? (
                <div
                    onClick={() => router.back()}
                    className="flex items-center gap-3 sm:mr-[12vw] cursor-pointer"
                >
                    {isPaintingView && (<FaArrowLeft className="opacity-70 sm:hidden" />)}

                    <Image
                        src="/eitanOnPurple.png"
                        alt="Eitan's portrait"
                        width={50}
                        height={50}
                        // className="rounded-full object-cover border-2 border-purple-500"
                        className={`rounded-full object-cover aspect-square ${isPaintingView && "max-sm:hidden"}`}
                        priority
                    />
                </div>
            ) : (
                <Link href="/" className="flex items-center gap-3 sm:mr-[12vw]">
                    {isPaintingView && (<FaArrowLeft className="opacity-70 sm:hidden" />)}

                    <Image
                        src="/eitanOnPurple.png"
                        alt="Eitan's portrait"
                        width={50}
                        height={50}
                        // className="rounded-full object-cover border-2 border-purple-500"
                        className={`rounded-full object-cover aspect-square ${isPaintingView && "max-sm:hidden"}`}
                        priority
                    />
                </Link>
            )}

            <h1 className="max-sm:text-xl text-2xl text-center">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                    <span className="max-md:hidden">Eitan&apos;s virtual Gallery and Shop</span>
                    <span className="md:hidden">
                        Eitan&apos;s virtual<br />
                        Gallery and Shop
                    </span>
                </Link>
            </h1>

            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1">
                <nav>
                    <Link
                        href="/info"
                        className={`inline-flex items-center gap-2 p-1 sm:p-2 ${isPaintingView && "p-2"} bg-purple-400 hover:bg-purple-500  text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 hover:shadow-lg active:scale-95 transform`}
                    >
                        <FaTruck className="sm:text-lg text-black" />
                        <span className="max-sm:hidden text-black">Delivery and Prints info</span>
                    </Link>
                </nav>

                {!isPaintingView && <ThemeToggleButton variant="circle-blur" start="top-right" />}
            </div>
        </header>
    );
};

export default NavbarView;