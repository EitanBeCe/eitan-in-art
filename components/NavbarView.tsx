import Link from "next/link";
import Image from "next/image";
import {ThemeToggleButton} from "@/components/providers/theme-toggle-button";
import React from "react";

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
                    className="rounded-full object-cover aspect-square sm:mr-28"
                    priority
                />
            </Link>

            <h1 className="max-sm:text-xl text-2xl text-center">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                    Eitan's virtual Gallery and Shop
                </Link>
            </h1>

            {/*<Link*/}
            {/*    href="/info"*/}
            {/*    className="inline-flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 mt-2 mx-auto hover:shadow-lg active:scale-95 transform"*/}
            {/*>*/}
            {/*    Delivery and Prints info*/}
            {/*</Link>*/}

            <div className="flex items-center gap-1">
                <nav>
                    <Link
                        href="/info"
                        className="inline-flex items-center px-4 py-2 bg-purple-400 hover:bg-purple-500 dark:bg-purple-800 dark:hover:bg-purple-900 text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 hover:shadow-lg active:scale-95 transform"
                    >
                        Delivery and Prints info
                    </Link>
                </nav>

                {!hideThemeToggler && <ThemeToggleButton variant="circle-blur" start="top-right" />}
            </div>
        </header>
    );
};

export default NavbarView;