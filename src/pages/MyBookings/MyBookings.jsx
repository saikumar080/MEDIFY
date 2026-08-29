import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { getBookings } from "../../utils/localStorage";
import hospitalIcon from "../../assests/icons/hosptialSearch.png";
import promoImage from "../../assests/images/Promo.png";
import Navbar from "../../components/Navbar/Navbar";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Footer from "../../components/Footer/Footer";
import MedicalCenterCard from "../../components/MedicalCenterCard/MedicalCenterCard";
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const filteredBookings = useMemo(() => {
    if (!query.trim()) return bookings;

    const q = query.trim().toLowerCase();
    return bookings.filter(
      (b) =>
        b.centerName?.toLowerCase().includes(q) ||
        b.centerAddress?.toLowerCase().includes(q)
    );
  }, [bookings, query]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Navbar + heading/search bar = ONE BLUE SECTION */}
      <Box sx={{ bgcolor: "primary.main", pb: { xs: 2, md: 3 } }}>
        <Navbar />

        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 700, color: "white" }}
            >
              My Bookings
            </Typography>

            <TextField
              placeholder="Search by keyword"
              size="small"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                width: { xs: "100%", sm: 320 },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Bookings list */}
          <Grid item xs={12} lg={9} sx={{ minWidth: 0 }}>
            {filteredBookings.length === 0 ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  No bookings found
                </Typography>
                <Typography variant="body1">
                  Book an appointment from the search results page to see it here.
                </Typography>
              </Box>
            ) : (
              <Stack spacing={2}>
                {filteredBookings.map((booking, index) => (
                  <Card
                    key={`${booking.centerId}-${index}`}
                    sx={{
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: "divider",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={3}
                        alignItems={{ xs: "flex-start", sm: "center" }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            flexShrink: 0,
                            bgcolor: "#E3F2FD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={booking.centerImage || hospitalIcon}
                            alt={booking.centerName}
                            onError={(e) => {
                              e.currentTarget.src = hospitalIcon;
                            }}
                            sx={{ width: "70%", height: "70%", objectFit: "contain" }}
                          />
                          <CheckCircleIcon
                            sx={{
                              position: "absolute",
                              bottom: -2,
                              right: -2,
                              fontSize: 18,
                              color: "primary.main",
                              bgcolor: "white",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>

                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            component="h3"
                            variant="h3"
                            sx={{
                              fontSize: { xs: 16, md: 18 },
                              fontWeight: 700,
                              color: "primary.main",
                              mb: 0.5,
                            }}
                          >
                           Fortis Hospital Richmond Road
                          </Typography>

                          <Typography variant="body2" color="text.secondary"  fontSize="bold">
                            Banglore,Karnataka
                          </Typography>
                          <Typography>Smilessence Center for Advanced Dentistry +1</Typography>
                          <Typography>more</Typography>
                        </Box>

                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ flexShrink: 0 }}
                        >
                          <Box
                            sx={{
                            display:"flex",
                              borderRadius:0.8 ,
                              border:6,
                              borderColor: "primary.main",
                              color: "primary.main",
                              fontSize: 13,
                              fontWeight: 600,
                              padding:1
                            }}
                          >
                            {booking.day}
                          </Box>
                          <Box
                            sx={{
                              
                              display:"flex",
                              borderRadius:0.8 ,
                              border:6,
                              borderColor: "success.light",
                              color: "success.light",
                              fontSize: 13,
                              fontWeight: 600,
                              padding:1
                            }}
                          >
                            {booking.time}
                          </Box>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            )}
          </Grid>

          {/* Promo sidebar: hidden below lg, aside on lg+ */}
          <Grid
            item
            xs={12}
            lg={3}
            sx={{ display: { xs: "none", lg: "block" }, flexShrink: 0 }}
          >
            <Box
              component="img"
              src={promoImage}
              alt="World Oral Health Day free appointment offer"
              loading="lazy"
              sx={{
                width: "100%",
                maxHeight: 320,
                borderRadius: 2,
                position: "sticky",
                top: 90,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <DownloadApp />
      <Footer />
    </Box>
  );
};

export default MyBookings;