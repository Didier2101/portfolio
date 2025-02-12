import { Box, Tooltip, IconButton, useTheme } from "@mui/material";
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const theme = useTheme();
  const whatsappNumber = "+573028645014"; // Reemplaza con tu número
  const message =
    "Hola, soy Didier, desarrollador de software. Déjame tu mensaje y pronto te atenderé.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1000,
      }}
    >
      <Tooltip title="WhatsApp" placement="left">
        <IconButton
          onClick={handleClick}
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            bgcolor: "#25D366", // Color de WhatsApp
            color: "white",
            width: 56,
            height: 56,
            boxShadow: theme.shadows[4],
            "&:hover": {
              bgcolor: "#128C7E", // Color más oscuro al hover
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
