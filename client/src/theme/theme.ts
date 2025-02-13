// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

// Tema claro
// Tema claro
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#eeeeee", // Más contraste con texto negro
    },
    text: {
      primary: "#212121", // Mejor contraste que #000000
      secondary: "#424242", // Asegurar buen contraste en subtítulos
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
