import { Box, Button, Typography } from "@mui/material";
import React from "react";
import carsListStyle from "./carslistStyle";
import Slider from "react-slick";
import CarIcon from "../Products/carIcon";
import DropIcon from "../Products/dropIcon";

const Carslist = () => {
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
      <Box className="common-section" sx={carsListStyle.Carslist}>
        <Box className="container">
          <Slider {...settings}>
            <div className="CarsListing">
              <CarIcon />
              <Typography className="title" variant="h2">Used Car By Makes</Typography>
              <ul className="listing">
                <li>Used Cars in Alabama</li>
                <li>Used Cars in Alaska</li>
                <li>Used Cars in Arizona</li>
                <li>Used Cars in Arkansas</li>
                <li>Used Cars in California</li>
              </ul>
              <Button className="seeMore" variant="h2">See More <DropIcon /></Button>
            </div>

            <div className="CarsListing">
              <CarIcon />
              <Typography className="title" variant="h2">Used Car By Makes</Typography>
              <ul className="listing">
                <li>Used Cars in Alabama</li>
                <li>Used Cars in Alaska</li>
                <li>Used Cars in Arizona</li>
                <li>Used Cars in Arkansas</li>
                <li>Used Cars in California</li>
              </ul>
              <Button className="seeMore" variant="h2">See More <DropIcon /></Button>
            </div>

            <div className="CarsListing">
              <CarIcon />
              <Typography className="title" variant="h2">Used Car By Makes</Typography>
              <ul className="listing">
                <li>Used Cars in Alabama</li>
                <li>Used Cars in Alaska</li>
                <li>Used Cars in Arizona</li>
                <li>Used Cars in Arkansas</li>
                <li>Used Cars in California</li>
              </ul>
              <Button className="seeMore" variant="h2">See More <DropIcon /></Button>
            </div>
          </Slider>

          <Box className="carslist-para">
            <Typography className="heading">Welcome to KarKiosk.com – Your Ultimate Used Car Marketplace</Typography>
            <Typography className="para">Ready to part ways with your current vehicle? At KarKiosk, we make it simple for everyone - private car sellers, car auctions, private car buyers, and car dealers - to list their cars for free. With our user-friendly platform, you can quickly create a listing that will attract buyers who are actively looking for used cars. Whether you're selling a sedan, SUV, or truck, KarKiosk is your go-to solution for connecting with potential buyers. Sell your car with us and get instant offers from interested buyers. If you're looking to sell your car privately, KarKiosk provides the perfect marketplace to reach a wide audience.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Carslist;
