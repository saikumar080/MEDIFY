import { Box } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      <HeroSection />
    </Box>
  );
};

export default HomePage;