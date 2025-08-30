import { motion } from "framer-motion";
import { Github, ExternalLink, Briefcase, Globe, Server, Building2 } from "lucide-react";
import { proyectos } from "../../../data/proyectosData";

const icons = [Briefcase, Server, Globe, Building2]; // Rotación de iconos empresariales

export default function Proyectos() {
  return (
    <section className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 pt-28 pb-24 px-4">
      {/* Cabecera empresarial */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Soluciones Desarrolladas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Proyectos implementados con enfoque en eficiencia, escalabilidad y
          valor empresarial.
        </motion.p>
      </div>

      {/* Lista de proyectos */}
      <div className="max-w-5xl mx-auto divide-y divide-gray-200 dark:divide-gray-800">
        {proyectos.map((proyecto, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={proyecto.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-12 grid md:grid-cols-3 gap-8 items-start"
            >
              {/* Icono + título */}
              <div className="flex items-start gap-4 md:col-span-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {proyecto.categoria}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-2">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
