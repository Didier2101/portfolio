// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme";
import Header from "./components/header/Header";
import SobreMi from "./components/sobreMi/SobreMi";
import Contacto from "./components/contacto/Contacto";
import Tecnologias from "./components/tecnologias/Tecnologias";
import Proyectos from "./components/proyectos/Proyectos";
import { useTheme } from "./context/useTheme";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SobreMi />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
        <Footer />
      </Router>
      <WhatsAppButton />
    </MuiThemeProvider>
  );
}

export default App;
