import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Code as CodeIcon,
  FolderKanban as WorkflowIcon,
  Monitor as DemoIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mostrar/ocultar header al hacer scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Menú
  const menuItems = [
    { text: "Inicio", path: "/", Icon: HomeIcon },
    { text: "Servicios", path: "/servicios", Icon: CodeIcon },
    { text: "Cómo trabajamos", path: "/workflow", Icon: WorkflowIcon },
    { text: "Demos", path: "/demos", Icon: DemoIcon },
    { text: "Contacto", path: "/contacto", Icon: MailIcon },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  // Mobile menu
  const MobileMenu = (
    <motion.div
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ type: "tween" }}
      className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-950 p-6 shadow-xl transform md:hidden"
    >
      <Logo />
      <ul className="flex flex-col space-y-2 pt-4">
        {menuItems.map((item, index) => (
          <motion.li
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            onClick={() => setOpen(false)}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg font-medium transition-colors duration-200 ease-in-out ${isActive
                  ? "text-blue-900 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <item.Icon size={20} />
              <span>{item.text}</span>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-40 bg-white/70 dark:bg-gray-950 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Links desktop */}
            <div className="hidden md:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-base font-medium transition-colors duration-200 ${isActive
                      ? "text-blue-900 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <item.Icon size={18} />
                  {item.text}
                </NavLink>
              ))}
            </div>

            {/* Theme switcher + menú móvil */}
            <div className="flex items-center space-x-4 ml-10">
              <ThemeSwitcher />
              <button
                type="button"
                className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setOpen(!open)}
                aria-controls="mobile-menu"
                aria-expanded={open ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <MenuIcon size={26} />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      {open && MobileMenu}
    </>
  );
};

export default Header;
