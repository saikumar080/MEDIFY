import React from "react";
import { Box, Typography, Container } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import doctor1 from "../../assests/images/medical-1.png";
import doctor2 from "../../assests/images/medical-2.png";
import doctor3 from "../../assests/images/medical-3.png";
import doctor4 from "../../assests/images/medical-4.png";
import doctor5 from "../../assests/images/Medical-5.png";

const doctors = [
  {
    image: doctor1,
    name: "Dr. A. Kumar",
    speciality: "Neurologist",
  },
  {
    image: doctor2,
    name: "Dr. Ahmad Khan",
    speciality: "Neurologist",
  },
  {
    image: doctor3,
    name: "Dr. Heena Sachdeva",
    speciality: "Orthopedics",
  },
  {
    image: doctor4,
    name: "Dr. Ankur Sharma",
    speciality: "Medicine",
  },
  {
    image: doctor5,
    name: "Dr. John Smith",
    speciality: "Cardiologist",
  },
];

const MedicalSwiper = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: 4,

        "& .swiper-pagination": {
          position: "relative",
          bottom: "auto",
          marginTop: 2,
        },

        "& .swiper-pagination-bullet": {
          width: 8,
          height: 8,
          opacity: 1,
          backgroundColor: "#D6E8F5",
        },

        "& .swiper-pagination-bullet-active": {
          backgroundColor: "primary.main",
          width: 20,
          borderRadius: 10,
        },
      }}
    >
      <Container maxWidth="xl">

        <Typography
          component="h2"
          align="center"
          sx={{
            color: "text.primary",
            fontSize: {
              xs: 24,
              sm: 28,
              md: 32,
            },
            fontWeight: 600,
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          Our Medical Specialists
        </Typography>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          centeredSlides={false}
          speed={600}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },

            600: {
              slidesPerView: 2.5,
              spaceBetween: 14,
            },

            900: {
              slidesPerView: 3.5,
              spaceBetween: 16,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          style={{
            width: "100%",
            padding: "0 5px 30px",
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 280,
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: {
                      xs: 230,
                      sm: 250,
                      md: 280,
                    },
                    overflow: "hidden",
                    borderRadius: "140px 140px 0 0",
                    bgcolor: "primary.main",
                  }}
                >
                  <Box
                    component="img"
                    src={doctor.image}
                    alt={doctor.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center bottom",
                      display: "block",
                    }}
                  />
                </Box>

                <Box sx={{ py: 1.5 }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 14,
                        md: 16,
                      },
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    {doctor.name}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: {
                        xs: 12,
                        md: 13,
                      },
                      fontWeight: 500,
                      color: "primary.main",
                    }}
                  >
                    {doctor.speciality}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default MedicalSwiper;