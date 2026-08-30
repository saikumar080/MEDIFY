import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
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

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const storedBookings = getBookings();
    setBookings(Array.isArray(storedBookings) ? storedBookings : []);
  }, []);

  const getCenterName = (booking) =>
    booking.centerName ||
    booking.hospitalName ||
    booking.name ||
    booking["Hospital Name"] ||
    "Medical Center";

  const getCenterAddress = (booking) => {
    if (booking.centerAddress) return booking.centerAddress;
    if (booking.address) return booking.address;

    const city = booking.city || booking["City"] || "";
    const state = booking.state || booking["State"] || "";

    if (city && state) return `${city}, ${state}`;
    return "Address not available";
  };

  const getCenterDescription = (booking) =>
    booking.description || booking["Hospital Type"] || "";

  const getBookingDate = (booking) =>
    booking.date ||
    booking.appointmentDate ||
    booking.selectedDate ||
    booking.bookingDate ||
    booking.day ||
    "";

  const getBookingTime = (booking) =>
    booking.time ||
    booking.appointmentTime ||
    booking.selectedTime ||
    booking.bookingTime ||
    "";

  const getCenterImage = (booking) =>
    booking.centerImage || booking.hospitalImage || booking.image || hospitalIcon;

  const filteredBookings = useMemo(() => {
    const searchText = query.trim().toLowerCase();
    if (!searchText) return bookings;

    return bookings.filter((booking) => {
      const centerName = getCenterName(booking).toLowerCase();
      const centerAddress = getCenterAddress(booking).toLowerCase();
      const city = (booking.city || booking["City"] || "").toLowerCase();
      const state = (booking.state || booking["State"] || "").toLowerCase();

      return (
        centerName.includes(searchText) ||
        centerAddress.includes(searchText) ||
        city.includes(searchText) ||
        state.includes(searchText)
      );
    });
  }, [bookings, query]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", overflowX: "hidden" }}>
      <Box sx={{ bgcolor: "primary.main", pb: { xs: 3, md: 4 } }}>
        <Navbar />

        <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 3 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", md: "center" }}
            spacing={2}
          >
            <Typography
              component="h1"
              sx={{
                color: "#ffffff",
                fontSize: { xs: 24, sm: 28, md: 32 },
                fontWeight: 700,
              }}
            >
              My Bookings
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: "100%", sm: 460 },
                bgcolor: "#ffffff",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
              }}
            >
              <TextField
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by hospital, city or state"
                size="small"
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    "& fieldset": { border: "none" },
                  },
                }}
              />

              <Button
                variant="contained"
                disableElevation
                startIcon={<SearchIcon />}
                sx={{
                  borderRadius: 0,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Search
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 5 }, mb: { xs: 5, md: 7 } }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
          <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
            {filteredBookings.length === 0 ? (
              <Box sx={{ py: { xs: 7, md: 10 }, textAlign: "center" }}>
                <Typography
                  component="h2"
                  sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 700, mb: 1, color: "text.primary" }}
                >
                  {bookings.length === 0 ? "No bookings yet" : "No bookings found"}
                </Typography>

                <Typography
                  sx={{ color: "text.secondary", fontSize: { xs: 14, md: 16 }, maxWidth: 500, mx: "auto" }}
                >
                  {bookings.length === 0
                    ? "Book an appointment from the search results page to see it here."
                    : "Try searching with a different medical center, city, or state."}
                </Typography>
              </Box>
            ) : (
              <Stack spacing={3}>
                {filteredBookings.map((booking, index) => {
                  const centerName = getCenterName(booking);
                  const centerAddress = getCenterAddress(booking);
                  const centerDescription = getCenterDescription(booking);
                  const bookingDate = getBookingDate(booking);
                  const bookingTime = getBookingTime(booking);
                  const centerImage = getCenterImage(booking);
                  const bookingCity = booking.city || booking["City"] || "";
                  const bookingState = booking.state || booking["State"] || "";

                  return (
                    <Card
                      key={`${booking.centerId || booking.id || "booking"}-${index}`}
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "#E5E7EB",
                        boxShadow: "none",
                        bgcolor: "#ffffff",
                        transition: "all 0.2s ease",
                        "&:hover": { boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)" },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: { xs: 2, sm: 2.5, md: 3 },
                          "&:last-child": { pb: { xs: 2, sm: 2.5, md: 3 } },
                        }}
                      >
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={{ xs: 2, sm: 2.5 }}
                          alignItems={{ xs: "flex-start", sm: "center" }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              width: { xs: 70, sm: 80 },
                              height: { xs: 70, sm: 80 },
                              borderRadius: 2,
                              flexShrink: 0,
                              bgcolor: "#E8F4FF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              component="img"
                              src={centerImage}
                              alt={centerName}
                              onError={(event) => {
                                event.currentTarget.src = hospitalIcon;
                              }}
                              sx={{ width: "70%", height: "70%", objectFit: "contain", display: "block" }}
                            />

                            <CheckCircleIcon
                              sx={{
                                position: "absolute",
                                right: 2,
                                bottom: 2,
                                fontSize: 18,
                                color: "primary.main",
                                bgcolor: "#ffffff",
                                borderRadius: "50%",
                              }}
                            />
                          </Box>

                          <Box sx={{ flex: 1, minWidth: 0, width: { xs: "100%", sm: "auto" } }}>
                            <Typography
                              component="h3"
                              sx={{
                                fontSize: { xs: 17, md: 19 },
                                fontWeight: 700,
                                color: "primary.main",
                                mb: 0.5,
                                lineHeight: 1.3,
                              }}
                            >
                              {centerName}
                            </Typography>

                            {(bookingCity || bookingState) && (
                              <Typography sx={{ color: "text.secondary", fontSize: 13, mb: 0.5 }}>
                                {[bookingCity, bookingState].filter(Boolean).join(", ")}
                              </Typography>
                            )}

                            <Typography
                              sx={{
                                color: "text.secondary",
                                fontSize: { xs: 13, md: 14 },
                                lineHeight: 1.5,
                                mb: centerDescription ? 0.3 : 0,
                              }}
                            >
                              {centerAddress}
                            </Typography>

                            {centerDescription && (
                              <Typography
                                sx={{ color: "text.secondary", fontSize: { xs: 13, md: 14 }, lineHeight: 1.5 }}
                              >
                                {centerDescription}
                              </Typography>
                            )}
                          </Box>

                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                              flexShrink: 0,
                              width: { xs: "100%", sm: "auto" },
                              justifyContent: { xs: "flex-start", sm: "flex-end" },
                            }}
                          >
                            {bookingDate && (
                              <Box
                                sx={{
                                  minWidth: 90,
                                  px: 1.5,
                                  py: 1,
                                  borderRadius: 1,
                                  border: "1px solid",
                                  borderColor: "primary.main",
                                  color: "primary.main",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  textAlign: "center",
                                }}
                              >
                                {bookingDate}
                              </Box>
                            )}

                            {bookingTime && (
                              <Box
                                sx={{
                                  minWidth: 90,
                                  px: 1.5,
                                  py: 1,
                                  borderRadius: 1,
                                  border: "1px solid",
                                  borderColor: "success.main",
                                  color: "success.main",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  textAlign: "center",
                                }}
                              >
                                {bookingTime}
                              </Box>
                            )}
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  );
                })}
              </Stack>
            )}
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0, width: { md: 260, lg: 300 } }}>
            <Box sx={{ position: "sticky", top: 24 }}>
              <Box
                component="img"
                src={promoImage}
                alt="Medical appointment offer"
                loading="lazy"
                sx={{ width: "100%", display: "block", borderRadius: 2, objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>

      <DownloadApp />
      <Footer />
    </Box>
  );
};

export default MyBookings;