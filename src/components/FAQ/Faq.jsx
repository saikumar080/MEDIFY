import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import faqImage from "../../assests/images/FAQ.png";
import happyIcon from "../../assests/icons/happy.png";
import heartIcon from "../../assests/icons/faqheart.png";

const faqData = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "We provide reliable healthcare services with experienced doctors and medical professionals focused on providing quality care for you and your family.",
  },
  {
    question: "Why we are different from others?",
    answer:
      "Medify makes it easy to find medical centers and healthcare services while providing a simple and convenient booking experience.",
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "Our healthcare services focus on trusted professionals, experienced medical staff, and compassionate patient care.",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "You can search for available medical centers and select the available appointment option based on your location and requirements.",
  },
];

const FAQ = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: {
          xs: 6,
          sm: 8,
          md: 10,
        },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* =========================
            HEADING
        ========================= */}

        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontSize: {
                xs: 12,
                sm: 13,
              },
              fontWeight: 600,
              mb: 1,
            }}
          >
            Get Your Answer
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "text.primary",
              fontSize: {
                xs: 28,
                sm: 32,
                md: 36,
              },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "0.95fr 1fr",
            },

            gap: {
              xs: 5,
              md: 8,
              lg: 10,
            },

            alignItems: "center",
          }}
        >
          {/* =================================
              LEFT - IMAGE SECTION
          ================================= */}

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 430,
              mx: {
                xs: "auto",
                md: 0,
              },
            }}
          >
            {/* =========================
                MAIN IMAGE
            ========================= */}

            <Box
              component="img"
              src={faqImage}
              alt="Doctor talking with patient"
              sx={{
                display: "block",
                width: "100%",

                height: {
                  xs: 280,
                  sm: 320,
                  md: 350,
                },

                objectFit: "cover",

                borderRadius: 1,

                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              }}
            />

            {/* =========================
                HAPPY PATIENTS CARD
            ========================= */}

            <Box
              sx={{
                position: "absolute",

                left: {
                  xs: -5,
                  sm: -20,
                  md: -35,
                },

                bottom: {
                  xs: 15,
                  md: 25,
                },

                bgcolor: "background.default",

                borderRadius: 1,

                px: 1.5,
                py: 1.2,

                display: "flex",
                alignItems: "center",

                gap: 1,

                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",

                minWidth: {
                  xs: 125,
                  sm: 145,
                },

                zIndex: 2,
              }}
            >
              {/* Happy Icon */}

              <Box
                component="img"
                src={happyIcon}
                alt="Happy patients"
                sx={{
                  width: {
                    xs: 25,
                    sm: 30,
                  },

                  height: {
                    xs: 25,
                    sm: 30,
                  },

                  objectFit: "contain",
                }}
              />

              {/* Happy Patients Text */}

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 14,
                      sm: 16,
                    },

                    fontWeight: 700,

                    color: "text.primary",

                    lineHeight: 1.2,
                  }}
                >
                  84k+
                </Typography>

                <Typography
                variant="h5"
                  sx={{
                    fontSize: {
                      xs: 9,
                      sm: 10,
                    },
                    

                    color: "text.secondary",

                    mt: 0.3,

                    whiteSpace: "nowrap",
                  }}
                >
                  Happy Patients
                </Typography>
              </Box>
            </Box>

            {/* =========================
                HEART ICON BADGE
            ========================= */}

            <Box
              sx={{
                position: "absolute",

                right: {
                  xs: -10,
                  sm: -18,
                  md: -22,
                },

                top: "30%",

                width: {
                  xs: 42,
                  sm: 48,
                  md: 54,
                },

                height: {
                  xs: 42,
                  sm: 48,
                  md: 54,
                },

                bgcolor: "background.default",

                borderRadius: "50%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",

                zIndex: 3,
              }}
            >
              <Box
                component="img"
                src={heartIcon}
                alt="Healthcare"
                sx={{
                  width: "55%",
                  height: "55%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* =================================
              RIGHT - FAQ SECTION
          ================================= */}

          <Box
            sx={{
              width: "100%",
            }}
          >
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: "transparent",

                  borderBottom: "1px solid #E8EEF5",

                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 24,
                      }}
                    />
                  }
                  sx={{
                    minHeight: {
                      xs: 65,
                      sm: 72,
                    },

                    px: 0,

                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      marginLeft: 2,
                    },

                    "&.Mui-expanded": {
                      minHeight: {
                        xs: 65,
                        sm: 72,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: "text.primary",

                      fontSize: {
                        xs: 13,
                        sm: 14,
                        md: 15,
                      },

                      fontWeight: 600,

                      lineHeight: 1.4,

                      pr: 2,
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 0,
                    pt: 0,
                    pb: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.secondary",

                      fontSize: {
                        xs: 12,
                        sm: 13,
                      },

                      lineHeight: 1.7,

                      maxWidth: 500,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>

      {/* =========================
          BOTTOM LIGHT BLUE STRIP
      ========================= */}

      <Box
        sx={{
          height: 5,

          bgcolor: "primary.light",

          mt: {
            xs: 6,
            md: 8,
          },
        }}
      />
    </Box>
  );
};

export default FAQ;