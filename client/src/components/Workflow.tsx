import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
    {
        title: "1. Idea & Análisis",
        desc: "Escuchamos tu necesidad, analizamos tu negocio y definimos la mejor solución digital para tu pyme.",
        icon: Lightbulb,
    },
    {
        title: "2. Diseño UI/UX",
        desc: "Creamos prototipos e interfaces modernas y usables, enfocadas en mejorar la experiencia del usuario.",
        icon: Palette,
    },
    {
        title: "3. Desarrollo",
        desc: "Construimos tu software de 0 a 100, desde el frontend al backend, asegurando escalabilidad y seguridad.",
        icon: Code,
    },
    {
        title: "4. Entrega & Soporte",
        desc: "Desplegamos tu solución en la nube y ofrecemos soporte continuo para que tu negocio nunca se detenga.",
        icon: Rocket,
    },
];

const Workflow: React.FC = () => {
    return (
        <section id="workflow" className="bg-white dark:bg-gray-950 py-24 border-t border-gray-200 dark:border-gray-800">
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
                        Cómo trabajamos
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        En <span className="font-bold text-blue-900 dark:text-blue-400">!bug</span>{" "}
                        seguimos un proceso claro y eficiente para transformar tus ideas en software real.
                    </p>
                </motion.div>

                {/* Grid de pasos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow"
                        >
                            {/* Icono */}
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900/10 dark:bg-blue-400/10 mb-6">
                                <step.icon className="w-7 h-7 text-blue-900 dark:text-blue-400" />
                            </div>

                            {/* Título */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {step.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
