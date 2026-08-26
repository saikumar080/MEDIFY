import { Box, Typography, Avatar, Paper } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";

const stats = [
  {
    icon: FavoriteRoundedIcon,
    value: "5000+",
    label: "Happy Patients",
    bg: "#E7F0FE",
    color: "primary.main",
  },
  {
    icon: LocalHospitalRoundedIcon,
    value: "200+",
    label: "Hospitals",
    bg: "#FDEAE7",
    color: "#E0654B",
  },
  {
    icon: BiotechRoundedIcon,
    value: "1000+",
    label: "Laboratories",
    bg: "#FDF3DA",
    color: "#E0A83A",
  },
  {
    icon: MedicalServicesRoundedIcon,
    value: "700+",
    label: "Expert Doctors",
    bg: "#E3F7EA",
    color: "#3FA766",
  },
];

export default function OurFamilies() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 8,
        maxWidth: 1100,
        mx: "auto",
        py: 9,
        pr: 7,
        bgcolor:"primary.light",
        flexDirection: { xs: "column", md: "row" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "100%", md: "55%" },
          height: "100%",
          pointerEvents: "none",
        },
      }}
    >
      {/* Left content */}
      <Box sx={{ flex: { md: "0 0 42%" }, pl: { xs: 0, md: 7 } }}>
        <Typography
          variant="h3"
          sx={{
            display: "block",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "primary.main",
            mb: 1.5,
          }}
        >
          Caring for the health of you and your family.
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "text.primary",
            fontSize: { xs: 32, md: 40 },
            lineHeight: 1.15,
            mb: 2.5,
          }}
        >
          Our Families
        </Typography>

        <Typography
          sx={{
            fontWeight:550,
            color: "text.secondary",
          }}
        >
          We will work with you to develop individualised care plans,
          including management of chronic diseases. If we cannot assist, we
          can provide referrals or advice about the type of practitioner you
          require. We treat all enquiries sensitively and in the strictest
          confidence.
        </Typography>
      </Box>

      {/* Stat cards grid */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 3,
          width: "100%",
        }}
      >
        {stats.map(({ icon: Icon, value, label, bg, color }, i) => (
          <Paper
            key={label}
            elevation={0}
            sx={{
              borderRadius: 4,
              px: 2.5,
              py: 3.5,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 12px 30px rgba(19, 39, 90, 0.08)",
              mt: { xs: 0, md: i % 2 === 1 ? 5 : 0 },
            }}
          >
            <Avatar sx={{ bgcolor: bg, width: 56, height: 56, mb: 2 }}>
              <Icon sx={{ color, fontSize: 28 }} />
            </Avatar>
            <Typography
              sx={{ fontSize: 30, fontWeight: 800, color: "#0B1E3D", lineHeight: 1.2 }}
            >
              {value}
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#8993A4", mt: 0.5 }}>
              {label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}