// src/components/Services.tsx
import { motion } from "framer-motion";
import { Cpu, Layout, Palette, Server, Terminal } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";

const Services: React.FC = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.backend.title,
            desc: t.services.backend.desc,
            icon: Server,
        },
        {
            title: t.services.frontend.title,
            desc: t.services.frontend.desc,
            icon: Layout,
        },
        {
            title: t.services.design.title,
            desc: t.services.design.desc,
            icon: Palette,
        },
        {
            title: t.services.infrastructure.title,
            desc: t.services.infrastructure.desc,
            icon: Cpu,
        },
    ];

    return (
        <section id="services" className="relative bg-black text-gray-400 py-24 overflow-hidden ">


            {/* Elementos decorativos de código */}
            <div className="absolute top-20 left-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;Services section="true"&gt;</div>
                <div className="ml-4">&lt;Backend /&gt;</div>
                <div className="ml-4">&lt;Frontend /&gt;</div>
                <div className="ml-4">&lt;Design /&gt;</div>
                <div className="ml-4">&lt;Infrastructure /&gt;</div>
                <div>&lt;/Services&gt;</div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6 z-10">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <Terminal className="text-orange-400" size={32} />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                            Services<span className="text-orange-400">_</span>
                        </h2>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t.services.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </motion.div>

                {/* Grid de servicios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                            className="relative group"
                        >
                            {/* Card del servicio */}
                            <div className="relative backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full group-hover:border-orange-400/50 transition-all duration-300">
                                {/* Icono */}
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-400/10 mb-6 group-hover:bg-orange-400/20 transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-orange-400" />
                                </div>

                                {/* Título */}
                                <h3 className="text-xl font-bold text-white font-mono mb-4">
                                    {service.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* Indicador de hover */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Sección adicional de tecnologías */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-20 text-center"
                >
                    <div className=" rounded-2xl border border-gray-800 p-8 max-w-4xl mx-auto">
                        <h4 className="text-xl font-bold text-white font-mono mb-4">
                            &lt;TechStack modern="true" /&gt;
                        </h4>
                        <p className="text-gray-300 mb-6">
                            Utilizamos las mejores tecnologías del mercado para garantizar
                            aplicaciones rápidas, seguras y escalables.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm text-orange-400 font-mono">
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                React/Next.js
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Node.js/Express
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                PostgreSQL
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Tailwind CSS
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                AWS/Vercel
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;