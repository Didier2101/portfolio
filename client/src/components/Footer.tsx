import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "Cómo trabajamos", path: "/workflow" },
        { name: "Demos", path: "/demos" },
        { name: "Contacto", path: "/contacto" },
    ];

    const contactInfo = [
        { icon: Mail, text: "contacto@ibug.space" },
        { icon: Phone, text: "+57 302 864 5014" },
        { icon: MapPin, text: "Bogotá, Colombia" },
    ];

    const socialLinks = [
        { icon: Github, label: "GitHub", url: "https://github.com/Didier2101" },
        {
            icon: Linkedin,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/dcg-didierchavez/",
        },
    ];

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <Logo />

                        <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                            Software a la medida para pymes.
                            De la idea al producto final, en !bug hacemos tu proyecto realidad.
                        </p>
                    </motion.div>

                    {/* Links rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            Navegación
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={link.path}
                                        className="hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contacto y redes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            Contáctanos
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <item.icon className="w-4 h-4 text-blue-900 dark:text-blue-400" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

                {/* Copyright */}
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    © {currentYear} !bug — Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
