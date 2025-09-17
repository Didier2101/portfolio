import { motion } from "framer-motion";
import { Cpu, Layout, Palette, Server } from "lucide-react";

const services = [
    {
        title: "Backend Escalable",
        desc: "Diseñamos APIs robustas y seguras con Node.js, Express y bases de datos SQL para que tu sistema crezca contigo.",
        icon: Server,
    },
    {
        title: "Frontend Moderno",
        desc: "Aplicaciones rápidas, responsivas y atractivas usando React, Next.js y Vite para brindar experiencias únicas.",
        icon: Layout,
    },
    {
        title: "Diseño UI/UX",
        desc: "Creamos interfaces intuitivas y modernas con Tailwind y un enfoque centrado en la experiencia del usuario.",
        icon: Palette,
    },
    {
        title: "Infraestructura & Soporte",
        desc: "Implementamos y administramos la nube, despliegues y mantenimiento para que tu negocio nunca se detenga.",
        icon: Cpu,
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-gray-50 dark:bg-gray-950 py-24 border-t border-gray-200 dark:border-gray-800">
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
                        Nuestros Servicios
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        En <span className="font-bold text-blue-900 dark:text-blue-400">!bug</span>
                        {" "}te acompañamos de principio a fin en tu transformación digital.
                    </p>
                </motion.div>

                {/* Grid de servicios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow"
                        >
                            <service.icon className="w-10 h-10 text-blue-900 dark:text-blue-400 mb-6" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
