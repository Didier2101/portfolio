// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SobreMi from "./components/sobreMi/SobreMi";
import Contacto from "./components/contacto/Contacto";
import Tecnologias from "./components/tecnologias/Tecnologias";
import Proyectos from "./components/proyectos/Proyectos";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;