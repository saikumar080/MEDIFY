import { Box, Typography } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import OfferSwiper from "../../components/Swiper/Offer";
import FindBySpecialists from "../../components/Specialists/FindBySpecialists";
import MedicalSwiper from "../../components/Swiper/Medical";

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
      <OfferSwiper />
      <FindBySpecialists />
      <MedicalSwiper />
    </Box>
  );
};

export default HomePage;