import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
  Avatar,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  Facebook,
  GitHub,
  LinkedIn,
  Instagram,
  Mail,
  Download,
} from "@mui/icons-material";
import { motion } from "framer-motion";
// Opción 3: Usando import (añadir al inicio del archivo)
import perfilImage from "../../../public/perfil.webp";
import { proyectos } from "../../../data/proyectosData";
import { calcularExperiencia } from "../../../utils/calcularExperiencia"; // Importa la función

const SobreMi = () => {
  const theme = useTheme();
  // Fecha de inicio de experiencia
  const fechaInicioExperiencia = new Date(2025, 0, 1); // 1 de enero de 2025

  // Obtener años y meses de experiencia
  const { años, meses } = calcularExperiencia(fechaInicioExperiencia);

  const technologies = [
    "Html",
    "Css",
    "JavaScript",
    "Vite",
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Material-UI",
    "Tailwind CSS",
    "MySql",
    "Prisma",
    "Express",
    "Git",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleMailClick = () => {
    const email = "didierchavez2101@gmail.com";
    const subject = "Estoy interesado en tus servicios";
    const body = "Hola, quiero contactarte.";

    try {
      // Crear URL de Gmail con parámetros
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Abrir Gmail en una nueva pestaña
      window.open(gmailUrl, "_blank");
    } catch (error) {
      console.error("Error al abrir Gmail:", error);
      // Fallback al mailto tradicional
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
  };

  const handleDownloadCV = () => {
    try {
      // ID extraído de tu enlace de Google Drive
      const fileId = "1AWo651hQwMQMEwI2o02jcXGRpmowQZhw";

      // URL de descarga directa de Google Drive
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

      // Abre la URL en una nueva pestaña
      window.open(downloadUrl, "_blank");

      // También podrías usar este método alternativo que fuerza la descarga
      // const directUrl = `https://drive.google.com/file/d/${fileId}/view`;
      // window.open(directUrl, '_blank');
    } catch (error) {
      console.error("Error al descargar el CV:", error);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        userSelect: "none",
        minHeight: "100vh",
        pt: { xs: "58px", sm: "65px" }, // Ajuste para el header fijo
        bgcolor: "background.default",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: 8,
          pb: 12,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(30, 30, 30, 0.8)"
              : "rgba(245, 245, 245, 0.8)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="space-between">
            <Grid item xs={12} md={6}>
              <motion.div {...fadeIn}>
                <Stack spacing={2}>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: 4,
                      color: "primary.main",
                      fontWeight: 600,
                    }}
                  >
                    DESARROLLADOR FULL STACK
                  </Typography>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{ fontWeight: "bold" }}
                  >
                    Hola, soy
                    <Box component="span" sx={{ color: "primary.main" }}>
                      {" "}
                      Didier
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    Transformo ideas en experiencias digitales excepcionales,
                    combinando diseño intuitivo con código limpio y eficiente.
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Mail />}
                      sx={{ borderRadius: 2 }}
                      onClick={handleMailClick}
                    >
                      Contáctame
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Download />}
                      sx={{ borderRadius: 2 }}
                      onClick={handleDownloadCV}
                    >
                      Descargar CV
                    </Button>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    border: "4px solid",
                    borderColor: "primary.main",
                    // boxShadow: theme.shadows[10],
                  }}
                  alt="Didier Chavez"
                  src={perfilImage}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
                Sobre Mí
              </Typography>
              <Typography
                paragraph
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Soy un{" "}
                <strong>Tecnólogo en Análisis y Desarrollo de Software</strong>,
                graduado del SENA, con una sólida formación en creación de
                soluciones tecnológicas innovadoras. Desde que descubrí mi
                pasión por la programación, he dedicado mi tiempo a dominar las
                herramientas y tecnologías que me permiten transformar ideas en
                aplicaciones funcionales y escalables.
              </Typography>
              <Typography
                paragraph
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Mi experiencia abarca desde el desarrollo de aplicaciones web
                modernas hasta la implementación de sistemas robustos y
                eficientes. Me apasiona trabajar en equipo, resolver problemas
                complejos y aprender constantemente para mantenerme al día con
                las últimas tendencias tecnológicas.
              </Typography>
              <Typography
                paragraph
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Creo firmemente en el poder del código para mejorar la vida de
                las personas, y es por eso que me esfuerzo por crear soluciones
                que no solo sean funcionales, sino también intuitivas y
                centradas en el usuario. Mi objetivo es seguir creciendo como
                profesional y contribuir a proyectos que generen un impacto
                positivo en el mundo.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="h4"
                        color="primary.main"
                        sx={{ fontWeight: "bold" }}
                      >
                        {proyectos.length}+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Proyectos Completados
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="h4"
                        color="primary.main"
                        sx={{ fontWeight: "bold" }}
                      >
                        {años > 0 ? `${años} año${años > 1 ? "s" : ""}` : ""}{" "}
                        {meses > 0
                          ? `${meses} mes${meses > 1 ? "es" : ""}`
                          : ""}{" "}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Tiempo de Experiencia 🚀
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="show"
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Tecnologías que uso
              </Typography>
              <Box sx={{ mt: 3 }}>
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    icon={<CodeIcon />}
                    sx={{
                      m: 0.5,
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.05)",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      },
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ mt: 6 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Encuéntrame en
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  {[
                    { icon: GitHub, url: "https://github.com/Didier2101" },
                    {
                      icon: LinkedIn,
                      url: "www.linkedin.com/in/dcg-didierchavez",
                    },
                    { icon: Facebook, url: "https://www.facebook.com/" },
                    {
                      icon: Instagram,
                      url: "https://www.instagram.com/didier_dcg/",
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          "&:hover": {
                            bgcolor: "primary.dark",
                          },
                        }}
                      >
                        <social.icon />
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SobreMi;
