import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import OfferSwiper from "../../components/Swiper/Offer";
import FindBySpecialists from "../../components/Specialists/FindBySpecialists";
import MedicalSwiper from "../../components/Swiper/Medical";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import Blog from "../../components/Blog&News/Blog";
import OurFamilies from "../../components/HospitalCard/HospitalCard";
import FAQ from "../../components/FAQ/Faq";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Footer from "../../components/Footer/Footer";

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
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Offers */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        <OfferSwiper />
      </Box>

      {/* Find By Specialists */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        <FindBySpecialists />
      </Box>

      {/* Medical Centers */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
        }}
      >
        <MedicalSwiper />
      </Box>

      {/* Patient Caring */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 5, md: 6 },
          bgcolor: "primary.light",
        }}
      >
        <PatientCaring />
      </Box>

      {/* Blog */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 5, md: 6 },
        }}
      >
        <Blog />
      </Box>

      {/* Our Families */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 5, md: 6 },
          bgcolor: "primary.light",
        }}
      >
        <OurFamilies />
      </Box>

      {/* FAQ */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 5, md: 6 },
        }}
      >
        <FAQ />
      </Box>
        <DownloadApp />
        <Footer />
      {/* Floating Heart Button */}
      {/* <IconButton
        aria-label="favorite"
        sx={{
          position: "fixed",
          right: { xs: 15, md: 30 },
          bottom: { xs: 15, md: 30 },

          width: { xs: 50, md: 55 },
          height: { xs: 50, md: 55 },

          borderRadius: "50%",
          backgroundColor: "#ffffff",

          color: "#ff4d6d",

          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",

          zIndex: 1000,

          transition: "all 0.2s ease",

          "&:hover": {
            backgroundColor: "#ffffff",
            transform: "scale(1.08)",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <FavoriteIcon
          sx={{
            fontSize: { xs: 24, md: 28 },
          }}
        />
      </IconButton> */}
    </Box>
  );
};

export default HomePage;