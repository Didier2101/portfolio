import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Theme,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  ContactMail as ContactMailIcon,
  Code as CodeIcon,
  Folder as FolderIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/useTheme";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const menuItems = [
    { text: "Sobre mí", path: "/", Icon: PersonIcon },
    { text: "Contacto", path: "/contacto", Icon: ContactMailIcon },
    { text: "Tecnologías", path: "/tecnologias", Icon: CodeIcon },
    { text: "Proyectos", path: "/proyectos", Icon: FolderIcon },
  ];

  const MotionListItem = motion(ListItem);

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        pt: 2,
        background: (theme) => theme.palette.background.default,
        height: "100%",
      }}
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <MotionListItem
            key={item.text}
            disablePadding
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                borderRadius: 1,
                mx: 1,
                color: "text.primary",
                "&.active": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  "& .MuiListItemIcon-root": {
                    color: "primary.contrastText",
                  },
                },
                "&:hover": {
                  bgcolor: "primary.main",
                  opacity: 0.8,
                  color: "primary.contrastText",
                  "& .MuiListItemIcon-root": {
                    color: "primary.contrastText",
                  },
                },
                "& .MuiListItemIcon-root": {
                  color: "text.primary",
                },
              }}
            >
              <ListItemIcon>
                <item.Icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </MotionListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        userSelect: "none",
        backdropFilter: "blur(8px)",
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(36, 36, 36, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: (theme) => theme.palette.text.primary, // Añadido para asegurar el contraste del texto
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {isMobile && (
            <IconButton
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{
                mr: 2,
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            {"<Dev />."}
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Typography
                    component={NavLink}
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: "text.primary",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: "-4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "primary.main",
                        transition: "width 0.3s ease",
                      },
                      "&.active::after, &:hover::after": {
                        width: "100%",
                      },
                      "&.active": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{ color: "text.primary" }}
            >
              {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "background.default",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </AppBar>
  );
};

export default Header;
