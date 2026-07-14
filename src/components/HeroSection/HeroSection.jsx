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
          background: "linear-gradient(180deg,#E7F0FF 0%,#F8FBFF 100%)",
          pt: { xs: 6, md: 8 },
          pb: { xs: 10, md: 18 },
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 4 }}
            alignItems="center"
          >
            {/* Left */}

            <Box flex={1}>
              <Typography
                variant="h6"
                sx={{
                  color: "secondary.main",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Skip the travel! Find Online Doctors
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
              flex={1}
              display="flex"
              justifyContent="center"
            >
              <Box
                component="img"
                src={doctorImage}
                alt="Doctor"
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: 320,
                    sm: 420,
                    md: 520,
                  },
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Search */}

      <SearchBar />
    </>
  );
};

export default HeroSection;