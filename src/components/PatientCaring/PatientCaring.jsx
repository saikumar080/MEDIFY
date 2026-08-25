import { Box, Typography, Stack, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import patientCaring from "../../assests/images/PatientCaring.png";
import patientCaring2 from "../../assests/images/PatientCaring-2.png";

const checklistItems = [
  "Stay Updated About Your Health",
  "Check Your Results Online",
  "Manage Your Appointments",
];

const PatientCaring = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor:"primary.light",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: 3,
              md: 6,
              lg: 8,
            },
          }}
        >
          {/* =========================
              LEFT - IMAGES
          ========================== */}

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: {
                xs: 400,
                md: 500,
              },
              height: {
                xs: 330,
                sm: 380,
                md: 430,
              },
              flexShrink: 0,
            }}
          >
            {/* Bottom image */}

            <Box
              component="img"
              src={patientCaring2}
              alt="Doctor caring for patient"
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,

                width: {
                  xs: "76%",
                  sm: "78%",
                  md: "76%",
                },

                height: {
                  xs: "68%",
                  sm: "70%",
                  md: "72%",
                },

                objectFit: "cover",
                objectPosition: "center",

                borderRadius: 2,
                boxShadow: 3,

                zIndex: 1,
              }}
            />

            {/* Top image */}

            <Box
              component="img"
              src={patientCaring}
              alt="Doctors consulting"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,

                width: {
                  xs: "60%",
                  sm: "62%",
                  md: "60%",
                },

                height: {
                  xs: "55%",
                  sm: "58%",
                  md: "60%",
                },

                objectFit: "cover",
                objectPosition: "center",

                borderRadius: 2,
                boxShadow: 3,

                zIndex: 2,
              }}
            />

            {/* =========================
                FREE CONSULTATION CARD
            ========================== */}

            <Box
              sx={{
                position: "absolute",

                top: "50%",
                left: {
                  xs: 0,
                  sm: -10,
                  md: -20,
                },

                transform: "translateY(-50%)",

                display: "flex",
                alignItems: "center",

                gap: 1.5,

                bgcolor: "background.paper",

                px: {
                  xs: 1.5,
                  sm: 2,
                },

                py: 1.25,

                borderRadius: 2,

                boxShadow: 3,

                zIndex: 3,

                width: {
                  xs: 190,
                  sm: 210,
                },
              }}
            >
              {/* Phone icon */}

              <Box
                sx={{
                  width: 34,
                  height: 34,

                  flexShrink: 0,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  bgcolor: "primary.main",
                  color: "common.white",

                  borderRadius: "50%",
                }}
              >
                <PhoneInTalkIcon fontSize="small" />
              </Box>

              {/* Text */}

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 12,
                      sm: 13,
                    },
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  Free Consultation
                </Typography>

                <Typography
                  sx={{
                    mt: 0.3,
                    fontSize: {
                      xs: 9,
                      sm: 10,
                    },
                    color: "text.secondary",
                  }}
                >
                  Consultation with the best
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* =========================
              RIGHT - CONTENT
          ========================== */}

          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
            }}
          >
            {/* Small heading */}

            <Typography
              component="p"
              sx={{
                color: "primary.main",

                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                },

                fontWeight: 700,

                letterSpacing: {
                  xs: 0.5,
                  md: 1,
                },

                mb: 1,
              }}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>

            {/* Main heading */}

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: 28,
                  sm: 34,
                  md: 40,
                },

                lineHeight: 1.2,

                fontWeight: 700,

                color: "text.primary",

                mb: 2,
              }}
            >
              Patient{" "}
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                }}
              >
                Caring
              </Box>
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                maxWidth: 520,

                color: "text.secondary",

                fontSize: {
                  xs: 14,
                  sm: 15,
                  md: 16,
                },

                lineHeight: 1.7,

                mb: 3,
              }}
            >
              Our goal is to deliver quality of care in a courteous,
              respectful, and compassionate manner. We hope you will allow us
              to care for you and strive to be the first and best choice for
              healthcare.
            </Typography>

            {/* Checklist */}

            <Stack spacing={1.5}>
              {checklistItems.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "primary.main",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 14,
                        sm: 15,
                        md: 16,
                      },

                      fontWeight: 500,

                      color: "text.primary",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PatientCaring;