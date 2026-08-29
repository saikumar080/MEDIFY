import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Snackbar,
  Alert,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import hospitalIcon from "../../assests/icons/hosptialSearch.png";
import { saveBookings } from "../../utils/localStorage";
import { createBookingEntry } from "../../utils/helper";

// Fallback mock — replace with center.availability from your API once
// you confirm the real field name/shape.
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
    label: "Fri, 5 May",
    slotsAvailable: 18,
    morning: ["09:30 AM", "10:30 AM"],
    afternoon: ["12:30 PM", "01:00 PM", "02:00 PM"],
    evening: ["06:30 PM", "07:00 PM", "07:30 PM"],
  },
];

const VISIBLE_DAYS = 3;

const MedicalCenterCard = ({ center= {} }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [windowStart, setWindowStart] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [toastOpen, setToastOpen] = useState(false);

  const availability = center.availability ?? DEFAULT_AVAILABILITY;
  const visibleDays = availability.slice(windowStart, windowStart + VISIBLE_DAYS);
  const selectedDay = availability[selectedDayIndex];

  const handlePrevDays = () => {
    setWindowStart((prev) => Math.max(prev - 1, 0));
  };

  const handleNextDays = () => {
    setWindowStart((prev) =>
      Math.min(prev + 1, Math.max(availability.length - VISIBLE_DAYS, 0))
    );
  };

  const handleSlotClick = (time) => {
    setSelectedSlot(time);

    const entry = createBookingEntry(center, selectedDay?.label, time);
    saveBookings(entry);

    setToastOpen(true);
  };

  const renderSlotRow = (label, slots) => {
    if (!slots || slots.length === 0) return null;

    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ py: 2, borderBottom: "1px solid", borderColor: "divider" }}
      >
        <Typography
          variant="body2"
          sx={{ width: { sm: 90 }, flexShrink: 0, fontWeight: 500 }}
        >
          {label}
        </Typography>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          {slots.map((time) => {
            const isSelected = selectedSlot === time;
            return (
              <Button
                key={time}
                variant={isSelected ? "contained" : "outlined"}
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
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        transition: "0.3s",

        "&:hover": {
          boxShadow: 3,
          transform: expanded ? "none" : "translateY(-2px)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems={{ xs: "flex-start", sm: "flex-start" }}
        >
          {/* Hospital Icon */}
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
              alt={center.name}
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
                fontSize: 20,
                color: "primary.main",
                bgcolor: "white",
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Details: name, address, description, price + thumbs count */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                fontSize: { xs: 18, md: 20 },
                fontWeight: 700,
                color: "primary.main",
                mb: 0.5,
              }}
            >
              {center.name}
            </Typography>

            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.25 }}>
              {center.address}
            </Typography>

            {center.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {center.description}
              </Typography>
            )}
            <Typography variant="h3" sx={{mb:1, color:"primary.main"}}> Fortis Hospital Richmond Road</Typography>
            <Typography variant="body1" sx={{color:"Background.defaultS"}}>Banglore, Karnataka</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Box component="span" sx={{ color: "success.main", fontWeight: 700 }}>
                FREE
              </Box>{" "}
              <Box component="span" sx={{ textDecoration: "line-through" }}>
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
                fontSize: 13,
              }}
            >
              <ThumbUpIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {center.likes ?? 5}
              </Typography>
            </Box>
          </Box>

          {/* Availability + Booking */}
          <Stack
            alignItems={{ xs: "flex-start", sm: "flex-end",md:"center" }}
            spacing={1}
            sx={{ flexShrink: 0 }}
          >
            <Typography
              variant="body2"
              sx={{ color: "success.main", fontWeight: 600 }}
            >
              {center.available === false ? "Currently unavailable" : "Available Today"}
            </Typography>

            <Button
              variant="contained"
              size="large"
              disabled={center.available === false}
              onClick={() => setExpanded((prev) => !prev)}
              sx={{ minWidth: { xs: "100%", sm: 190 } }}
            >
              {expanded ? "Hide Slots" : "Book FREE Center Visit"}
            </Button>
          </Stack>
        </Stack>

        {/* Slot picker panel */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ mt: 3 }} />

          <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
            <IconButton
              size="small"
              onClick={handlePrevDays}
              disabled={windowStart === 0}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Stack direction="row" flex={1} justifyContent="space-around">
              {visibleDays.map((day, i) => {
                const actualIndex = windowStart + i;
                const isSelected = actualIndex === selectedDayIndex;

                return (
                  <Box
                    key={day.label}
                    onClick={() => {
                      setSelectedDayIndex(actualIndex);
                      setSelectedSlot(null);
                    }}
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                      pb: 1,
                      borderBottom: "2px solid",
                      borderColor: isSelected ? "success.main" : "transparent",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: isSelected ? 700 : 500 }}
                    >
                      {day.label}
                    </Typography>
                    <Typography
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

          <Box sx={{ mt: 1 }}>
            {renderSlotRow("Morning", selectedDay?.morning)}
            {renderSlotRow("Afternoon", selectedDay?.afternoon)}
            {renderSlotRow("Evening", selectedDay?.evening)}
          </Box>
        </Collapse>
      </CardContent>

      <Snackbar
        open={toastOpen}
        autoHideDuration={2500}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Appointment booked for {selectedDay?.label} at {selectedSlot}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default MedicalCenterCard;