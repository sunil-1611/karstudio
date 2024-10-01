import { Box, Input, Typography } from "@mui/material";
import React from "react";

import bannerStyle from "./bannerStyle";
import Serviescart from "../../pages/components/serviescart"
const Banner = () => {
  return (
    <Box sx={bannerStyle.banner}>
      {/* <img alt="test" className="bannerImg" src={LocalImages.BANNERIMG} /> */}
      <Box className="bannerTextcontainer">
        <Box className="container">
          <Box className="InnnerBannerTextContainer">
            <Box className="cover">
              <Typography className="title" variant="h1">
                Find Cars. Sell Cars. Insurance Quotes.
              </Typography>
              <Typography className="subtitle" variant="h4">
                Start with your Zip code, then Choose Buy, Sell, or Get
                Insurance Quotes.
              </Typography>
              <Input
                className="BannerInput"
                aria-label="Demo input"
                placeholder="Zip Code"
              />

              <Serviescart />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
