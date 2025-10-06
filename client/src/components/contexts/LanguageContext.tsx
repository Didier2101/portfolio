// src/contexts/LanguageContext.tsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            workflow: "Proceso",
            demos: "Demostraciones",
            contact: "Contacto",
            startProject: "Iniciar Proyecto",
        },
        hero: {
            title: "Software Development",
            subtitle: "for Pymes",
            description: "Construimos soluciones de software personalizadas que impulsan la eficiencia, innovación y crecimiento para pequeñas y medianas empresas en Colombia.",
            viewServices: "Ver Servicios",
            contactUs: "Contáctanos",
            stats: {
                projects: "Proyectos",
                satisfaction: "Satisfacción",
                support: "Soporte",
                delivery: "Entrega"
            },
            vision: {
                title: "Visión",
                text: "Ser el socio tecnológico líder para las pymes en Colombia, entregando soluciones innovadoras y accesibles que impulsan el crecimiento."
            },
            mission: {
                title: "Misión",
                text: "Desarrollar software personalizado que resuelve problemas empresariales reales, apoyando la transformación digital y escalabilidad de las pymes."
            },
            techStack: "Stack Tecnológico",
            testimonials: {
                title: "Testimonios de Clientes",
                subtitle: "Lo que nuestros socios dicen de nosotros",
                client1: "German Gonzalez",
                role1: "CEO Nubeware.ai",
                feedback1: "Vadya transformó nuestra página web. Rápido, profesional y muy atento a nuestros requerimientos.",
                client2: "Jully Mar",
                role2: "Gerente Jully-Mar",
                feedback2: "El sistema de pedidos que desarrollaron ha optimizado nuestras operaciones y mejorado la experiencia de nuestros clientes."
            },
            cta: {
                title: "¿Listo para construir algo increíble?",
                description: "Hablemos de tu proyecto y creemos una solución personalizada que impulse tu negocio.",
                button: "Inicia Tu Proyecto"
            }
        },
        services: {
            title: "Nuestros Servicios",
            subtitle: "En Vadya te acompañamos de principio a fin en tu transformación digital.",
            backend: {
                title: "Backend Escalable",
                desc: "Diseñamos APIs robustas y seguras con Node.js, Express y bases de datos SQL para que tu sistema crezca contigo."
            },
            frontend: {
                title: "Frontend Moderno",
                desc: "Aplicaciones rápidas, responsivas y atractivas usando React, Next.js y Vite para brindar experiencias únicas."
            },
            design: {
                title: "Diseño UI/UX",
                desc: "Creamos interfaces intuitivas y modernas con Tailwind y un enfoque centrado en la experiencia del usuario."
            },
            infrastructure: {
                title: "Infraestructura & Soporte",
                desc: "Implementamos y administramos la nube, despliegues y mantenimiento para que tu negocio nunca se detenga."
            }
        },
        workflow: {
            title: "Cómo trabajamos",
            subtitle: "En Vadya seguimos un proceso claro y eficiente para transformar tus ideas en software real.",
            step1: {
                title: "1. Idea & Análisis",
                desc: "Escuchamos tu necesidad, analizamos tu negocio y definimos la mejor solución digital para tu pyme."
            },
            step2: {
                title: "2. Diseño UI/UX",
                desc: "Creamos prototipos e interfaces modernas y usables, enfocadas en mejorar la experiencia del usuario."
            },
            step3: {
                title: "3. Desarrollo",
                desc: "Construimos tu software de 0 a 100, desde el frontend al backend, asegurando escalabilidad y seguridad."
            },
            step4: {
                title: "4. Entrega & Soporte",
                desc: "Desplegamos tu solución en la nube y ofrecemos soporte continuo para que tu negocio nunca se detenga."
            }
        },
        demos: {
            title: "Ejemplos de lo que hacemos",
            subtitle: "Mira algunos proyectos y soluciones digitales que hemos desarrollado.",
            nubeware: {
                title: "Nubeware.ai",
                desc: "Sitio web de tecnología y soluciones digitales construido para Nubeware.ai. Incluye presentación de servicios y contacto."
            },
            jullymar: {
                title: "Jully-Mar Sistema de Pedidos",
                desc: "Menú virtual con sistema de domicilios y gestión de órdenes desarrollado para restaurantes, totalmente responsive."
            },
            example: {
                title: "Cliente Ejemplo",
                desc: "Otro proyecto de software a la medida, sin necesidad de imágenes, mostrando funcionalidades clave y beneficios."
            }
        },
        contact: {
            title: "Hablemos de tu proyecto",
            subtitle: "¿Listo para llevar tu pyme al siguiente nivel? Escríbenos y te responderemos lo antes posible.",
            name: "Nombre",
            namePlaceholder: "Tu nombre completo",
            email: "Email",
            emailPlaceholder: "tunombre@email.com",
            subject: "Asunto",
            subjectPlaceholder: "Motivo del mensaje",
            message: "Mensaje",
            messagePlaceholder: "Cuéntanos sobre tu proyecto...",
            submit: "Enviar mensaje",
            sending: "Enviando...",
            success: "Mensaje enviado con éxito ✅",
            error: "Error al enviar el mensaje ❌",
            alsoContact: "También puedes contactarnos en:"
        },
        footer: {
            description: "Soluciones de software personalizadas para pymes en Colombia.",
            quickLinks: "Enlaces Rápidos",
            contact: "Contacto",
            followUs: "Síguenos",
            rights: "Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            workflow: "Workflow",
            demos: "Demos",
            contact: "Contact",
            startProject: "Start Project",
        },
        hero: {
            title: "Software Development",
            subtitle: "for SMEs",
            description: "We build custom software solutions that drive efficiency, innovation, and growth for small and medium businesses in Colombia.",
            viewServices: "View Services",
            contactUs: "Contact Us",
            stats: {
                projects: "Projects",
                satisfaction: "Satisfaction",
                support: "Support",
                delivery: "Delivery"
            },
            vision: {
                title: "Vision",
                text: "To be the leading technology partner for SMEs in Colombia, delivering innovative and accessible solutions that drive growth."
            },
            mission: {
                title: "Mission",
                text: "Develop custom software that solves real business problems, supporting digital transformation and scalability for SMEs."
            },
            techStack: "Tech Stack",
            testimonials: {
                title: "Client Testimonials",
                subtitle: "What our partners say about us",
                client1: "German Gonzalez",
                role1: "CEO Nubeware.ai",
                feedback1: "Vadya transformed our website. Fast, professional and very attentive to our requirements.",
                client2: "Jully Mar",
                role2: "Manager Jully-Mar",
                feedback2: "The ordering system they developed has optimized our operations and improved our customer experience."
            },
            cta: {
                title: "Ready to build something amazing?",
                description: "Let's discuss your project and create a custom solution that drives your business forward.",
                button: "Start Your Project"
            }
        },
        services: {
            title: "Our Services",
            subtitle: "At Vadya, we guide you from start to finish in your digital transformation.",
            backend: {
                title: "Scalable Backend",
                desc: "We design robust and secure APIs with Node.js, Express and SQL databases so your system grows with you."
            },
            frontend: {
                title: "Modern Frontend",
                desc: "Fast, responsive and attractive applications using React, Next.js and Vite to deliver unique experiences."
            },
            design: {
                title: "UI/UX Design",
                desc: "We create intuitive and modern interfaces with Tailwind and a user experience-centered approach."
            },
            infrastructure: {
                title: "Infrastructure & Support",
                desc: "We implement and manage cloud, deployments and maintenance so your business never stops."
            }
        },
        workflow: {
            title: "How we work",
            subtitle: "At Vadya, we follow a clear and efficient process to transform your ideas into real software.",
            step1: {
                title: "1. Idea & Analysis",
                desc: "We listen to your needs, analyze your business and define the best digital solution for your SME."
            },
            step2: {
                title: "2. UI/UX Design",
                desc: "We create modern and usable prototypes and interfaces, focused on improving user experience."
            },
            step3: {
                title: "3. Development",
                desc: "We build your software from 0 to 100, from frontend to backend, ensuring scalability and security."
            },
            step4: {
                title: "4. Delivery & Support",
                desc: "We deploy your solution to the cloud and offer continuous support so your business never stops."
            }
        },
        demos: {
            title: "Examples of what we do",
            subtitle: "Check out some projects and digital solutions we have developed.",
            nubeware: {
                title: "Nubeware.ai",
                desc: "Technology and digital solutions website built for Nubeware.ai. Includes service presentation and contact."
            },
            jullymar: {
                title: "Jully-Mar Ordering System",
                desc: "Virtual menu with delivery system and order management developed for restaurants, fully responsive."
            },
            example: {
                title: "Example Client",
                desc: "Another custom software project, showcasing key features and benefits."
            }
        },
        contact: {
            title: "Let's talk about your project",
            subtitle: "Ready to take your SME to the next level? Write to us and we will respond as soon as possible.",
            name: "Name",
            namePlaceholder: "Your full name",
            email: "Email",
            emailPlaceholder: "yourname@email.com",
            subject: "Subject",
            subjectPlaceholder: "Reason for message",
            message: "Message",
            messagePlaceholder: "Tell us about your project...",
            submit: "Send message",
            sending: "Sending...",
            success: "Message sent successfully ✅",
            error: "Error sending message ❌",
            alsoContact: "You can also contact us at:"
        },
        footer: {
            description: "Custom software solutions for SMEs in Colombia.",
            quickLinks: "Quick Links",
            contact: "Contact",
            followUs: "Follow Us",
            rights: "All rights reserved."
        }
    }
};

type Language = 'es' | 'en';
type TranslationType = typeof translations.es;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    const value = {
        language,
        setLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}