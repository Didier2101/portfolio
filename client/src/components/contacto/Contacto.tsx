import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import axios from "axios";
import { Email, GitHub, LinkedIn, LocationOn, Phone, WhatsApp } from "@mui/icons-material";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://portfolio2-5g8b.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const contactInfo = [
    { icon: Email, title: "Email", value: "didierchavez2101@gmail.com" },
    { icon: Phone, title: "Teléfono", value: "+57 302 864 5014" },
    { icon: WhatsApp, title: "WhatsApp", value: "+57 302 864 5014" },
    { icon: LocationOn, title: "Ubicación", value: "Bogotá, Colombia" },
  ];

  const socialLinks = [
    { icon: GitHub, label: "GitHub", url: "https://github.com/Didier2101" },
    { icon: LinkedIn, label: "LinkedIn", url: "https://www.linkedin.com/in/dcg-didierchavez/" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/send-email", formData);
      if (response.status === 200) {
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Tu mensaje ha sido enviado con éxito.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      }
    } catch {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 pt-28 pb-24">
      {/* Cabecera */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          CONTACTO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          ¿Tienes un proyecto en mente? Contáctame y conversemos sobre tu idea.
        </motion.p>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Información de contacto */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <info.icon className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
              </div>
            </motion.div>
          ))}

          {/* Redes sociales */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-lg bg-blue-700 dark:bg-blue-500 flex items-center justify-center text-white hover:bg-blue-800 dark:hover:bg-blue-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="asunto"
            placeholder="Asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-blue-700 dark:bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-800 dark:hover:bg-blue-400 transition-colors"
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
