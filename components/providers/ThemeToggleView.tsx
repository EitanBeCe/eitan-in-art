// "use client";
//
// import { useTheme } from "next-themes";
// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import {ThemeToggleButton} from "@/components/ui/theme-toggle-button";
//
// export function ThemeToggle() {
//     const { theme, setTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);
//
//     useEffect(() => {
//         setMounted(true);
//     }, []);
//
//     if (!mounted) return null;
//
//     return (
//         <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="absolute top-3 right-4 p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
//             aria-label="Toggle theme"
//         >
//             {theme === "dark" ? (
//                 <Sun className="h-5 w-5 text-yellow-500" />
//             ) : (
//                 <Moon className="h-5 w-5 text-gray-900" />
//             )}
//         </button>
//     );
// }
