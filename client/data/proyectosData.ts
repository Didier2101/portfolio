// data/proyectosData.ts
import { Proyecto } from '../utils/types'; // Importa el tipo Proyecto

export const proyectos: Proyecto[] = [
    {
        titulo: "Sistema Inventario",
        descripcion:
            "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración",
        tecnologias: ["React", "Node.js", "Mysql", "Vite", "Aws", "Render", "Material-UI"],
        github: "https://github.com/Didier2101/sistema_inventario_frontend",
        demo: "https://sistema-inventario-frontend-7pg9.onrender.com",
        categoria: "Full Stack",
    },
    {
        titulo: "Task Manager App",
        descripcion:
            "Aplicación de gestión de tareas con características de colaboración en tiempo real",
        tecnologias: ["Next.js", "Firebase", "Material-UI", "Socket.io"],
        github: "https://github.com/usuario/taskmanager",
        demo: "https://demo-taskmanager.com",
        categoria: "Web App",
    },
    {
        titulo: "Portfolio Website",
        descripcion: "Sitio web personal con blog y portafolio de proyectos",
        tecnologias: ["React", "Gatsby", "GraphQL", "Tailwind"],
        github: "https://github.com/usuario/portfolio",
        demo: "https://demo-portfolio.com",
        categoria: "Frontend",
    },
];