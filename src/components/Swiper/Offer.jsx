import { Box, Container } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import offer1 from "../../assests/images/swiper1.png";
import offer2 from "../../assests/images/swiper2.png";
import offer3 from "../../assests/images/swiper3.webp";
import offer4 from "../../assests/images/swiper4.jpg";

const offers = [
  {
    id: 1,
    image: offer1,
    alt: "Medical offer 1",
  },
  {
    id: 2,
    image: offer2,
    alt: "Medical offer 2",
  },
  {
    id: 3,
    image: offer3,
    alt: "Medical offer 3",
  },
  {
    id: 4,
    image: offer4,
    alt: "Medical offer 4",
  },
];

const OfferSwiper = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: {
          xs: 3,
          sm: 4,
          md: 5,
        },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={600}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            // Mobile
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },

            // Tablet
            600: {
              slidesPerView: 2,
              spaceBetween: 16,
            },

            // Desktop
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          style={{
            width: "100%",
            paddingBottom: "40px",
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <Box
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 2,
                  aspectRatio: {
                    xs: "16 / 8",
                    sm: "16 / 8",
                    md: "16 / 7",
                  },
                }}
              >
                <Box
                  component="img"
                  src={offer.image}
                  alt={offer.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OfferSwiper;