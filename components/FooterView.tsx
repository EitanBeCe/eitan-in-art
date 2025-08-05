'use client';

import SocialsView from "@/components/SocialsView";

const FooterView = () => {
    return (
        <footer className="mt-auto py-6 px-4 bg-black/5 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
                <SocialsView />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Eitan&apos;s Gallery. All rights reserved.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    All artwork and website created by Eitan
                </p>

            </div>
        </footer>
    );
};

export default FooterView;