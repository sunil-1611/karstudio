import React from "react";
import servicescartStyle from "./servicescartStyle";
import { Box, Typography } from "@mui/material";
import LocalImages from "../../assets/images";
import Rightarrowicon from "../../pages/components/rightarrowicon"
const serviescart = () => {
  return (
  
      <Box sx={servicescartStyle.carts}>
       
            <Box className="cartCover">
              <img alt="test" className="cartImg" src={LocalImages.FINDCAR} />
             <Typography>
             Find a Car
             <Rightarrowicon />
             </Typography>
            </Box>
        
            <Box className="cartCover">
              <img alt="test" className="cartImg" src={LocalImages.SELLYOURCAR} />
              <Typography>
              Sell Your Car
              <Rightarrowicon />
              </Typography>
            </Box>
         
            <Box className="cartCover">
              <img alt="test" className="cartImg" src={LocalImages.SELLPRIVATELY} />
              <Typography>
              Sell Privately
              <Rightarrowicon />
              </Typography>
            </Box>
         
            <Box className="cartCover">
              <img alt="test" className="cartImg" src={LocalImages.INSURANCEQUOTE} />
              <Typography>
              Insurance Quote
              <Rightarrowicon />
              </Typography>
            </Box>
         
      </Box>
  
  );
};

export default serviescart;
