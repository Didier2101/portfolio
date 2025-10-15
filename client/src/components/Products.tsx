import { motion } from "framer-motion";
import { ShoppingCart, Package, Truck, ExternalLink, Star, Database, Cloud } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";


export default function Productos() {
    const { t } = useLanguage();

    const products = [
        {
            title: t.productos.deliverySystem.title,
            desc: t.productos.deliverySystem.desc,
            icon: <Truck className="w-8 h-8 text-orange-400" />,
            url: "https://plato-facil.vercel.app",
            featured: true,
            cloud: true
        },
        {
            title: t.productos.ecommerce.title,
            desc: t.productos.ecommerce.desc,
            icon: <ShoppingCart className="w-8 h-8 text-orange-400" />,
            url: "#",
            featured: false,
            cloud: true
        },
        {
            title: t.productos.inventory.title,
            desc: t.productos.inventory.desc,
            icon: <Package className="w-8 h-8 text-orange-400" />,
            url: "#",
            featured: false,
            cloud: true
        }
    ];

    return (
        <section id="productos" className="relative bg-black text-gray-400 py-24 overflow-hidden">

            {/* Elementos decorativos */}
            <div className="absolute top-20 left-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;Productos cloud="supabase"&gt;</div>
                <div className="ml-4">&lt;Sistema name="domicilios" storage="cloud" /&gt;</div>
                <div className="ml-4">&lt;Sistema name="ecommerce" storage="cloud" /&gt;</div>
                <div className="ml-4">&lt;Sistema name="inventarios" storage="cloud" /&gt;</div>
                <div>&lt;/Productos&gt;</div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <Cloud className="text-orange-400" size={32} />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                            {t.productos.title}<span className="text-orange-400">_</span>
                        </h2>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t.productos.subtitle}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {t.productos.description}
                    </p>

                    {/* Badge Supabase */}
                    <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-mono">
                        <Database size={16} />
                        <span>Powered by Supabase</span>
                    </div>
                </motion.div>

                {/* Grid de productos */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.a
                            key={i}
                            href={product.url}
                            target={product.url !== "#" ? "_blank" : "_self"}
                            rel={product.url !== "#" ? "noopener noreferrer" : ""}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                            className="group relative backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300 text-left hover:shadow-xl hover:shadow-orange-400/5"
                        >
                            {/* Badge destacado */}
                            {product.featured && (
                                <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                                    <Star size={12} fill="currentColor" />
                                    <span>{t.productos.featured}</span>
                                </div>
                            )}

                            {/* Badge Cloud */}
                            {product.cloud && (
                                <div className="absolute -top-2 left-2 flex items-center gap-1 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    <Cloud size={12} />
                                    <span>Supabase Cloud</span>
                                </div>
                            )}

                            {/* Icono */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-400/10 mb-4 group-hover:bg-orange-400/15 transition-all duration-300">
                                {product.icon}
                            </div>

                            {/* Título */}
                            <h3 className="text-lg font-bold text-white font-mono mb-3">
                                {product.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {product.desc}
                            </p>

                            {/* Cloud Features */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-2">
                                    <Database size={12} />
                                    <span>Supabase Features:</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                                        PostgreSQL
                                    </span>
                                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                                        Auth
                                    </span>
                                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                                        Storage
                                    </span>
                                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                                        Real-time
                                    </span>
                                </div>
                            </div>

                            {/* Link indicator */}
                            <div className="flex items-center gap-2 text-orange-400 text-xs font-mono opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span>{product.url !== "#" ? t.productos.viewDemo : t.productos.comingSoon}</span>
                                {product.url !== "#" && <ExternalLink size={14} />}
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Sección adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-16 text-center"
                >
                    <div className="backdrop-blur-sm rounded-2xl border border-gray-800 p-8 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Database className="text-purple-400" size={24} />
                            <h4 className="text-xl font-bold text-white font-mono">
                                &lt;{t.productos.cloudInfrastructure.title} /&gt;
                            </h4>
                        </div>
                        <p className="text-gray-300 mb-6">
                            {t.productos.cloudInfrastructure.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm text-purple-400 font-mono mb-6">
                            {t.productos.cloudInfrastructure.supabaseFeatures.map((feature: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-purple-500/10 rounded-lg border border-purple-500/20"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 text-sm text-orange-400 font-mono">
                            {t.productos.cloudInfrastructure.businessTypes.map((type: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20"
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}