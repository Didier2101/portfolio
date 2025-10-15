import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "./contexts/LanguageContext";
import logo from "../assets/logo-aurora-solo.png";

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: t.nav.home, path: "/" },
        { name: t.nav.services, path: "/servicios" },
        { name: t.nav.workflow, path: "/workflow" },
        { name: t.nav.demos, path: "/demos" },
        { name: t.nav.contact, path: "/contacto" },
    ];

    const contactInfo = [
        { icon: Mail, text: "contacto@Aurora Luminis.space" },
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
        <footer className="relative bg-black text-gray-400 py-16 border-t border-gray-800 overflow-hidden">

            {/* Elementos decorativos de código */}
            <div className="absolute bottom-10 left-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;Footer&gt;</div>
                <div className="ml-4">&lt;Links /&gt;</div>
                <div className="ml-4">&lt;Contact /&gt;</div>
                <div className="ml-4">&lt;Social /&gt;</div>
                <div>&lt;/Footer&gt;</div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6 z-10">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3 ">
                            <img
                                src={logo}
                                alt="Aurora Luminis Logo"
                                className=" h-14 w-auto -ml-4 -mt-1"
                            />

                            <p className="text-gray-300 text-sm leading-relaxed font-mono">
                                {t.footer.description}
                            </p>
                        </div>


                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-2 py-1 bg-orange-400/10 rounded text-xs text-orange-400 font-mono border border-orange-400/20">
                                React
                            </span>
                            <span className="px-2 py-1 bg-orange-400/10 rounded text-xs text-orange-400 font-mono border border-orange-400/20">
                                Node.js
                            </span>
                            <span className="px-2 py-1 bg-orange-400/10 rounded text-xs text-orange-400 font-mono border border-orange-400/20">
                                TypeScript
                            </span>
                        </div>
                    </motion.div>

                    {/* Links rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-sm font-bold text-white font-mono mb-6 flex items-center gap-2">
                            <span className="text-orange-400">&lt;</span>
                            {t.footer.quickLinks}
                            <span className="text-orange-400">/&gt;</span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={link.path}
                                        className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300 font-mono text-sm"
                                    >
                                        <span className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            &gt;
                                        </span>
                                        {link.name}
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300" />
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
                        <h4 className="text-sm font-bold text-white font-mono mb-6 flex items-center gap-2">
                            <span className="text-orange-400">&lt;</span>
                            {t.footer.contact}
                            <span className="text-orange-400">/&gt;</span>
                        </h4>

                        <ul className="space-y-4 mb-8">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 group">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-400/10 group-hover:bg-orange-400/20 transition-all duration-300">
                                        <item.icon className="w-4 h-4 text-orange-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <h5 className="text-sm font-bold text-white font-mono mb-4 flex items-center gap-2">
                                <span className="text-orange-400">&lt;</span>
                                {t.footer.followUs}
                                <span className="text-orange-400">/&gt;</span>
                            </h5>
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="border-t border-gray-800 my-12"
                />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <p className="text-gray-500 text-sm font-mono">
                        &lt;Copyright year="{currentYear}" /&gt;
                    </p>
                    <p className="text-gray-400 text-xs mt-2 font-mono">
                        {t.footer.rights}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;