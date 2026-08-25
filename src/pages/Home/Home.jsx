import { Box } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import OfferSwiper from "../../components/Swiper/Offer";
import FindBySpecialists from "../../components/Specialists/FindBySpecialists";
import MedicalSwiper from "../../components/Swiper/Medical";
import PatientCaring from "../../components/PatientCaring/PatientCaring";

const HomePage = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",

        // Prevent horizontal scrolling caused by Swipers/images
        overflowX: "hidden",

        // Smooth box sizing
        "& *": {
          boxSizing: "border-box",
        },
      }}
    >
      <Navbar />

      <HeroSection />

      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        <OfferSwiper />
      </Box>

      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        <FindBySpecialists />
      </Box>

      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        <MedicalSwiper />
      </Box>

      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 5, md: 6 },
        }}
      >
        <PatientCaring />
      </Box>
    </Box>
  );
};

export default HomePage;