import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { getHospitals } from "../../services/api";
import MedicalCenterCard from "../../components/MedicalCenterCard/MedicalCenterCard";
import promoImage from "../../assests/images/Promo.png";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar2";
import FAQ from "../../components/FAQ/Faq";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Footer from "../../components/Footer/Footer";
const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const state = searchParams.get("state");
  const city = searchParams.get("city");

  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getHospitals(state, city);

        console.log("HOSPITAL API RESPONSE:", data);

        setCenters(data);
      } catch (err) {
        console.error("Error Fetching Hospitals:", err);
        setError("Unable to fetch medical centers.");
        setCenters([]);
      } finally {
        setLoading(false);
      }
    };

    if (state && city) {
      fetchHospitals();
    } else {
      setCenters([]);
      setLoading(false);
    }
  }, [state, city]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* Navbar + SearchBar = ONE BLUE SECTION */}
      <Box
        sx={{
          bgcolor: "primary.main",
          pb: { xs: 1, md: 2 },
          borderRadius: 1,
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Search bar */}
        <Container
          maxWidth="lg"
          sx={{
            mt: 2,
            mb: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: 2,
          }}
        >
          <SearchBar searchPage sx={{ borderRadius: 2 }} />
        </Container>
      </Box>

      {/* Search Results */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: { xs: 24, md: 32 },
            fontWeight: 700,
            mb: 1,
          }}
        >
          {centers.length} medical centers available in {city}
        </Typography>

        <Stack
          direction="row"
          spacing={0.75}
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <CheckCircleIcon sx={{ fontSize: 18, color: "text.secondary" }} />
          <Typography variant="body2" color="text.secondary">
            Book appointments with minimum wait-time & verified doctor
            details
          </Typography>
        </Stack>

        {/* Error */}
        {error && (
          <Typography color="error" sx={{ mb: 3 }}>
            {error}
          </Typography>
        )}

        {/* Results + Promo layout */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 4,
            flexWrap: { xs: "wrap", lg: "nowrap" }, // force no-wrap at lg so promo can never drop below
          }}
        >
          {/* Results column: full width until lg, then 9/12 beside promo */}
          <Grid item xs={12} lg={9} sx={{ minWidth: 0 }}>
            {centers.length > 0 ? (
              <Stack spacing={2}>
                {centers.map((center, index) => (
                  <MedicalCenterCard
                    key={center.id || index}
                    center={center}
                  />
                ))}
              </Stack>
            ) : (
              !error && (
                <Box
                  sx={{
                    py: 8,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    No medical centers found
                  </Typography>

                  <Typography variant="body1">
                    We couldn't find any medical centers in {city}.
                  </Typography>
                </Box>
              )
            )}
          </Grid>

          {/* Promo image sidebar: hidden below lg, aside on lg+, capped size */}
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              display: { xs: "none", lg: "block" },
              flexShrink: 0, // never lets the flex layout squeeze/stretch it into wrapping
            }}
          >
            <Box
              component="img"
              src={promoImage}
              alt="World Oral Health Day free appointment offer"
              loading="lazy"
              sx={{
                width: "100%",
                maxWidth: "100%",
                maxHeight: 320, // caps it so it can't render oversized
                borderRadius: 2,
                position: "sticky",
                top: 90,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* FAQ */}
      <FAQ />
      {/* Download APP */}
      <DownloadApp />
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SearchResults;