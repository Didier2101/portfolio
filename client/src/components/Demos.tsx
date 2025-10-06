import { motion } from "framer-motion";
import { Laptop, ShoppingCart, Users, Terminal, ExternalLink, Utensils } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";

const Demos: React.FC = () => {
    const { t } = useLanguage();

    const demos = [
        {
            title: t.demos.nubeware.title,
            desc: t.demos.nubeware.desc,
            icon: <Laptop className="w-8 h-8 text-orange-400" />,
            url: "https://nubeware.ai/",
        },
        {
            title: t.demos.jullymar.title,
            desc: t.demos.jullymar.desc,
            icon: <ShoppingCart className="w-8 h-8 text-orange-400" />,
            url: "https://jully-mar.netlify.app/",
        },
        {
            title: "Kavvo Store - Sistema de Domicilios",
            desc: "Plataforma completa de domicilios para restaurantes con registro de ventas, control de inventario, reportes y gestión de pedidos en tiempo real.",
            icon: <Utensils className="w-8 h-8 text-orange-400" />,
            url: "https://kavvo.store/domicilios",
        },
        {
            title: t.demos.example.title,
            desc: t.demos.example.desc,
            icon: <Users className="w-8 h-8 text-orange-400" />,
            url: "#",
        },
    ];

    return (
        <section id="demos" className="relative bg-black text-gray-400 py-24 overflow-hidden">

            {/* Elementos decorativos de código */}
            <div className="absolute bottom-20 right-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;Demos showcase="true"&gt;</div>
                <div className="ml-4">&lt;Project name="nubeware" /&gt;</div>
                <div className="ml-4">&lt;Project name="jullymar" /&gt;</div>
                <div className="ml-4">&lt;Project name="kavvo" /&gt;</div>
                <div className="ml-4">&lt;Project name="example" /&gt;</div>
                <div>&lt;/Demos&gt;</div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                {/* Título - Motion optimizado */}
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
                            Demos<span className="text-orange-400">_</span>
                        </h2>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t.demos.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {t.demos.subtitle}
                    </p>
                </motion.div>

                {/* Grid de demos - Motion optimizado */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {demos.map((demo, i) => (
                        <motion.a
                            key={i}
                            href={demo.url}
                            target={demo.url !== "#" ? "_blank" : "_self"}
                            rel={demo.url !== "#" ? "noopener noreferrer" : ""}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                            className="group relative  backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300 text-left hover:shadow-xl hover:shadow-orange-400/5"
                        >
                            {/* Icono */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-400/10 mb-4 group-hover:bg-orange-400/15 transition-all duration-300">
                                {demo.icon}
                            </div>

                            {/* Título */}
                            <h3 className="text-lg font-bold text-white font-mono mb-3">
                                {demo.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {demo.desc}
                            </p>

                            {/* Link indicator */}
                            <div className="flex items-center gap-2 text-orange-400 text-xs font-mono opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span>{demo.url !== "#" ? "Ver Proyecto" : "Próximamente"}</span>
                                {demo.url !== "#" && <ExternalLink size={14} />}
                            </div>

                            {/* Corner accent - Solo borde */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Sección adicional - Motion optimizado */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-16 text-center"
                >
                    <div className=" backdrop-blur-sm rounded-2xl border border-gray-800 p-8 max-w-4xl mx-auto">
                        <h4 className="text-xl font-bold text-white font-mono mb-4">
                            &lt;Portfolio growing="true" /&gt;
                        </h4>
                        <p className="text-gray-300 mb-6">
                            Cada proyecto es una oportunidad para innovar y crear soluciones
                            que realmente impacten el negocio de nuestros clientes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm text-orange-400 font-mono">
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Web Development
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                E-commerce
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Delivery Apps
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                SaaS Platforms
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Restaurant Systems
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Demos;