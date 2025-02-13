import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap'; // Importa el plugin correctamente

export default defineConfig({
  plugins: [
    react(), // Plugin de React
    sitemap({ // Configura el plugin de sitemap
      hostname: 'https://www.ibug.space', // Cambia esto por tu dominio
      dynamicRoutes: [
        '/', // Página principal
        '/sobre-mi', // Otras páginas
        '/contacto',
        '/tecnologias',
        '/proyectos',
      ],
    }),
  ],
});