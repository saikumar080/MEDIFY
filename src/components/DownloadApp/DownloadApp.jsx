import { Box, Container, Typography, InputBase, Button } from "@mui/material";
import phoneFrameFront from "../../assests/images/SeeKOne.png";
import phoneFrameBack from "../../assests/images/SeekSec.png";
import screenContent from "../../assests/images/mobile.png";
import googlePlayBadge from "../../assests/images/google_play.png";
import appStoreBadge from "../../assests/images/apple_store.png";
import curveArrow from "../../assests/icons/Vector.png";

const PhoneMockup = ({ frameSrc, screenSrc, sx, screenInset }) => (
  <Box sx={{ position: "relative", ...sx }}>
    <Box
      sx={{
        position: "absolute",
        inset: screenInset || "4% 4% 4% 4%",
        borderRadius: "18px",
        overflow: "hidden",
        bgcolor: "#fff",
      }}
    >
      <Box
        component="img"
        src={screenSrc}
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
    </Box>
    <Box
      component="img"
      src={frameSrc}
      alt=""
      sx={{ position: "relative", width: "100%", display: "block", pointerEvents: "none" }}
    />
  </Box>
);

const DownloadApp = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        pt: { xs: 5, sm: 7, md: 10 },
        pb: 0,
        bgcolor: "primary.light",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1fr" },
            gap: { xs: 5, sm: 6, md: 4 },
            alignItems: "end",
          }}
        >
          {/* LEFT - PHONE MOCKUP(S) */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: 240, sm: 300, md: 420 },
              aspectRatio: { xs: "3 / 4", md: "420 / 420" },
              mx: { xs: "auto", md: 0 },
              order: { xs: -1, md: 0 },
            }}
          >
            {/* Back phone (right, taller) - top-aligned */}
            <PhoneMockup
              frameSrc={phoneFrameBack}
              screenSrc={screenContent}
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                right: 0,
                top: 0, // was "8%" — back phone is the top-aligned one
                width: "65%",
                zIndex: 1,
                filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.12))",
              }}
            />

            {/* Front phone (left, in front) - offset downward */}
            <PhoneMockup
              frameSrc={phoneFrameFront}
              screenSrc={screenContent}
              sx={{
                position: "absolute",
                left: { xs: "50%", md: 0 },
                top: { xs: 0, md: "10%" }, // was 0 — front phone drops down on md+
                width: { xs: "85%", sm: "70%", md: "65%" },
                transform: { xs: "translateX(-50%)", md: "none" },
                zIndex: 2,
                filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.15))",
              }}
            />
          </Box>

          {/* RIGHT - CONTENT */}
          <Box
            sx={{
              position: "relative",
              textAlign: { xs: "center", md: "left" },
              pb: { xs: 5, sm: 7, md: 10 },
            }}
          >
            <Box
              component="img"
              src={curveArrow}
              alt=""
              sx={{
                position: "absolute",
                left: { xs: "50%", sm: -20, md: -60 },
                top: { xs: -34, sm: -14, md: -10 },
                transform: { xs: "translateX(-50%) rotate(90deg)", sm: "none" },
                width: { sm: 44, md: 60 },
                zIndex: 1,
                display: { xs: "none", sm: "block" },
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 26, sm: 34, md: 42 },
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#152B4E",
                mb: { xs: 2, md: 3 },
                position: "relative",
                zIndex: 2,
              }}
            >
              Download the <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                Medify
              </Box>{" "}
              App
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, sm: 14, md: 15 },
                color: "text.secondary",
                mb: { xs: 3, md: 4 },
              }}
            >
              Get the link to download the app
            </Typography>

            {/* Phone number + Send SMS */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "stretch",
                bgcolor: "#ffffff",
                borderRadius: 1,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
                maxWidth: 420,
                mx: { xs: "auto", md: 0 },
                mb: { xs: 3, md: 4 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", flex: { xs: "unset", sm: 1 } }}>
                <Typography
                  sx={{
                    px: 2,
                    py: { xs: 1.2, sm: 0 },
                    color: "text.secondary",
                    fontSize: 14,
                    borderRight: { sm: "1px solid #E8EEF5" },
                    borderBottom: { xs: "1px solid #E8EEF5", sm: "none" },
                    flexShrink: 0,
                  }}
                >
                  +91
                </Typography>
                <InputBase
                  placeholder="Enter phone number"
                  sx={{
                    flex: 1,
                    px: 2,
                    py: 1.5,
                    fontSize: 14,
                    minWidth: 0,
                  }}
                />
              </Box>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: 0,
                  px: 3,
                  py: { xs: 1.5, sm: 1.8 },
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Send SMS
              </Button>
            </Box>

            {/* Store badges */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box component="a" href="#" sx={{ display: "block", lineHeight: 0 }}>
                <Box
                  component="img"
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  sx={{ height: { xs: 38, sm: 44 }, width: "auto" }}
                />
              </Box>
              <Box component="a" href="#" sx={{ display: "block", lineHeight: 0 }}>
                <Box
                  component="img"
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  sx={{ height: { xs: 38, sm: 44 }, width: "auto" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DownloadApp;