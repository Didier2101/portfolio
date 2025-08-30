interface Technology {
    name: string;
    logo: string;
}

interface TechCategory {
    title: string;
    icon: string;
    skills: Technology[];
}

// Tecnologías actualizadas
export const techCategories: TechCategory[] = [
    {
        title: "Frontend",
        icon: "WebIcon",
        skills: [
            { name: "React", logo: "/logos/react-2.svg" },
            { name: "Next.js", logo: "/logos/next-js.svg" },
            { name: "TypeScript", logo: "/logos/typescript.svg" },
            { name: "JavaScript", logo: "/logos/logo-javascript.svg" },
            { name: "Material-UI", logo: "/logos/material-ui-1.svg" },
            { name: "Tailwind CSS", logo: "/logos/tailwind-css-2.svg" },
            { name: "Vite", logo: "/logos/vitejs.svg" },
            { name: "Zustand", logo: "/logos/zustand.png" },
            { name: "SEO", logo: "/logos/seo-icon.png" } // Nueva tecnología SEO
        ]
    },
    {
        title: "Backend",
        icon: "StorageIcon",
        skills: [
            { name: "Node.js", logo: "/logos/nodejs-icon.svg" },
            { name: "Express.js", logo: "/logos/express-109.svg" },
            { name: "JWT", logo: "/logos/jwt-3.svg" },
            { name: "Prisma", logo: "/logos/prisma-3.svg" },
            { name: "CI/CD", logo: "/logos/cicd.png" } // Nueva tecnología CI/CD
        ]
    },
    {
        title: "Bases de Datos",
        icon: "StorageIcon",
        skills: [
            { name: "MySQL", logo: "/logos/mysql-logo-pure.svg" },
            { name: "MongoDB", logo: "/logos/mongodb-icon-1.svg" }
        ]
    },
    {
        title: "Herramientas y DevOps",
        icon: "BuildIcon",
        skills: [
            { name: "Git", logo: "/logos/git-bash.svg" },
            { name: "GitHub", logo: "/logos/github-icon-2.svg" },
            { name: "Docker", logo: "/logos/docker-4.svg" }
        ]
    }
];
