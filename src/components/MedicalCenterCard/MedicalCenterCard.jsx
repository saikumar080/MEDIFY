import {
  Box,
  Button,
  Card,
  CardContent,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const MedicalCenterCard = ({ center }) => {
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
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          {/* Hospital Image */}
          <Box
            sx={{
              width: { xs: "100%", sm: 180 },
              height: 130,
              borderRadius: 2,
              overflow: "hidden",
              flexShrink: 0,
              bgcolor: "primary.light",
            }}
          >
            <Box
              component="img"
              src={center.image}
              alt={center.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Details */}
          <Box sx={{ flex: 1 }}>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                fontSize: { xs: 20, md: 22 },
                mb: 1,
              }}
            >
              {center.name}
            </Typography>

            <Typography variant="body2" sx={{ mb: 1 }}>
              {center.address}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating
                value={center.rating || 0}
                precision={0.5}
                readOnly
                size="small"
              />

              <Typography variant="body2">
                {center.rating || 0}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "success.main",
                fontWeight: 600,
              }}
            >
              {center.available ? "Available" : "Currently unavailable"}
            </Typography>
          </Box>

          {/* Booking */}
          <Button
            variant="contained"
            size="large"
            disabled={!center.available}
            sx={{
              minWidth: { xs: "100%", sm: 190 },
            }}
          >
            Book FREE Center Visit
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MedicalCenterCard;