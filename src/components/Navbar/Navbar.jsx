import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../assests/images/medify-Logo.png";

const navItems = [
  { title: "Find Doctors", path: "/" },
  { title: "Hospitals", path: "/" },
  { title: "Medicines", path: "/" },
  { title: "Software for Providers", path: "/" },
  { title: "Facilities", path: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}

      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          textAlign: "center",
          py: 1,
        }}
      >
        <Typography variant="body2" sx={{color: "primary.contrastText", fontWeight: 500}}>
          The health and well-being of our patients and their health care team
          will always be our priority.
        </Typography>
      </Box>

      {/* Navbar */}

      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={{
          borderRadius:0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 80,
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}

            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Medify"
                sx={{
                  width: {
                    xs: 105,
                    sm: 115,
                    md: 130,
                  },
                  transition: "transform .3s",

                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>

            {/* Desktop Menu */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  to={item.path}
                  disableRipple
                  color="secondary"
                  sx={{
                      color: "secondary.main",
                      fontWeight: 500,
                      fontSize: 14,
                      px: 0,
                      minWidth: "auto",
                      textTransform: "none",

                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                      },
                    }}
                >
                  {item.title}
                </Button>
              ))}

              <Button
                component={Link}
                to="/my-bookings"
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: "none",

                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
              >
                My Bookings
              </Button>
            </Box>

            {/* Mobile Menu */}

         <IconButton
                color="secondary"
                size="large"
                onClick={() => setOpen(true)}
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <MenuIcon />
          </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
         sx={{ width: { xs: 250, sm: 280 } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography variant="h6">
              Medify
            </Typography>

            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.title}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}

            <Box p={2}>
              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/my-bookings"
                onClick={() => setOpen(false)}
              >
                My Bookings
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;