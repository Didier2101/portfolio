import { motion } from "framer-motion";
import { Mail, Phone, Terminal, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./contexts/LanguageContext";

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            // Usando tu backend actual de ibug
            const res = await fetch("https://ibug-backend.onrender.com/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Error al enviar el mensaje");

            setSuccess(t.contact.success);
            setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
        } catch (err) {
            setError(t.contact.error);
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="relative bg-black text-gray-400 py-24 overflow-hidden ">

            {/* Elementos decorativos de código */}
            <div className="absolute top-20 left-10 opacity-10 text-orange-400 font-mono text-sm">
                <div>&lt;ContactForm&gt;</div>
                <div className="ml-4">&lt;Input type="text" /&gt;</div>
                <div className="ml-4">&lt;Input type="email" /&gt;</div>
                <div className="ml-4">&lt;Textarea rows="5" /&gt;</div>
                <div className="ml-4">&lt;Button submit /&gt;</div>
                <div>&lt;/ContactForm&gt;</div>
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
                            Contact<span className="text-orange-400">_</span>
                        </h2>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t.contact.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Formulario */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all duration-300"
                    >
                        {/* Estados del formulario */}
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-green-400/10 border border-green-400/30 rounded-xl text-green-400 font-mono text-sm"
                            >
                                {success}
                            </motion.div>
                        )}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-red-400/10 border border-red-400/30 rounded-xl text-red-400 font-mono text-sm"
                            >
                                {error}
                            </motion.div>
                        )}

                        {/* Campo Nombre */}
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 font-mono mb-2">
                                {t.contact.name}
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700  text-gray-100 placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300 font-mono"
                                placeholder={t.contact.namePlaceholder}
                            />
                        </div>

                        {/* Campo Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-mono mb-2">
                                {t.contact.email}
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700  text-gray-100 placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300 font-mono"
                                placeholder={t.contact.emailPlaceholder}
                            />
                        </div>

                        {/* Campo Asunto */}
                        <div>
                            <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 font-mono mb-2">
                                {t.contact.subject}
                            </label>
                            <input
                                type="text"
                                id="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700  text-gray-100 placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300 font-mono"
                                placeholder={t.contact.subjectPlaceholder}
                            />
                        </div>

                        {/* Campo Mensaje */}
                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 font-mono mb-2">
                                {t.contact.message}
                            </label>
                            <textarea
                                id="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-700  text-gray-100 placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300 font-mono resize-none"
                                placeholder={t.contact.messagePlaceholder}
                            />
                        </div>

                        {/* Botón de envío */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-6 py-4 rounded-xl font-mono font-semibold border transition-all duration-300 flex items-center justify-center gap-2 ${loading
                                ? "bg-orange-400/30 border-orange-400/30 text-orange-300 cursor-not-allowed"
                                : "bg-orange-400 border-orange-400 text-white hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-400/25"
                                }`}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    {t.contact.sending}
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    {t.contact.submit}
                                </>
                            )}
                        </button>
                    </motion.form>

                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div className="0 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-400/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white font-mono mb-6">
                                &lt;ContactInfo&gt;
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {t.contact.alsoContact}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all duration-300">
                                    <Mail className="w-5 h-5 text-orange-400" />
                                    <div>
                                        <p className="text-white font-mono text-sm">Email</p>
                                        <p className="text-gray-300">luminisaurora@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4  rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all duration-300">
                                    <Phone className="w-5 h-5 text-orange-400" />
                                    <div>
                                        <p className="text-white font-mono text-sm">Phone</p>
                                        <p className="text-gray-300">+57 3028645014</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <p className="text-gray-400 text-sm font-mono">
                                    &lt;ResponseTime fast="true" /&gt;
                                </p>
                                <p className="text-gray-300 text-sm mt-2">
                                    Te responderemos en menos de 24 horas
                                </p>
                            </div>
                        </div>

                        {/* Sección adicional */}
                        <div className=" rounded-2xl border border-gray-800 p-6">
                            <h4 className="text-lg font-bold text-white font-mono mb-3">
                                &lt;ReadyToStart /&gt;
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                No dudes en contactarnos para discutir tu proyecto. Estamos aquí
                                para ayudarte a transformar tus ideas en realidad.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;