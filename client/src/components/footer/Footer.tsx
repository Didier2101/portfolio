
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Didier2101" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/dcg-didierchavez/" },
  ];

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Tecnologías", path: "/tecnologias" },
    { name: "Contacto", path: "/contacto" },
  ];

  const contactInfo = [
    { icon: Mail, text: "didierchavez2101@gmail.com" },
    { icon: MapPin, text: "Bogotá, Colombia" },
    { icon: Phone, text: "+57 302 864 5014" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold">Didier Chávez 🚀</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Desarrollador Full Stack apasionado por crear experiencias web excepcionales y soluciones tecnológicas innovadoras.
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="flex flex-col space-y-3">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Social y copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-gray-600 dark:text-gray-400">
            © {currentYear} Desarrollado por Didier Chavez - Todos los derechos reservados.
          </span>

          <div className="flex space-x-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
