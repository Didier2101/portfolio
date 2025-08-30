import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark" | "system";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>("system");
    const [open, setOpen] = useState(false);

    // aplicar tema en <html>
    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = (t: Theme) => {
            if (t === "system") {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                root.classList.toggle("dark", prefersDark);
            } else {
                root.classList.toggle("dark", t === "dark");
            }
        };

        applyTheme(theme);
    }, [theme]);

    // ícono actual
    const currentIcon = {
        light: <Sun size={20} />,
        dark: <Moon size={20} />,
        system: <Laptop size={20} />,
    }[theme];

    // opciones de tema
    const options: { value: Theme; label: string; icon: JSX.Element }[] = [
        { value: "light", label: "Claro", icon: <Sun size={18} /> },
        { value: "dark", label: "Oscuro", icon: <Moon size={18} /> },
        { value: "system", label: "Sistema", icon: <Laptop size={18} /> },
    ];

    return (
        <div className="relative">
            {/* Botón principal */}
            <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Cambiar tema"
            >
                {currentIcon}
            </button>

            {/* Dropdown animado */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 py-2 z-50"
                    >
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => {
                                    setTheme(opt.value);
                                    setOpen(false);
                                }}
                                className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors 
                  ${theme === opt.value
                                        ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                            >
                                {opt.icon}
                                {opt.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
