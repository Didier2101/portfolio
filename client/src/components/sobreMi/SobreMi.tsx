import { motion } from "framer-motion";
import { Mail, Users, Building2, Cpu } from "lucide-react";
import profilePic from "../../assets/1756408357649.png";
import { useState, useEffect } from "react";
import { calcularExperiencia } from "../../../utils/calcularExperiencia";
import { proyectos } from "../../../data/proyectosData"; // Importa los proyectos
import { Link } from "react-router-dom";

export default function SobreMi() {
  const [experiencia, setExperiencia] = useState({ años: 0, meses: 0 });

  useEffect(() => {
    const fechaInicio = new Date(2025, 0, 1); // Enero 2025
    setExperiencia(calcularExperiencia(fechaInicio));
  }, []);

  const expertise = [
    {
      title: "Arquitectura Backend",
      desc: "Diseño y desarrollo de APIs escalables con Node.js, NextJS y bases de datos relacionales.",
      icon: Cpu,
    },
    {
      title: "Aplicaciones Empresariales",
      desc: "Implementación de soluciones digitales adaptadas a procesos internos y objetivos estratégicos.",
      icon: Building2,
    },
    {
      title: "Colaboración y Liderazgo",
      desc: "Trabajo en equipos multidisciplinarios, aplicando metodologías ágiles y buenas prácticas.",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      {/* HERO */}
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-8 py-40 grid md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Didier Chávez
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Consultor & Desarrollador de Software
            </p>
            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              Especialista en{" "}
              <span className="font-semibold text-blue-800 dark:text-blue-400">
                soluciones empresariales
              </span>{" "}
              orientadas a optimizar procesos, mejorar la eficiencia operativa y
              asegurar la escalabilidad tecnológica en organizaciones de
              cualquier tamaño.
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                to={"/contacto"}
                className="px-6 py-3 rounded-lg bg-blue-900 text-white font-medium flex items-center gap-2 hover:bg-blue-950 transition"
              >
                <Mail className="w-5 h-5" /> Contacto
              </Link>


            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-56 h-56 mx-auto rounded-full overflow-hidden ring-4 ring-gray-200 dark:ring-gray-800 shadow-lg"
          >
            <img
              src={profilePic}
              alt="Foto profesional"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 border-l-4 border-blue-800 dark:border-blue-400 pl-4">
          Perfil Profesional
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Soy un <strong>desarrollador Full Stack</strong> con enfoque en
              proyectos de alto impacto tecnológico. Mi objetivo es apoyar a
              empresas y organizaciones en la{" "}
              <span className="font-semibold">transformación digital</span>,
              mediante sistemas seguros, estables y alineados con sus metas
              estratégicas.
            </p>
            <p>
              Mi experiencia se centra en{" "}
              <strong>Node.js, NestJS, React y bases de datos SQL</strong>,
              complementado con metodologías ágiles y un enfoque orientado a
              resultados.
            </p>
          </div>

          {/* METRICAS */}
          <div className="grid gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-400">
                {proyectos.length}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Proyectos empresariales
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-400">
                {experiencia.años > 0 ? `${experiencia.años} año(s)` : ""}{" "}
                {experiencia.meses} meses
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Experiencia profesional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ESPECIALIZACIÓN */}
      <section className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 border-l-4 border-blue-800 dark:border-blue-400 pl-4">
            Áreas de Especialización
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <item.icon className="w-10 h-10 text-blue-900 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
