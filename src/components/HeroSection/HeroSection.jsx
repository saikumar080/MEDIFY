import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import SearchBar from "../SearchBar/SearchBar";
import doctorImage from "../../assests/images/NicePng_doctor-png_336282 1.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero */}

      <Box
        sx={{
          position:"relative",
          background: "linear-gradient(180deg,#E7F0FF 0%,#F8FBFF 100%)",
          pt: { xs: 6, md: 8 },
          pb: { xs: 3, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 1, md: 4 }}
            alignItems="center"
            sx={{minHeight:{lg:500}}}
          >
            {/* Left */}

            <Box sx={{flex:0.9, pl:{xs:0,md:4,lg:6}}}>
              <Typography
                variant="h6"
                sx={{
                  color: "secondary.main",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Skip the travel! Find Online 
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Medical{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                  }}
                >
                  Centers
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 520,
                  mb: 4,
                }}
              >
                Connect instantly with a 24×7 specialist or choose to
                video visit a particular doctor.
              </Typography>

              <Button
                variant="contained"
                size="large"
              >
                Find Centers
              </Button>
            </Box>

            {/* Right */}

            <Box
              sx={{ flex:1.1, display:"flex",justifyContent:"center", alignItems:"flex-end"}}
            >
              <Box
                component="img"
                src={doctorImage}
                alt="Doctor"
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: 340,
                    sm: 450,
                    md: 600,
                  },
                  mb:{xs:-2, lg:20}
                }}
              />
            </Box>
          </Stack>
        </Container>
         {/* Search */}
        <Container maxWidth="xl" sx={{position:"relative"}}>
          <SearchBar />
        </Container>
      
      </Box>
    </>
  );
};

export default HeroSection;