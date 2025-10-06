// src/App.tsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Demos from "./components/Demos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./components/contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-black text-gray-400 transition-colors duration-500">
        {/* Header */}
        <Header />

        {/* Contenido principal */}
        <main className="flex-1 mt-10">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default App;