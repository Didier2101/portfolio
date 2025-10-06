// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";
import Logo from "./Logo";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/servicios", label: t.nav.services },
    { path: "/workflow", label: t.nav.workflow },
    { path: "/demos", label: t.nav.demos },
    { path: "/contacto", label: t.nav.contact },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed border-b border-gray-900 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black backdrop-blur-lg "
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo con imagen */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-30 h-12 md:w-50 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-all duration-300">
                <Logo />
              </div>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-orange-500/10 border border-orange-500/20 rounded-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              );
            })}

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300"
              >
                <Globe size={16} />
                <span className="font-mono text-sm">{language.toUpperCase()}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isLanguageOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-xl backdrop-blur-lg overflow-hidden"
                  >
                    <button
                      onClick={() => handleLanguageChange("es")}
                      className={`w-full px-4 py-2 text-left transition-all duration-200 flex items-center gap-2 ${language === "es"
                        ? "bg-orange-500/20 text-orange-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}
                    >
                      <span className="font-mono text-sm">ES</span>
                      <span className="text-sm">Español</span>
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`w-full px-4 py-2 text-left transition-all duration-200 flex items-center gap-2 ${language === "en"
                        ? "bg-orange-500/20 text-orange-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}
                    >
                      <span className="font-mono text-sm">EN</span>
                      <span className="text-sm">English</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="/contacto"
              className="ml-2 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 border border-orange-500 hover:border-orange-600 shadow-lg hover:shadow-orange-500/25 font-mono text-sm"
            >
              {t.nav.startProject}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language Selector Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300"
              >
                <Globe size={16} />
                <span className="font-mono text-sm">{language.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-xl backdrop-blur-lg overflow-hidden z-50"
                  >
                    <button
                      onClick={() => handleLanguageChange("es")}
                      className={`w-full px-4 py-2 text-left transition-all duration-200 flex items-center gap-2 ${language === "es"
                        ? "bg-orange-500/20 text-orange-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}
                    >
                      <span className="font-mono text-sm">ES</span>
                      <span className="text-sm">Español</span>
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`w-full px-4 py-2 text-left transition-all duration-200 flex items-center gap-2 ${language === "en"
                        ? "bg-orange-500/20 text-orange-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}
                    >
                      <span className="font-mono text-sm">EN</span>
                      <span className="text-sm">English</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="pb-6 border-t bg-black border-gray-800 pt-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMenu}
                        className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 ${isActive
                          ? "text-orange-500 bg-orange-500/10 border border-orange-500/20"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                          }`}
                      >
                        {isActive && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        )}
                        {item.label}
                      </Link>
                    );
                  })}

                  {/* Mobile CTA */}
                  <Link
                    to="/contacto"
                    onClick={closeMenu}
                    className="mt-4 px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 text-center font-mono border border-orange-500 hover:border-orange-600"
                  >
                    {t.nav.startProject}
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;