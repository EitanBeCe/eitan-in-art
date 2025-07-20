'use client';

import { FaInstagram } from 'react-icons/fa';

const FooterView = () => {
    return (
        <footer className="mt-auto py-6 px-4 bg-black/5 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
                <a
                    href="https://www.instagram.com/artelberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-purple-500 transition-colors"
                    aria-label="Follow us on Instagram"
                >
                    <FaInstagram size={24} />
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Eitan's Gallery. All rights reserved.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    All artwork and website created by Eitan
                </p>

            </div>
        </footer>
    );
};

export default FooterView;