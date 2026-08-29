import { Box, Container, Typography, Link, Stack, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logoIcon from "../../assests/icons/Medify-logo.png"; // swap to your actual Medify mark

const linkColumns = [
  {
    links: ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  },
  {
    links: ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
  },
  {
    links: ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: YouTubeIcon, href: "#", label: "YouTube" },
  { icon: PinterestIcon, href: "#", label: "Pinterest" },
];

const FooterLinkColumn = ({ links }) => (
  <Stack spacing={1.5}>
    {links.map((label) => (
      <Box
        key={label}
        component="a"
        href="#"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          color: "rgba(255,255,255,0.75)",
          textDecoration: "none",
          fontSize: 14,
          "&:hover": { color: "#ffffff" },
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 16, color: "primary.light" }} />
        {label}
      </Box>
    ))}
  </Stack>
);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "text.primary", // matches primary.dark tone used elsewhere in the page
        // negative margin pulls this section flush against DownloadApp's
        // bottom edge so there's no visual gap/seam between the two
        pt: { xs: 6, sm: 7, md: 8 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: { xs: 5, md: 4 },
          }}
        >
          {/* Logo + social */}
          <Box sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1", md: "auto" } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="img" src={logoIcon} alt="" sx={{ width: 18, height: 18 }} />
              </Box>
              <Typography sx={{ fontSize: 22, fontWeight: 800, color: "primary.main" }}>
                Medify
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  aria-label={label}
                  size="small"
                  sx={{
                    bgcolor: "background.default",
                    width: 34,
                    height: 34,
                    "&:hover": { bgcolor: "primary.light" },
                  }}
                >
                  <Icon sx={{ fontSize: 16, color: "primary.main" }} />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Link columns */}
          {linkColumns.map((col, i) => (
            <Box key={i}>
              <FooterLinkColumn links={col.links} />
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: { xs: 4, md: 5 } }} />

        <Typography
          sx={{
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Copyright ©2023 Surya Nursing Home.com, All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;