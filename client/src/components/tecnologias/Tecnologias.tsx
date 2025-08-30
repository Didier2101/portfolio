import { motion } from "framer-motion";
import { Laptop, Server, Code, Database } from "lucide-react";
import { techCategories } from "../../../data/techLogos";

// Map de iconos por categoría
const iconMap = {
  Frontend: Laptop,
  Backend: Server,
  "Bases de Datos": Database,
  "Herramientas y DevOps": Code,
};

export default function Tecnologias() {
  return (
    <section className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 pt-28 px-4 pb-24">
      {/* Cabecera */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          STACK TECNOLÓGICO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Un vistazo a las tecnologías que domino y utilizo en mis proyectos.
        </motion.p>
      </div>

      {/* Categorías */}
      <div className="max-w-5xl mx-auto divide-y divide-gray-200 dark:divide-gray-800">
        {techCategories.map((category, index) => {
          const Icon = iconMap[category.title as keyof typeof iconMap] || Laptop;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + i * 0.05 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl flex flex-col items-center justify-center shadow hover:shadow-lg transform hover:-translate-y-2 transition-all"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}

                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
