// data/proyectosData.ts
import { Proyecto } from '../utils/types'; // Importa el tipo Proyecto

export const proyectos: Proyecto[] = [
    {
        titulo: "Sistema Inventario",
        descripcion:
            "Sistema de gestión de inventario con control de productos, integración con MySQL y panel de administración intuitivo.",
        tecnologias: ["React", "Node.js", "Mysql", "Vite", "Aws", "Render", "Material-UI"],
        github: "https://github.com/Didier2101/sistema_inventario_frontend",
        demo: "https://sistema-inventario-frontend-7pg9.onrender.com",
        categoria: "Full Stack",
    },
    {
        titulo: "Control Tiempos ",
        descripcion:
            "Aplicación web para gestionar y supervisar tiempos de entrada y salida, con interfaz intuitiva y almacenamiento local.",
        tecnologias: ["Vite", "React", "Material-UI", "Local Storage"],
        github: "https://github.com/Didier2101/control-tiempos-IM",
        demo: "https://control-tiempos.netlify.app/",
        categoria: "Web App",
    },
    {
        titulo: "Portfolio Website",
        descripcion: "Sitio web personal con blog y portafolio de proyectos",
        tecnologias: ["NextJs", "Material-UI", "MySql", "Vite", "Express", "Axios"],
        github: "https://github.com/Didier2101/portfolio",
        demo: "https://www.ibug.space/",
        categoria: "Frontend",
    },
    {
        titulo: "Poits Solutions",
        descripcion: "Poits Solutions es una empresa dedicada al desarrollo de software, ofreciendo soluciones innovadoras y personalizadas para diversas necesidades tecnológicas.",
        tecnologias: ["NextJs", "TailWind", "MySql", "Prisma"],
        github: "https://github.com/Didier2101/poits_solutions",
        demo: "https://poits-solutions.vercel.app/",
        categoria: "Full Stack",
    },
];