// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Server, Database, Layout, Zap, Terminal, Cpu, Binary } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./contexts/LanguageContext";


const techs = [
    { name: "React/Next.js", icon: Code, description: "Frameworks para construir interfaces web modernas y dinámicas." },
    { name: "Node.js/Express", icon: Server, description: "Entorno de servidor y framework para construir APIs y aplicaciones backend." },
    { name: "MySQL/PostgreSQL", icon: Database, description: "Bases de datos relacionales para almacenar y gestionar datos eficientemente." },
    { name: "Tailwind CSS", icon: Layout, description: "Framework de CSS para estilos rápidos, responsivos y altamente personalizables." },
    { name: "Vite/Zustand", icon: Zap, description: "Herramientas de desarrollo rápido y manejo de estado para aplicaciones frontend." },
];

const Hero: React.FC = () => {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const { t } = useLanguage();

    const feedbacks = [
        {
            name: t.hero.testimonials.client1,
            role: t.hero.testimonials.role1,
            comment: t.hero.testimonials.feedback1,
        },
        {
            name: t.hero.testimonials.client2,
            role: t.hero.testimonials.role2,
            comment: t.hero.testimonials.feedback2,
        },
    ];

    return (
        <section className="relative bg-black text-gray-400 py-24 overflow-hidden">

            <div className="absolute top-20 left-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;div className="hero"&gt;</div>
                <div className="ml-4">&lt;Code quality="high" /&gt;</div>
                <div className="ml-4">&lt;Performance optimized /&gt;</div>
                <div>&lt;/div&gt;</div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Terminal className="text-orange-400" size={32} />
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-mono">
                            Vadya<span className="text-orange-400">_</span>
                        </h1>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                        {t.hero.title}{" "}
                        <span className="text-orange-400 bg-orange-400/10 px-2 py-1 rounded-lg">
                            {t.hero.subtitle}
                        </span>
                    </h2>

                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t.hero.description.split("custom software solutions").map((part, i, arr) => (
                            i < arr.length - 1 ? (
                                <>
                                    {part}
                                    <span className="text-orange-400 font-semibold">custom software solutions</span>
                                </>
                            ) : part
                        ))}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <Link
                        to="/servicios"
                        className="px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 border border-orange-400 hover:border-orange-600 shadow-lg hover:shadow-orange-400/25"
                    >
                        {t.hero.viewServices}
                    </Link>
                    <Link
                        to="/contacto"
                        className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 hover:border-gray-500 font-mono"
                    >
                        {t.hero.contactUs}
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    {[
                        { value: "10+", label: t.hero.stats.projects },
                        { value: "100%", label: t.hero.stats.satisfaction },
                        { value: "24/7", label: t.hero.stats.support },
                        { value: "Fast", label: t.hero.stats.delivery }
                    ].map((stat, index) => (
                        <div key={index} className="p-4  rounded-lg border border-gray-800">
                            <div className="text-2xl font-bold text-orange-400 font-mono">{stat.value}</div>
                            <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="p-6  rounded-xl border border-gray-800 backdrop-blur-sm group hover:border-orange-400/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Cpu className="text-orange-400" size={24} />
                            <h3 className="text-xl font-bold text-white font-mono">{t.hero.vision.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{t.hero.vision.text}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.0 }}
                        className="p-6  rounded-xl border border-gray-800 backdrop-blur-sm group hover:border-orange-400/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="text-orange-400" size={24} />
                            <h3 className="text-xl font-bold text-white font-mono">{t.hero.mission.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{t.hero.mission.text}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="p-6  rounded-xl border border-gray-800 backdrop-blur-sm group hover:border-orange-400/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Binary className="text-orange-400" size={24} />
                            <h3 className="text-xl font-bold text-white font-mono">{t.hero.techStack}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {techs.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="relative"
                                    onMouseEnter={() => setHoveredTech(tech.name)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                >
                                    <div className="px-3 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm font-mono hover:border-orange-400 hover:text-white transition-all duration-200 cursor-help">
                                        {tech.name}
                                    </div>

                                    {hoveredTech === tech.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute z-50 bottom-full mb-2 w-64 p-3 rounded-lg bg-gray-800 border border-orange-400 text-gray-100 text-sm shadow-xl"
                                        >
                                            <div className="font-semibold text-orange-400 mb-1">{tech.name}</div>
                                            {tech.description}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold text-white font-mono mb-2">
                        {t.hero.testimonials.title}
                    </h3>
                    <p className="text-gray-400 mb-8">{t.hero.testimonials.subtitle}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {feedbacks.map((fb, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-6  rounded-xl border border-gray-800 backdrop-blur-sm text-left group hover:border-orange-400/30 transition-all duration-300"
                            >
                                <div className="text-orange-400 text-4xl mb-2">"</div>
                                <p className="text-gray-300 mb-4 leading-relaxed">"{fb.comment}"</p>
                                <div className="border-t border-gray-800 pt-4">
                                    <p className="font-semibold text-white">{fb.name}</p>
                                    <p className="text-sm text-orange-400 font-mono">{fb.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="mt-16 p-8  rounded-2xl border border-gray-800 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {t.hero.cta.title}
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        {t.hero.cta.description}
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 border border-orange-400 hover:border-orange-600 shadow-lg"
                    >
                        <Terminal size={20} />
                        {t.hero.cta.button}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero