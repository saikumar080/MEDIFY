import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import hospitalIcon from "../../assests/icons/hosptialSearch.png";

import { saveBookings } from "../../utils/localStorage";

const DEFAULT_AVAILABILITY = [
  {
    label: "Today",
    slotsAvailable: 11,
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  },
  {
    label: "Tomorrow",
    slotsAvailable: 17,
    morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    label: "Friday",
    slotsAvailable: 18,
    morning: ["09:30 AM", "10:30 AM"],
    afternoon: ["12:30 PM", "01:00 PM", "02:00 PM"],
    evening: ["06:30 PM", "07:00 PM", "07:30 PM"],
  },
];

const VISIBLE_DAYS = 3;

const MedicalCenterCard = ({ center = {} }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [windowStart, setWindowStart] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [toastOpen, setToastOpen] = useState(false);

  const availability =
    Array.isArray(center.availability) && center.availability.length > 0
      ? center.availability
      : DEFAULT_AVAILABILITY;

  const visibleDays = availability.slice(windowStart, windowStart + VISIBLE_DAYS);
  const selectedDay = availability[selectedDayIndex];

  // Resolve display fields once so they're consistent between the card
  // and what gets saved into the booking record.
  const centerName =
    center["Hospital Name"] ||
    center.name ||
    center.hospitalName ||
    "Medical Center";

  const centerAddress =
    center["Address"] ||
    center.address ||
    center.location ||
    "";

  const centerCity = center["City"] || center.city || "";
  const centerState = center["State"] || center.state || "";

  const centerDescription =
    center["Hospital Type"] ||
    center.description ||
    "";

  // =========================
  // PREVIOUS DAYS
  // =========================

  const handlePrevDays = () => {
    setWindowStart((previous) => Math.max(previous - 1, 0));
  };

  // =========================
  // NEXT DAYS
  // =========================

  const handleNextDays = () => {
    const maxStart = Math.max(availability.length - VISIBLE_DAYS, 0);
    setWindowStart((previous) => Math.min(previous + 1, maxStart));
  };

  // =========================
  // BOOK APPOINTMENT
  // =========================

const handleSlotClick = (time) => {
    setSelectedSlot(time);

    const booking = {
      id: Date.now(),

      // =========================
      // MEDICAL CENTER DETAILS
      // =========================

      centerId:
        center.id ||
        center.centerId ||
        center.hospitalId ||
        null,

      centerName,
      centerAddress,
      city: centerCity,
      state: centerState,
      description: centerDescription,

      centerImage:
        center.image ||
        center["Image"] ||
        center.hospitalImage ||
        hospitalIcon,

      // =========================
      // APPOINTMENT DETAILS
      // =========================

      day: selectedDay?.label || "",
      date: selectedDay?.date || selectedDay?.label || "",
      time,

      // =========================
      // EXTRA DETAILS
      // =========================

      consultationFee: center.consultationFee || 500,
      likes: center.likes ?? 5,

      bookedAt: new Date().toISOString(),

      // Keep original hospital data too
      center,
    };

    console.log("BOOKING SAVED:", booking);

    saveBookings(booking);

    setToastOpen(true);
  };

  // =========================
  // SLOT ROW
  // =========================

  const renderSlotRow = (label, slots) => {
    if (!Array.isArray(slots) || slots.length === 0) {
      return null;
    }

    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          component="p"
          sx={{
            width: { sm: 90 },
            flexShrink: 0,
            fontWeight: 600,
          }}
        >
          {label}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {slots.map((time) => {
            const selected = selectedSlot === time;

            return (
              <Button
                key={time}
                variant={selected ? "contained" : "outlined"}
                size="small"
                onClick={() => handleSlotClick(time)}
                sx={{
                  minWidth: 88,
                  borderRadius: 1.5,
                  textTransform: "none",
                }}
              >
                {time}
              </Button>
            );
          })}
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "none",
          "&:hover": {
            boxShadow: 2,
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          {/* =========================
              CENTER DETAILS
          ========================= */}

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            {/* IMAGE */}

            <Box
              sx={{
                position: "relative",
                width: 72,
                height: 72,
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
                src={center.image || hospitalIcon}
                alt={centerName}
                onError={(event) => {
                  event.currentTarget.src = hospitalIcon;
                }}
                sx={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />

              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  fontSize: 20,
                  color: "primary.main",
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* DETAILS */}

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: 17, md: 20 },
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                {centerName}
              </Typography>

              {(centerCity || centerState) && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.3 }}
                >
                  {[centerCity, centerState].filter(Boolean).join(", ")}
                </Typography>
              )}

              <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                {centerAddress || "Address unavailable"}
              </Typography>

              {centerDescription && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {centerDescription}
                </Typography>
              )}

              <Typography variant="body2" sx={{ mb: 1 }}>
                <Box
                  component="span"
                  sx={{ color: "success.main", fontWeight: 700 }}
                >
                  FREE
                </Box>{" "}
                <Box
                  component="span"
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹{center.consultationFee || 500}
                </Box>{" "}
                Consultation fee at clinic
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "success.main",
                  color: "white",
                  px: 1,
                  py: 0.25,
                  borderRadius: 1,
                }}
              >
                <ThumbUpIcon sx={{ fontSize: 14 }} />

                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 600 }}
                >
                  {center.likes ?? 5}
                </Typography>
              </Box>
            </Box>

            {/* BOOK BUTTON */}

            <Stack
              alignItems={{ xs: "stretch", md: "center" }}
              spacing={1}
              sx={{
                flexShrink: 0,
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: "success.main",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {center.available === false
                  ? "Currently unavailable"
                  : "Available Today"}
              </Typography>

              <Button
                variant="contained"
                size="large"
                disabled={center.available === false}
                onClick={() => setExpanded((previous) => !previous)}
                sx={{
                  minWidth: { xs: "100%", md: 200 },
                  textTransform: "none",
                }}
              >
                {expanded ? "Hide Slots" : "Book FREE Center Visit"}
              </Button>
            </Stack>
          </Stack>

          {/* =========================
              BOOKING SLOTS
          ========================= */}

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider sx={{ mt: 3 }} />

            {/* DAYS */}

            <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
              <IconButton
                size="small"
                onClick={handlePrevDays}
                disabled={windowStart === 0}
              >
                <ChevronLeftIcon />
              </IconButton>

              <Stack direction="row" flex={1} justifyContent="space-around">
                {visibleDays.map((day, index) => {
                  const actualIndex = windowStart + index;
                  const selected = actualIndex === selectedDayIndex;

                  return (
                    <Box
                      key={`${day.label}-${actualIndex}`}
                      onClick={() => {
                        setSelectedDayIndex(actualIndex);
                        setSelectedSlot(null);
                      }}
                      sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        pb: 1,
                        borderBottom: "2px solid",
                        borderColor: selected ? "success.main" : "transparent",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontWeight: selected ? 700 : 500 }}
                      >
                        {day.label}
                      </Typography>

                      <Typography
                        component="p"
                        variant="caption"
                        sx={{ color: "success.main", fontWeight: 600 }}
                      >
                        {day.slotsAvailable} Slots Available
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>

              <IconButton
                size="small"
                onClick={handleNextDays}
                disabled={windowStart + VISIBLE_DAYS >= availability.length}
              >
                <ChevronRightIcon />
              </IconButton>
            </Stack>

            {/* TIME SLOTS */}

            <Box sx={{ mt: 1 }}>
              {renderSlotRow("Morning", selectedDay?.morning)}
              {renderSlotRow("Afternoon", selectedDay?.afternoon)}
              {renderSlotRow("Evening", selectedDay?.evening)}
            </Box>
          </Collapse>
        </CardContent>
      </Card>

      {/* =========================
          BOOKING MESSAGE
      ========================= */}

      <Snackbar
        open={toastOpen}
        autoHideDuration={2500}
        onClose={() => setToastOpen(false)}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setToastOpen(false)}
        >
          Appointment booked for {selectedDay?.label} at {selectedSlot}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MedicalCenterCard;