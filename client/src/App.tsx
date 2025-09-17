import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Demos from "./components/Demos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors ">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-1 mt-10">
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
      <WhatsAppButton />
    </div>
  );
};

export default App;
