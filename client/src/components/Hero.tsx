import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Server, Database, Layout, Zap } from "lucide-react";
import { useState } from "react";

const techs = [
    { name: "React / Next.js", icon: Code, description: "Frameworks para construir interfaces web modernas y dinámicas." },
    { name: "Node.js / Express", icon: Server, description: "Entorno de servidor y framework para construir APIs y aplicaciones backend." },
    { name: "MySQL / PostgreSQL / Supabase", icon: Database, description: "Bases de datos relacionales y servicios de backend como servicio para almacenar y gestionar datos." },
    { name: "Tailwind CSS", icon: Layout, description: "Framework de CSS para estilos rápidos, responsivos y altamente personalizables." },
    { name: "Vite / Zustand", icon: Zap, description: "Herramientas de desarrollo rápido y manejo de estado para aplicaciones frontend." },
];

const feedbacks = [
    {
        name: "German gonzalez",
        role: "CEO Nubeware.ai",
        comment: "¡!bug transformó nuestra página web! Rápido, profesional y muy atento a nuestros requerimientos.",
    },
    {
        name: "Jully Mar",
        role: "Gerente Jully-Mar",
        comment: "El sistema de pedidos que desarrollaron ha optimizado nuestras operaciones y mejorado la experiencia de nuestros clientes.",
    },
];

const Hero: React.FC = () => {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    return (
        <section className="relative bg-gradient-to-b from-green-50 to-white dark:from-gray-950 dark:to-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Título y subtítulo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Impulsamos tu Pyme con <span className="text-green-500">Software a la medida</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        En <strong>!bug 🚀</strong> convertimos ideas en soluciones digitales que transforman tu negocio.
                        Nuestro compromiso es crecer contigo, paso a paso. Servicio en Colombia.
                    </p>
                </motion.div>

                {/* Botones de acción */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-8 flex flex-wrap justify-center gap-4"
                >
                    <Link
                        to="/servicios"
                        className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 transition"
                    >
                        Ver Servicios
                    </Link>
                    <Link
                        to="/contacto"
                        className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        Contáctanos
                    </Link>
                </motion.div>

                {/* Bloques: Visión, Misión, Tecnologías */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
                    {/* Visión */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow text-center"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Visión 🌟</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Ser el aliado tecnológico número uno para pymes en Colombia,
                            ofreciendo soluciones innovadoras y accesibles que potencien su crecimiento.
                        </p>
                    </motion.div>

                    {/* Misión */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow text-center"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Misión 🚀</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Desarrollar software a la medida que resuelva problemas reales de negocio,
                            apoyando la digitalización y escalabilidad de pequeñas y medianas empresas.
                        </p>
                    </motion.div>

                    {/* Tecnologías con tooltip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow relative text-center"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tecnologías 💻</h3>
                        <ul className="mt-3 flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300">
                            {techs.map((tech) => (
                                <li
                                    key={tech.name}
                                    className="flex items-center gap-2 relative cursor-pointer"
                                    onMouseEnter={() => setHoveredTech(tech.name)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                    onTouchStart={() => setHoveredTech(tech.name)}
                                    onTouchEnd={() => setHoveredTech(null)}
                                >
                                    <tech.icon className="text-green-500" size={20} />
                                    {tech.name}

                                    {hoveredTech === tech.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute z-50 bottom-full mb-2 w-64 p-4 rounded-md bg-white dark:bg-gray-800 border border-gray-50 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm shadow-lg"
                                        >
                                            {tech.description}
                                        </motion.div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Feedback */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Lo que dicen nuestros clientes 💬</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {feedbacks.map((fb, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow text-left"
                            >
                                <p className="text-gray-700 dark:text-gray-300 mb-4">"{fb.comment}"</p>
                                <p className="font-semibold text-gray-900 dark:text-white">{fb.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{fb.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
