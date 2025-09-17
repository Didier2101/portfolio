import { motion } from "framer-motion";

import { Laptop, ShoppingCart, Users } from "lucide-react";

const demos = [
    {
        title: "Nubeware.ai",
        desc: "Sitio web de tecnología y soluciones digitales construido para Nubeware.ai. Incluye presentación de servicios y contacto.",
        icon: <Laptop className="w-10 h-10 text-green-500" />,
        url: "https://nubeware.ai/",
    },
    {
        title: "Jully-Mar Sistema de Pedidos",
        desc: "Menú virtual con sistema de domicilios y gestión de órdenes desarrollado para restaurantes, totalmente responsive.",
        icon: <ShoppingCart className="w-10 h-10 text-blue-500" />,
        url: "https://jully-mar.netlify.app/",
    },
    {
        title: "Cliente Ejemplo",
        desc: "Otro proyecto de software a la medida, sin necesidad de imágenes, mostrando funcionalidades clave y beneficios.",
        icon: <Users className="w-10 h-10 text-purple-500" />,
        url: "#",
    },
];

const Demos: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-24 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Ejemplos de lo que hacemos
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Mira algunos <span className="font-bold text-green-500">proyectos</span> y soluciones digitales que hemos desarrollado.
                    </p>
                </motion.div>

                {/* Grid de demos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {demos.map((demo, i) => (
                        <motion.a
                            key={i}
                            href={demo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center"
                        >
                            <div className="mb-4">{demo.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{demo.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{demo.desc}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Demos;
