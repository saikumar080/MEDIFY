import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import blogImage from "../../assests/images/Blog-2.png";
import doctor from "../../assests/images/Doctor-blog.png";

const blogs = [
  {
    id: 1,
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    image: blogImage,
    doctorImage: doctor,
    author: "Rebecca Lee",
  },
  {
    id: 2,
    category: "Medical",
    date: "April 05, 2022",
    title: "How To Stay Healthy During Your Busy Schedule",
    image: blogImage,
    doctorImage: doctor,
    author: "Rebecca Lee",
  },
  {
    id: 3,
    category: "Healthcare",
    date: "April 12, 2022",
    title: "Simple Ways To Improve Your Overall Health",
    image: blogImage,
    doctorImage: doctor,
    author: "Rebecca Lee",
  },
];

const Blog = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6, lg:8 },
      }}
    >
      {/* Eyebrow label */}
      <Typography
        align="center"
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: "primary.main",
          mb: 1,
        }}
      >
        Blog & News
      </Typography>

      {/* Heading */}
      <Typography
        component="h2"
        align="center"
        sx={{
          fontSize: {
            xs: 24,
            sm: 28,
            md: 32,
          },
          fontWeight: 700,
          mb: { xs: 4, md: 5 },
          color: "text.primary",
        }}
      >
        Read Our Latest News
      </Typography>

      {/* Blog Cards */}
      {/* Constrain the row's own max width so the 3 cards group together
          and center as a block, instead of stretching across the
          full page width on lg screens. */}
      <Box
        sx={{
          maxWidth: 1160,
          mx: "auto",
          cursor:"pointer"
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          justifyContent="center"
        >
          {blogs.map((blog) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={blog.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: 345,
                  mx: "auto",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "2px solid",
                  borderColor: "divider",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: 3,
                    borderColor: "primary.main",
                  },
                  transition: "all 0.3s ease-in-out"
                }}
              >
                {/* Blog Image */}
                <CardMedia
                  component="img"
                  height="160"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <CardContent sx={{ p: 2.5 }}>
                  {/* Category + Date */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: 13,
                      }}
                    >
                      {blog.category}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: 13,
                      }}
                    >
                      •
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: 13,
                      }}
                    >
                      {blog.date}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "text.primary",
                      mb: 2,
                    }}
                  >
                    {blog.title}
                  </Typography>

                  {/* Author */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={blog.doctorImage}
                      alt={blog.author}
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: 13,
                      }}
                    >
                      {blog.author}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blog;