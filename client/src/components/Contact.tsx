import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
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
            const res = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Error al enviar el mensaje");

            setSuccess("Mensaje enviado con éxito ✅");
            setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
        } catch (err) {
            setError("Error al enviar el mensaje ❌");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="contact" className="bg-white dark:bg-gray-950 py-24 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Hablemos de tu proyecto
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        ¿Listo para llevar tu pyme al siguiente nivel? Escríbenos y te responderemos lo antes posible.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Formulario */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
                    >
                        {success && <p className="text-green-600 dark:text-green-400">{success}</p>}
                        {error && <p className="text-red-600 dark:text-red-400">{error}</p>}

                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                                placeholder="tunombre@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Asunto
                            </label>
                            <input
                                type="text"
                                id="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                                placeholder="Motivo del mensaje"
                            />
                        </div>

                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Mensaje
                            </label>
                            <textarea
                                id="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                                placeholder="Cuéntanos sobre tu proyecto..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-md transition-colors ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-800"}`}
                        >
                            {loading ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    </motion.form>

                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                También puedes contactarnos en:
                            </h3>
                            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <Mail className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                                contacto@ibug.space
                            </p>
                            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300 mt-3">
                                <Phone className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                                +57 3028645014
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
