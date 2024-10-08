import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import slickStyle from "./components/SlickSlider/slickstyle";
import LocalImages from "../assets/images";
import ArrowDown from "./components/Products/Arrowdown";
import UploadFile from "./components/Products/UploadFile";
import { styled } from "@mui/material/styles";
import {isMobile} from 'react-device-detect';

const About = () => {
  var settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1172,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1172,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const navigate = useNavigate()
  return (
    <Layout>
      {/* Captivate Buyers with Stunning Car Photos! */}

      <Box className="common-section" sx={slickStyle.captivate}>
        <Box className="container">
          <Box className="captivateInner">
            <Box className="left">
              <Typography className="section-heading" variant="h2">
              <span>Captivate Buyers with </span>Stunning Car Photos!
              </Typography>
              <Typography className="para">
                Capture the attention of potential buyers with enhanced car
                photos. Our AI-powered, user-friendly photography studio takes
                the hassle out of creating professional car listings. Transform
                Your Car Listings with: AI-Enhanced Photos!
              </Typography>
              {isMobile && <Box className="right">
              <img alt="test" src={LocalImages.SLIDEIMG} />
            </Box>}
              <Box className="uploadSection">
                <Box sx={{ minHeight: "9.8788rem" }}>
                  <Typography
                    sx={{
                      fontSize: "1.3069rem",
                      lineHeight: "2.1781rem",
                      fontWeight: "500",
                      color: "var(--primary)",
                    }}
                  >
                    Give KarStudio a Try
                  </Typography>
                  <Button
                  onClick={() =>{
                    navigate('/editor')
                  }}
                    sx={{
                      marginTop: "4.86rem",
                      backgroundColor: "var(--primary)",
                      borderRadius: ".5444rem",
                      height: "2.8312rem",
                      textTransform: "none",
                      fontSize: "1.3069rem",
                      lineHeight: "2.1781rem",
                      fontWeight: "500",
                    }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<UploadFile />}
                  >
                    Upload an image
                    {/* <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => console.log(event.target.files)}
                      multiple
                    /> */}
                  </Button>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: ".98rem",
                  fontWeight: "300",
                  lineHeight: "2.1781rem",
                  textAlign:"center",
                  marginTop:"1.5737rem",
                }}
              >
                No image to upload ? Pick one
              </Typography>
              <Box className="upload-image" sx={{
                display:"flex", alignItems:"center", justifyContent:"center",gap:".4356rem",
                marginTop:"1.25rem",
                img:{
                  width:"100%",
                  borderRadius:".5444rem",
                }
                }}>
              <img alt="test" src={LocalImages.IMGG1} />
              <img alt="test" src={LocalImages.IMGG2} />
              <img alt="test" src={LocalImages.IMGG3} />
              <img alt="test" src={LocalImages.IMGG4} />
              <img alt="test" src={LocalImages.IMGG5} />
              </Box>
            </Box>
            {!isMobile && <Box className="right">
              <img alt="test" src={LocalImages.SLIDEIMG} />
            </Box>}
          </Box>
        </Box>
      </Box>
      {/* Captivate Buyers with Stunning Car Photos! */}

      {/* Transform Your Car Listings with AI-Enhanced Photos! */}
      <Box className="common-section">
        <Box className="container">
          <Typography className="section-heading" variant="h2">
            Transform Your 
            <span>Car Listings</span>
            <br/> 
            with{" "} 
            <span>AI-Enhanced Photos!</span>
          </Typography>
          <Box sx={slickStyle.CarListing}>
            <Box className="coverCarlisting">
              <Box className="CarListingOption">
                <Typography className="option">Before</Typography>
                <Typography className="option">After</Typography>
              </Box>
              <Slider {...settings}>
                <div className="carholder">
                  <img style={{borderRadius: '19px'}}alt="test" src={LocalImages.BEFORE} />
                </div>
                <div className="carholder">
                  <img style={{borderRadius: '19px'}} alt="test" src={LocalImages.AFTER} />
                </div>
                <div className="carholder">
                  <img style={{borderRadius: '19px'}} alt="test" src={LocalImages.BEFORE} />
                </div>
                <div className="carholder">
                  <img style={{borderRadius: '19px'}} alt="test" src={LocalImages.AFTER} />
                </div>
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Transform Your Car Listings with AI-Enhanced Photos! */}

      {/* Enhance Your Car Photos with AI-Driven KarStudio */}
      <Box className="common-section" sx={slickStyle.EnhanceStyle}>
        <Box className="container">
          <Box className="text-center ">
            <Typography className="section-heading" variant="h2">
              Enhance <span>Your Car</span> Photos <br/> with{" "}
              <span>AI-Driven KarStudio</span>
            </Typography>
            <Typography className="subPara">
              Our AI-Driven Car Studio takes professional car photography to the
              next level. Imagine a state-of-the-art facility where you can
              capture stunning, high-qualityimages of vehicles effortlessly.
              Whether you're an automobile retailer or an OEM, high-resolution
              vehicle photos are essential for advertisements, promotions,and
              sales listings. No need for professional photographers who
              specialize in automotive photoshoots. Our AI-Driven Car Studio
              automates the process, ensuring consistent, flawless results every
              time. No more waiting for the perfect lighting or dealing with
              complex setups—our AI does it all. Why Choose Our AI-Driven
              KarStudio?
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: "1.125rem" }}
              className="learMore"
            >
              Learn More
            </Button>
          </Box>
          <Box className="Enhanceholder">
            <Slider {...settings2}>
              <div className="carholder">
                <Box className="imgHolder">
                  <img alt="test" src={LocalImages.IMG1} />
                </Box>
                <Box className="textDetail">
                  <Box className="innerText">
                    <Typography className="heading">
                      1. Upload Your Image
                    </Typography>
                    <Typography className="desc">
                      Upload or select a sample image to get started
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div className="carholder">
                <Box className="imgHolder">
                  <img alt="test" src={LocalImages.IMG2} />
                </Box>
                <Box className="textDetail">
                  <Box className="innerText">
                    <Typography className="heading">
                    2. Create Studio-Grade Photos
                    </Typography>
                    <Typography className="desc">
                    Select from a variety of backgrounds and watch your image transform..
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div className="carholder">
                <Box className="imgHolder">
                  <img alt="test" src={LocalImages.IMG3} />
                </Box>

                <Box className="textDetail">
                  <Box className="innerText">
                    <Typography className="heading">
                    3. Download Enhanced Photo
                    </Typography>
                    <Typography className="desc">
                    Download your enhanced image and elevate your listing.                    </Typography>
                  </Box>
                </Box>
              </div>
            </Slider>
          </Box>
        </Box>
      </Box>
      {/* Enhance Your Car Photos with AI-Driven KarStudio */}

      {/* Achieve Optimal Results with Our Step-by-Step Guide */}
      <Box className="common-section">
        <Box className="container">
          <Box sx={slickStyle.Guide}>
            <Box className="carHolder">
              <img alt="test" src={LocalImages.CARNEW} />
            </Box>
            <Box className="carText">
              <Typography
                className="section-heading"
                variant="h2"
                sx={{ whiteSpace: "normal" }}
              >
                Achieve Optimal Results with Our <span>Step-by-Step Guide</span>{" "}
              </Typography>
              <Typography className="section-para">
                Utilize the KarStudio guide to upload images that meet
                studio-quality standards! Effortlessly create stunning,
                professional-grade photos by following our detailed KarStudio
                guide. Maximize the potential of our AI-driven car studio
                technology and start producing flawless images today!
              </Typography>
              <Button
                sx={{ marginTop: "3rem" }}
                variant="contained"
                className="learMore"
              >
                View Guide
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Achieve Optimal Results with Our Step-by-Step Guide */}

      {/* Elevate Your Photography Skills with KarStudio */}
      <Box className="common-section" sx={slickStyle.Photography}>
        <Box className="container">
          <Box className="text-center">
            <Typography className="section-heading" variant="h2">
              Elevate Your Photography<br /> Skills with 
              <span>KarStudio</span>
            </Typography>
            <Typography className="subPara">
              Enhance your photography with KarStudio by utilizing original
              images effectively. Start by avoiding strong sunlight and learning
              to harness daylight for stunning results. The best time to shoot
              can significantly impact your images, so find those golden hours.
              Experimenting with angles can also elevate your photos, making
              them more dynamic. To ensure clarity, prevent glare with strategic
              positioning. Additionally, understanding the optimal distance for
              your shots is crucial for achieving perfection. By following these
              simple tips, you can elevate your skills and make every shot truly
              count. View our step by step guide and start capturing
              breathtaking images today!
            </Typography>
            {/* <Button variant="contained" sx={{marginTop:"1.125rem"}} className="learMore">
              Learn More
            </Button> */}
          </Box>
          <Box className="photographyCove">
            <Box className="photography photographyLeft">
              <Typography
                className="title"
                variant="h3"
                sx={{ color: "var(--primary)" }}
              >
                'Photographing from Above'
              </Typography>
              <Typography className="subtitle">
                can cause the vehicle to appear unrealistic in the studio.
              </Typography>
              <Box className="photoBox">
                <Box className="item cross">
                  <img alt="test" src={LocalImages.Photo1} />
                  <img
                    alt="test"
                    className="crossIcon"
                    src={LocalImages.CROSSICON}
                  />
                </Box>
                <Box className="item wright">
                  <img alt="test" src={LocalImages.Photo2} />
                  <img
                    alt="test"
                    className="wrigthIcon"
                    src={LocalImages.WRIGHTICON}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="photography photographyRight">
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".6462rem",
                }}
                className="title"
                variant="h3"
              >
                <img alt="test" src={LocalImages.WRIGHTICONHEADING} /> GOOD
                PHOTOGRAPHY EXAMPLES
              </Typography>
              <Box className="photoBox">
                <Box className="item wright">
                  <img alt="test" src={LocalImages.Photo3} />
                  <img
                    alt="test"
                    className="wrigthIcon"
                    src={LocalImages.WRIGHTICON}
                  />
                </Box>
                <Box className="item wright">
                  <img alt="test" src={LocalImages.Photo4} />
                  <img
                    alt="test"
                    className="wrigthIcon"
                    src={LocalImages.WRIGHTICON}
                  />
                </Box>
                <Box className="item dotted">
                  <img alt="test" src={LocalImages.Photo5} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="text-center">
          <Button
            variant="contained"
            sx={{ marginTop: "2.75rem" }}
            className="learMore"
          >
            View Guide
          </Button>
        </Box>
      </Box>
      {/* Elevate Your Photography Skills with KarStudio */}

      <Box className="common-section" sx={slickStyle.FAQS}>
        <Box className="container">
          <Typography
            className="section-heading"
            variant="h2"
            sx={{ whiteSpace: "normal" }}
          >
            Frequently Asked <span>Questions</span> about <span>KarStudio</span>
          </Typography>
          <Box className="faqs">
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                How much should I charge for a kar photoshoot?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDown />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                How to take professional photos of kars?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDown />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Do car photographers make money?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDown />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                How to photograph a luxury kar studio?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
          </Box>
        </Box>
      </Box>

      <Box sx={slickStyle.Form}>
        <Box className="container">
          <Box className="formholder">
            <Box className="left">
              <Typography
                className="section-heading"
                variant="h2"
                sx={{ whiteSpace: "normal" }}
              >
                Drive Your Business <br /> Forward with{" "}
                <span>
                  AI-Powered
                  <br /> KarStudio
                </span>
              </Typography>
              <Typography className="para">
                Are you ready to revolutionize your dealership inventory with
                AI-driven technology? Discover how KarStudio can supercharge
                your business operations. Contact us today to learn more!
              </Typography>
            </Box>
            <Box className="right">
              <Box className="item">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Box>
              <Box className="item">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
              <Box className="item">
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                />
              </Box>
              <Box className="item">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              </Box>
              <Button
                // sx={{ marginTop: "3rem" }}
                variant="contained"
                className="learMore"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
