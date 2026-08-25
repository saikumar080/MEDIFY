import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import CategoryCard from "../CategoryCard/CategoryCard";

import dentistry from "../../assests/icons/Drugstore.png";
import PrimaryCare from "../../assests/icons/Stethoscope.png";
import cardiology from "../../assests/icons/Heart Rate.png";
import mriResonance from "../../assests/icons/Heart Rate Monitor.png";
import piscologist from "../../assests/icons/Immune.png";
import labIcon from "../../assests/icons/labs-icon.png";
import xRayIcon from "../../assests/icons/X-Ray.png";
import bloodTest from "../../assests/icons/Blood Sample.png";

const FindBySpecialists = () => {
  const [showAll, setShowAll] = useState(false);

  const specialists = [
    {
      icon: dentistry,
      title: "Dentistry",
    },
    {
      icon: PrimaryCare,
      title: "Primary Care",
    },
    {
      icon: cardiology,
      title: "Cardiology",
    },
    {
      icon: mriResonance,
      title: "MRI Resonance",
    },
    {
      icon: bloodTest,
      title: "Blood Test",
    },
    {
      icon: piscologist,
      title: "Psychologist",
    },
    {
      icon: labIcon,
      title: "Laboratory",
    },
    {
      icon: xRayIcon,
      title: "X-ray",
    },
  ];

  return (
    <Box
      sx={{
        mt: 5,
        bgcolor: "primary.light",
        py: 4,
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
      }}
    >
      {/* Heading */}
      <Typography
        align="center"
        variant="h4"
        color="text.primary"
        sx={{
          mb: 4,
        }}
      >
        Find By Specialisation
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          mt: 4,

          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {specialists.map((specialist, index) => (
          <Box
            key={specialist.title}
            sx={{
              // Mobile + tablet: show everything
              display: {
                xs: "block",
                sm: "block",

                // Desktop:
                // First 4 always visible
                // Remaining cards depend on showAll
                md:
                  index < 4 || showAll
                    ? "block"
                    : "none",
              },
            }}
          >
            <CategoryCard
              icon={specialist.icon}
              title={specialist.title}
            />
          </Box>
        ))}
      </Box>

      {/* View All / View Less */}
      <Box
        sx={{
          // IMPORTANT:
          // Hidden on mobile/tablet
          // Visible from md (900px) onwards
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },

          justifyContent: "center",
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setShowAll(!showAll)}
          sx={{
            textTransform: "none",
            px: 4,
            py: 1,
          }}
        >
          {showAll ? "View Less" : "View All"}
        </Button>
      </Box>
    </Box>
  );
};

export default FindBySpecialists;