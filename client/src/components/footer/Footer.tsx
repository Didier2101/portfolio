import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Divider,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GitHubIcon, url: "https://github.com/didier2101", label: "GitHub" },
    {
      icon: LinkedInIcon,
      url: "www.linkedin.com/in/dcg-didierchavez",
      label: "LinkedIn",
    },
    {
      icon: FacebookIcon,
      url: "https://twitter.com/tuusuario",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Tecnologías", path: "/tecnologias" },
    { name: "Contacto", path: "/contacto" },
  ];

  const contactInfo = [
    { icon: EmailIcon, text: "didierchavez2101@gmail.com" },
    { icon: LocationIcon, text: "Bogota, Colombia" },
    { icon: PhoneIcon, text: "+57 302 864 5014" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        userSelect: "none",
        bgcolor: theme.palette.background.paper,
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="div"
          sx={{
            marginBottom: "20px",
            width: "60px",
            display: "flex",
            backgroundColor: "#ed3c37", // Rojo claro
            padding: "2px 8px",
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            color: "#000", // Negro para mejorar contraste
            fontWeight: "bold",
            letterSpacing: "1.5px",
          }}
        >
          <span style={{ color: "black" }}>!</span>BUG
        </Box>

        <Grid container spacing={4}>
          {/* Logo y descripción */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Didier Chávez. 🚀
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Desarrollador Full Stack apasionado por crear experiencias web
                excepcionales y soluciones tecnológicas innovadoras.
              </Typography>
            </motion.div>
          </Grid>

          {/* Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Enlaces Rápidos
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link, index) => (
                  <Typography
                    key={index}
                    component={NavLink}
                    to={link.path}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "&.active": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Contacto
              </Typography>
              <Stack spacing={2}>
                {contactInfo.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <item.icon sx={{ color: "text.secondary", fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Social links y copyright */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            © {currentYear} Desarrollado por Didier Chavez - Todos los derechos
            reservados.
          </Typography>

          <Stack direction="row" spacing={1}>
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <social.icon />
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
