import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Storage as StorageIcon,
  Web as WebIcon,
  BuildCircle as BuildIcon,
  DataObject as DataIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Tecnologias() {
  const theme = useTheme();

  const categories = [
    {
      title: "Frontend",
      icon: WebIcon,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Material-UI", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Styled Components", level: 75 },
        { name: "Zustand", level: 70 },
        { name: "SASS/SCSS", level: 78 },
        { name: "Vite", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: StorageIcon,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 85 },
        { name: "JWT Authentication", level: 85 },
        { name: "Prisma ORM", level: 80 },
        { name: "Sequelize ORM", level: 75 },
      ],
    },
    {
      title: "Bases de Datos",
      icon: StorageIcon,
      skills: [{ name: "MySQL", level: 90 }],
    },
    {
      title: "Herramientas y DevOps",
      icon: BuildIcon,
      skills: [
        { name: "Git", level: 88 },
        { name: "Docker", level: 80 },
        { name: "GitHub", level: 75 },
        { name: "Jest", level: 80 },
        { name: "ESLint", level: 85 },
        { name: "AWS (RDS)", level: 70 },
      ],
    },
  ];

  const otherTechnologies = ["Vercel", "Render", "Netlify", "Google Cloud"];

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
              STACK TECNOLÓGICO
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Mis Habilidades
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Un vistazo a las tecnologías que domino y utilizo en mis proyectos
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {categories.map((category, categoryIndex) => (
            <Grid item xs={12} md={4} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <category.icon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Stack spacing={3}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                      >
                        <Box sx={{ mb: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              mb: 1,
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              "& .MuiLinearProgress-bar": {
                                borderRadius: 3,
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Other Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mt: 4,
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Otras Tecnologías
            </Typography>
            <Box sx={{ mt: 2 }}>
              {otherTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ display: "inline-block", margin: "4px" }}
                >
                  <Chip
                    icon={<DataIcon />}
                    label={tech}
                    sx={{
                      bgcolor: theme.palette.background.paper,
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
