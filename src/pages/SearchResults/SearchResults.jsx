import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { getHospitals } from "../../services/api";
import MedicalCenterCard from "../../components/MedicalCenterCard/MedicalCenterCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar2";
import  FAQ from "../../components/FAQ/Faq";
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
        borderRadius:1
      }}
    >
      {/* Navbar */}
      <Navbar  />

      {/* Search bar */}
      <Container maxWidth="lg" sx={{mt:2, mb:1, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",borderRadius:2}}>
        <SearchBar searchPage sx={{borderRadius:2}} />
      </Container>
    </Box>

    {/* Search Results */}
    <Container maxWidth="lg">
      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontSize: { xs: 28, md: 36 },
          mb: 1,
        }}
      >
        {centers.length} medical centers available in {city}
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Showing medical centers available in {city}, {state}
      </Typography>

      {/* Error */}
      {error && (
        <Typography color="error" sx={{ mb: 3 }}>
          {error}
        </Typography>
      )}

      {/* Results */}
      {centers.length > 0 ? (
        <Stack spacing={3}>
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
            <Typography
              variant="h3"
              sx={{ mb: 1 }}
            >
              No medical centers found
            </Typography>

            <Typography variant="body1">
              We couldn't find any medical centers in {city}.
            </Typography>
          </Box>
        )
      )}
      {/* <Offer /> */}
    </Container>

    {/* FAQ*/}
     <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 5, md: 6 },
        }}
      >
        <FAQ />
      </Box>

      {/* Download APP */}
      <Box
              component="section"
              sx={{
                width: "100%",
                py: { xs: 5, md: 6 },
              }}
            >
              <DownloadApp />
      </Box>

      {/* Footer */}
       <Box
              component="section"
              sx={{
                width: "100%",
                py: { xs: 5, md: 6 },
              }}
            >
              <Footer />
            </Box>
  </Box>
);

};

export default SearchResults;