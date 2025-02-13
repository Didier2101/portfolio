import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import viteCompression from 'vite-plugin-compression';



export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.ibug.space',
      dynamicRoutes: [
        '/',
        '/sobre-mi',
        '/contacto',
        '/tecnologias',
        '/proyectos',
      ],
    }),
    viteStaticCopy({
      targets: [
        { src: 'public/robots.txt', dest: '' }, // Copia robots.txt a dist/
      ],
    }),
    viteCompression({ // Configura el plugin de compresión
      algorithm: 'gzip', // Usa gzip para comprimir (también puedes usar 'brotliCompress')
      ext: '.gz', // Extensión de los archivos comprimidos
      threshold: 1024, // Comprime solo archivos mayores a 1 KB
    }),
  ],
});
