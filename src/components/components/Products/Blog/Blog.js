import { Box, Button, Typography } from "@mui/material";
import React from "react";
import blogStyle from "./BlogStyle";
import Slider from "react-slick";
import LocalImages from "../../../../assets/images";
import CalendarIcon from "../calendar";

const Blog = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    mobileFirst: true,
    responsive: [
      {
      breakpoint: 1172,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
  ]
  };
  return (
    <>
      <Box className="common-section" sx={blogStyle.blogs}>
        <Typography className="section-heading" variant="h2">
          Latest Blogs
        </Typography>
        <Box className="container">
          <Slider {...settings}>
            <div className="innerblog">
              <Box className="blogImg">
                <img alt="test" src={LocalImages.BLOG1} />
                <Box className="date">
                  <CalendarIcon /> Aug 3, 2024
                </Box>
              </Box>
              <Box className="text-cover">
                <Typography className="title" variant="h3">
                  Top Tips to Stay Safe When Buying a Car Online
                </Typography>
                <Button className="readmore" variant="readmore">
                  Read More
                </Button>
              </Box>
            </div>
            <div className="innerblog">
              <Box className="blogImg">
                <img alt="test" src={LocalImages.BLOG2} />
                <Box className="date">
                  <CalendarIcon /> Aug 3, 2024
                </Box>
              </Box>
              <Box className="text-cover">
                <Typography className="title" variant="h3">
                  Top Rated SUVs for Summer Vacations
                </Typography>
                <Button className="readmore" variant="readmore">
                  Read More
                </Button>
              </Box>
            </div>
            <div className="innerblog">
              <Box className="blogImg">
                <img alt="test" src={LocalImages.BLOG3} />
                <Box className="date">
                  <CalendarIcon /> Aug 3, 2024
                </Box>
              </Box>
              <Box className="text-cover">
                <Typography className="title" variant="h3">
                  Avoid Online Scams When Selling a Car
                </Typography>
                <Button className="readmore" variant="readmore">
                  Read More
                </Button>
              </Box>
            </div>
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
