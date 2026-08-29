import { Box, Paper, Typography } from "@mui/material";

const PromoCard = () => (
  <Paper
    elevation={0}
    sx={{ p: 3, borderRadius: 2, bgcolor: "#ffff", position: "sticky", top: 90 }}
  >
    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
      This World Oral Health Day,
    </Typography>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
      Get a <Box component="span" sx={{ color: "primary.main" }}>FREE</Box> Appointment*
      with <Box component="span" sx={{ color: "text.main" }}>Top Dentists.</Box>
    </Typography>
    <Box
      sx={{
        display: "inline-block",
        bgcolor: "primary.main",
        color: "background.default",
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        fontSize: 12,
        fontWeight: 600,
        mb: 2,
      }}
    >
      LIMITED PERIOD OFFER
    </Box>
    <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
      #BeSensitiveToOralHealth
    </Typography>
    <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
      *T&C Apply. Offer valid subject to booking/appointment confirmed.
    </Typography>
  </Paper>
);

export default PromoCard;