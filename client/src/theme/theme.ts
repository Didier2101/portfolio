// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";


// Tema claro
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00695c", // Aquí cambiamos el color principal a teal-800
      light: "#439889", // Versión más clara del teal
      dark: "#003d33", // Versión más oscura del teal
    },
    background: {
      default: "#ffffff",
      paper: "#f1f1f1", // Más contraste con texto negro
    },
    text: {
      primary: "#424242",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

// Tema oscuro
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e1e1e", // Más oscuro para mejor contraste
      paper: "#2a2a2a", // Evitar gris medio que cause bajo contraste
    },
    text: {
      primary: "#ffffff", // Evita usar rgba con opacidad baja
      secondary: "#b0b0b0", // Suficiente contraste para subtítulos
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});
