import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LocalImages from "../../../assets/images";
import ProductStyle from "./ProductStyle";
import HeartIcon from "./HeartIcon";
import Viewllbtn from "../viewllbtn";
const ProductsList = () => {
  return (
    <>
      <Box className="container" sx={ProductStyle.featured}>
        <Box className="innercontentholder">
          <Box className="item">
            <Box className="productImgcover">
              <Box className="heartIcon">
                <HeartIcon/>
              </Box>
              <img
                alt="test"
                className="cartImg"
                src={LocalImages.PRODUCTIMG1}
              />
            </Box>
            <Box className="textpanle">
              <Typography className="title">2008 Ford Edge</Typography>
              <Box className="innerText">
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.ILLINOIS}
                  />{" "}
                  Illinois
                </Typography>
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.CAAGUAZA}
                  />{" "}
                  Caaguazú
                </Typography>
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.PRIVATESELLER}
                  />{" "}
                  Private Seller
                </Typography>
                <Typography>
                  <img alt="test" className="cartImg" src={LocalImages.METER} />{" "}
                  40,000 (mi)
                </Typography>
              </Box>
            </Box>
            <Box className="fare_detail_btn">
              <Typography className="fare">USD 11,000</Typography>
              <Button className="detailBtn" variant="standard">
                Details
              </Button>
            </Box>
          </Box>
          <Box className="item">
            <Box className="productImgcover">
            <Box className="heartIcon">
                <HeartIcon/>
              </Box>
              <img
                alt="test"
                className="cartImg"
                src={LocalImages.PRODUCTIMG1}
              />
            </Box>
            <Box className="textpanle">
              <Typography className="title">2008 Ford Edge</Typography>
              <Box className="innerText">
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.ILLINOIS}
                  />{" "}
                  Illinois
                </Typography>
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.CAAGUAZA}
                  />{" "}
                  Caaguazú
                </Typography>
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.PRIVATESELLER}
                  />{" "}
                  Private Seller
                </Typography>
                <Typography>
                  <img alt="test" className="cartImg" src={LocalImages.METER} />{" "}
                  40,000 (mi)
                </Typography>
              </Box>
            </Box>
            <Box className="fare_detail_btn">
              <Typography className="fare">USD 11,000</Typography>
              <Button className="detailBtn" variant="standard">
                Details
              </Button>
            </Box>
          </Box>
          <Box className="item">
            <Box className="productImgcover">
            <Box className="heartIcon">
                <HeartIcon/>
              </Box>
              <img
                alt="test"
                className="cartImg"
                src={LocalImages.PRODUCTIMG1}
              />
            </Box>
            <Box className="textpanle">
              <Typography className="title">2008 Ford Edge</Typography>
              <Box className="innerText">
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.ILLINOIS}
                  />{" "}
                  Illinois
                </Typography>
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.CAAGUAZA}
                  />{" "}
                  Caaguazú
                </Typography>
                <Typography>
                  <img
                    alt="test"
                    className="cartImg"
                    src={LocalImages.PRIVATESELLER}
                  />{" "}
                  Private Seller
                </Typography>
                <Typography>
                  <img alt="test" className="cartImg" src={LocalImages.METER} />{" "}
                  40,000 (mi)
                </Typography>
              </Box>
            </Box>
            <Box className="fare_detail_btn">
              <Typography className="fare">USD 11,000</Typography>
              <Button className="detailBtn" variant="standard">
                Details
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
     <Box className="text-center marginTop48">
     <Viewllbtn />
     </Box>
    </>
  );
};

export default ProductsList;
