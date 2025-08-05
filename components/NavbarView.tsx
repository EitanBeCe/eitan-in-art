import Link from "next/link";
import Image from "next/image";
import {ThemeToggleButton} from "@/components/providers/theme-toggle-button";
import React from "react";
import { FaTruck } from "react-icons/fa";

interface NavbarViewProps {
    hideThemeToggler?: boolean;
}

const NavbarView = async ({ hideThemeToggler = false }: NavbarViewProps
) => {
    return (
        <header className="flex items-center justify-between gap-1 px-5 py-3 shadow-sm bg-black/5 dark:bg-black/20 border-b border-gray-200 dark:border-gray-800">
            <Link href="/">
                <Image
                    src="/eitanOnPurple.png"
                    alt="Eitan's portrait"
                    width={50}
                    height={50}
                    // className="rounded-full object-cover border-2 border-purple-500"
                    className="rounded-full object-cover aspect-square sm:mr-[14vw]"
                    priority
                />
            </Link>

            <h1 className="max-sm:text-xl text-2xl text-center">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                    <span className="max-md:hidden">Eitan's virtual Gallery and Shop</span>
                    <span className="md:hidden">
                        Eitan's virtual<br />
                        Gallery and Shop
                    </span>
                </Link>
            </h1>

            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1">
                <nav>
                    <Link
                        href="/info"
                        className="inline-flex items-center gap-2 p-1 sm:p-2 bg-purple-400 hover:bg-purple-500  text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 hover:shadow-lg active:scale-95 transform"
                    >
                        <FaTruck className="sm:text-lg text-black" />
                        <span className="max-sm:hidden text-black">Delivery and Prints info</span>
                    </Link>
                </nav>

                {!hideThemeToggler && <ThemeToggleButton variant="circle-blur" start="top-right" />}
            </div>
        </header>
    );
};

export default NavbarView;