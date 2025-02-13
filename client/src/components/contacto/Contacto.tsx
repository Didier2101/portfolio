import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Stack,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import {
  Email,
  Phone,
  WhatsApp,
  LocationOn,
  Send,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contacto() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const contactInfo = [
    {
      icon: Email,
      title: "Email",
      value: "didierchavez2101@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 302 64 5014",
    },
    {
      icon: WhatsApp,
      title: "WhatsApp",
      value: "+57 302 64 5014",
    },
    { icon: LocationOn, title: "Ubicación", value: "Bogota, Colombia" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://portfolio2-5g8b.onrender.com/send-email",
        formData
      );
      // Mostrar mensaje de éxito con SweetAlert2
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Tu mensaje ha sido enviado con éxito.",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: theme.palette.primary.main,
      });

      // Limpiar el formulario después de enviar
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } catch {
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: theme.palette.error.main,
      });
    }
  };

  return (
    <Box
      component="main"
      sx={{
        userSelect: "none",
        minHeight: "100vh",
        pt: { xs: "58px", sm: "65px" },
        pb: 8,
        bgcolor: "background.default",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(30, 30, 30, 0.8)"
              : "rgba(245, 245, 245, 0.8)",
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
              PONTE EN CONTACTO
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              ¿Tienes un proyecto en mente?
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Estoy disponible para freelance. Contáctame y conversemos sobre tu
              proyecto.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Información de Contacto
              </Typography>
              <Typography color="text.secondary" paragraph>
                Elige el medio que prefieras para comunicarte conmigo. Estaré
                encantado de responderte.
              </Typography>

              <Stack spacing={3} sx={{ mt: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(0, 0, 0, 0.02)",
                        "&:hover": {
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "rgba(255, 255, 255, 0.08)"
                              : "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <CardContent
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <info.icon color="primary" sx={{ fontSize: 24 }} />
                        <Box>
                          <Typography variant="subtitle2" color="primary">
                            {info.title}
                          </Typography>
                          <Typography
                            component="a"
                            sx={{
                              color: "text.primary",
                              textDecoration: "none",
                              "&:hover": { color: "primary.main" },
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                {[GitHub, LinkedIn, WhatsApp].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": { bgcolor: "primary.dark" },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.02)",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Envíame un mensaje
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Mensaje"
                        name="mensaje"
                        multiline
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      type="submit"
                      startIcon={<Send />}
                      sx={{
                        mt: 3,
                        py: 1.5,
                        borderRadius: 2,
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
