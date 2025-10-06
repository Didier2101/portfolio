import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, Terminal } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";

const Workflow: React.FC = () => {
    const { t } = useLanguage();

    const steps = [
        {
            title: t.workflow.step1.title,
            desc: t.workflow.step1.desc,
            icon: Lightbulb,
        },
        {
            title: t.workflow.step2.title,
            desc: t.workflow.step2.desc,
            icon: Palette,
        },
        {
            title: t.workflow.step3.title,
            desc: t.workflow.step3.desc,
            icon: Code,
        },
        {
            title: t.workflow.step4.title,
            desc: t.workflow.step4.desc,
            icon: Rocket,
        },
    ];

    return (
        <section id="workflow" className="relative bg-black text-gray-400 py-24 overflow-hidden ">


            {/* Elementos decorativos de código */}
            <div className="absolute top-20 right-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;Workflow process="efficient"&gt;</div>
                <div className="ml-4">&lt;Step number="1" /&gt;</div>
                <div className="ml-4">&lt;Step number="2" /&gt;</div>
                <div className="ml-4">&lt;Step number="3" /&gt;</div>
                <div className="ml-4">&lt;Step number="4" /&gt;</div>
                <div>&lt;/Workflow&gt;</div>
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
                            Workflow<span className="text-orange-400">_</span>
                        </h2>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t.workflow.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {t.workflow.subtitle}
                    </p>
                </motion.div>

                {/* Grid de pasos - diseño similar al Hero */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                            className="relative group"
                        >
                            {/* Línea conectiva entre pasos */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-14 -right-4 w-8 h-0.5 bg-orange-400/30 z-0 group-hover:bg-orange-400/60 transition-all duration-300" />
                            )}

                            {/* Card del paso */}
                            <div className="relative  backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full group-hover:border-orange-400/50 group-hover:shadow-lg group-hover:shadow-orange-400/10 transition-all duration-300 z-10">
                                {/* Número del paso */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-sm font-mono">
                                        {i + 1}
                                    </span>
                                </div>

                                {/* Icono */}
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-400/10 mb-6 group-hover:bg-orange-400/20 transition-all duration-300">
                                    <step.icon className="w-7 h-7 text-orange-400" />
                                </div>

                                {/* Título */}
                                <h3 className="text-xl font-bold text-white font-mono mb-4">
                                    {step.title.split(' ').slice(1).join(' ')}
                                </h3>

                                {/* Descripción */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sección adicional de proceso */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-20 text-center"
                >
                    <div className=" rounded-2xl border border-gray-800 p-8 max-w-4xl mx-auto">
                        <h4 className="text-xl font-bold text-white font-mono mb-4">
                            &lt;Process optimized="true" /&gt;
                        </h4>
                        <p className="text-gray-300 mb-6">
                            Cada proyecto sigue nuestra metodología probada para garantizar calidad,
                            eficiencia y resultados excepcionales.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-400 font-mono">
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Agile Methodology
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Continuous Delivery
                            </span>
                            <span className="px-3 py-1 bg-orange-400/10 rounded-lg border border-orange-400/20">
                                Quality Assurance
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Workflow;