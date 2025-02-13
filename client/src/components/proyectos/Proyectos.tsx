import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  useTheme,
} from "@mui/material";
import {
  Folder as FolderIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { proyectos } from "../../../data/proyectosData"; // Importa el array de proyectos

export default function Proyectos() {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        userSelect: "none",
        minHeight: "100vh",
        pt: { xs: "58px", sm: "65px" },
        pb: 8,
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              display="block"
              textAlign="center"
              sx={{
                color: "primary.main",
                letterSpacing: 4,
                mb: 2,
              }}
            >
              PORTAFOLIO
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Mis Proyectos
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Una selección de mis trabajos más destacados y proyectos
              personales
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {proyectos.map((proyecto, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <FolderIcon color="primary" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {proyecto.titulo}
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                      {proyecto.descripcion}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {proyecto.tecnologias.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                        >
                          <Chip
                            size="small"
                            icon={<CodeIcon />}
                            label={tech}
                            sx={{
                              bgcolor:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 255, 255, 0.05)"
                                  : "rgba(0, 0, 0, 0.05)",
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                      {proyecto.categoria}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, mt: "auto", pt: 2 }}>
                      <Chip
                        clickable
                        component="a"
                        href={proyecto.github}
                        target="_blank"
                        icon={<GitHubIcon />}
                        label="GitHub"
                        sx={{
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      />
                      <Chip
                        clickable
                        component="a"
                        href={proyecto.demo}
                        target="_blank"
                        icon={<LaunchIcon />}
                        label="Demo"
                        sx={{
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
