import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  AccordionActions,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import slickStyle from "./components/SlickSlider/slickstyle";
import ArrowDown from "./components/Products/Arrowdown";

import styles from "../pages/styles/HeaderStyle";
// import styles from "../../pages/styles/HeaderStyle";
import LocalImages from "../assets/images";
import MenuIcon from "../pages/components/Products/Menu";
import PlusIcon from "./components/Products/PlusIcon";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "./components/Products/CloudUploadIcon";
import Slider from "react-slick";
import PlatePopup from './platePopup'
import '../editor.css'

import Footer from "../components/Layout/Footer";
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

var upgradeSettings = {
  dots: false,
  arrows: false,
  autoplay: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

var reviewSettings = {
  dots: true,
  arrows: true,
  autoplay: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Plans = () => {
  var settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    mobileFirst: true,
    variableWidth: true,
    prevArrow: <img src={LocalImages.LEFTARROW} />,
    nextArrow: <img src={LocalImages.RIGHTARROW} />,
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
  const [mobileOpen, setMobileOpen] = useState(false);
   const [credits, setCredits] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle drawer toggle
 

  // API call using useEffect
  useEffect(() => {
    const fetchCredits = async () => {
      const myHeaders = new Headers();
      myHeaders.append("apiKey", "CgbmPwqMQNUZzeHAJYAreHKtT");
      myHeaders.append("Cookie", "JSESSIONID=MDA5ZjM2ZWEtZWVmNC00YTY1LWFkNzEtM2RhYjliM2YyYzIz");
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
      };
      
      fetch("https://tokyo.carstudio.ai/webEditor/remainingCredits", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      }
    

    fetchCredits();
    handleFetchBackgroundImages()
  }, []);

  console.log('***dsjdsd', credits)

  // UI for the component

  const handleFetchBackgroundImages = () => {
    const myHeaders = new Headers();
myHeaders.append("apiKey", "CgbmPwqMQNUZzeHAJYAreHKtT");
myHeaders.append("Cookie", "JSESSIONID=MGUyYWMwZDMtZGEzOS00M2IxLTkwYWEtMzJmY2ViMmQ3YTg2");

const formdata = new FormData();
formdata.append("pageNumber", "0");
formdata.append("sortBy", "createdDate");
formdata.append("direction", "ASC");
formdata.append("limit", "10");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("https://tokyo.carstudio.ai/webEditor/list", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  }
  //handle menu click

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box className="mobileMenu" onClick={handleDrawerToggle}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          boxShadow: "0px 4px 4px 0px #00000040",
          padding: "1rem",
          marginBottom: "1rem",
          //minHeight:"5rem",
        }}
      >
        <Link className="logo" sx={{ width: "100%" }}>
          {" "}
          <img style={{ width: "100%" }} alt="test" src={LocalImages.LOGO} />
        </Link>
        <Button
          sx={{
            display: {
              xs: "block",
              sm: "none",
              fontSize: "0.85rem",
              lineHeight: "1.1363rem",
              fontWeight: "700",
              backgroundColor: "var(--primary)",
              boxShadow: "none",
              padding: "0.475rem",
              borderRadius: ".625rem",
              color: "var(--white)",
              border: "2px solid var(--primary)",
              textTransform: "capitalize",
              whiteSpace: "pre",
              width: "100%",
              textAlign: "center",
            },
          }}
          className="backtoBtn"
          variant="contained"
          to={"/"}
        >
          Back to KarKiosk
        </Button>
      </Box>
      <Paper sx={{}}>
        <MenuList sx={{ display: "block" }}>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/About"}>KarStudio Guide</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Contact"}>Try KarStudio</Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar sx={styles.navbar} component={"nav"}>
          <Box className="container">
            <Toolbar>
              <Box className="headerCover">
                <Button
                  aria-label="open drawer"
                  edge="start"
                  sx={{
                    display: {
                      xs: "block",
                      sm: "none",
                      color: "white",
                      padding: "0",
                      cursor: "pointer",
                      minWidth: "auto",
                      "&:hover": { backgroundColor: "transparent" },
                    },
                  }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </Button>
                <Link className="logo">
                  {" "}
                  <img alt="test" src={LocalImages.LOGO} />
                </Link>
              </Box>
              <Button
                sx={{ display: { xs: "block", sm: "none" } }}
                className="backtoBtn"
                variant="contained"
                to={"/"}
              >
                Back to KarKiosk
              </Button>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Box className="navbarStyle">
                  <Button className="outlinedBtn" variant="contained" to={"/"}>
                    Available Credits
                  </Button>
                  <Button className="outlinedBtn" variant="contained" to={"/"}>
                    Add Credit
                    <PlusIcon />
                  </Button>
                  <Avatar>
                    <img alt="test" src={LocalImages.USER} />
                  </Avatar>
                </Box>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: {
                xs: "block",
                sm: "none",
                ".MuiDrawer-paper": {
                  width: "100%",
                  maxWidth: "70%",
                  height: "100%",
                  ".mobileMenu": {
                    padding: "0",
                    height: "100%",
                    ".MuiPaper-root": {
                      boxShadow: "none",
                      borderRadius: "0",
                      height: "calc(100vh - 5.3rem)",
                      overflow: "auto",
                      padding: "0 1rem 1rem 1rem",
                      "&::-webkit-scrollbar": {
                        width: ".25rem",
                        height: ".25rem",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "var(--maroon521A)",
                      },

                      "&::-webkit-scrollbar-thumb": {
                        width: ".25rem",
                        height: ".25rem",
                        background: "var(--primary)",
                        borderRadius: "0",
                      },
                      ".MuiList-root": {
                        padding: "0",
                        margin: "0",
                        // display:"inline-flex",
                        // columnGap:"1rem",
                        // flexWrap:"wrap",
                        ".MuiMenuItem-gutters": {
                          padding: "0",
                          marginBottom: "1rem",
                          minHeight: "inherit",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                          "&:last-child": {
                            marginBottom: "0",
                          },
                          ".MuiTypography-inherit": {
                            textDecoration: "none",
                            color: "var(--black)",
                            "&:hover": {
                              color: "var(--primary)",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
     



      <section className="plans-sec">
        <div className="container">
          <div className="title">
            <h1>Upgrade to Enhance Your Car Listing</h1>
            <p>Boost Visibility and attract more buyers.</p>
          </div>



          <div className="plan-row">
            <div className="">
              <div className="plan-card">
                <p className="h5">Starter</p>
                <h2> $4.99</h2>
                <p>per membership</p>

                <ul>
                  <li>05 Number of Images</li>
                  <li>Featured Vehicle </li>
                  <li>30 Days Duration of Featuring Listing</li>
                  <li>Email Notifications </li>
                  <li>SMS Notifications </li>
                  <li>Newly Listed Badge </li>
                  <li>Insurance Deals</li>
                  <li>Get Offers from Our Partners</li>
                  <li>Personalized Customer Support </li>
                </ul>

                <button className="btn-blue">Upgrade Now plan</button>
              </div>
            </div>

            <div className="">
              <div className="plan-card">
                <p className="h5">Starter</p>
                <h2> $4.99</h2>
                <p>per membership</p>

                <ul>
                  <li>05 Number of Images</li>
                  <li>Featured Vehicle </li>
                  <li>30 Days Duration of Featuring Listing</li>
                  <li>Email Notifications </li>
                  <li>SMS Notifications </li>
                  <li>Newly Listed Badge </li>
                  <li>Insurance Deals</li>
                  <li>Get Offers from Our Partners</li>
                  <li>Personalized Customer Support </li>
                </ul>

                <button className="btn-blue">Upgrade Now plan</button>
              </div>
            </div>

            <div className="">
              <div className="plan-card">
                <p className="h5">Starter</p>
                <h2> $4.99</h2>
                <p>per membership</p>

                <ul>
                  <li>05 Number of Images</li>
                  <li>Featured Vehicle </li>
                  <li>30 Days Duration of Featuring Listing</li>
                  <li>Email Notifications </li>
                  <li>SMS Notifications </li>
                  <li>Newly Listed Badge </li>
                  <li>Insurance Deals</li>
                  <li>Get Offers from Our Partners</li>
                  <li>Personalized Customer Support </li>
                </ul>

                <button className="btn-blue">Upgrade Now plan</button>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="upgrade-sec">
        <div className="container">
          <h2>Upgrade your Listing Today and Experience the Difference</h2>

          <div className="">
              <Slider {...upgradeSettings}>
                <div className="up-card">
                  <div className="icon"><i className="hand-icon"></i></div>
                  <p className="h5">Capture Buyers Attention</p>
                  <p>Adding more images to your listing can significantly attract buyers. High-quality photos enhance trust and interest in your car.</p>
                </div>
                <div className="up-card">
                <div className="icon"><i className="hand-icon"></i></div>
                  <p className="h5">Capture Buyers Attention</p>
                  <p>Adding more images to your listing can significantly attract buyers. High-quality photos enhance trust and interest in your car.</p>
                </div>
                <div className="up-card">
                <div className="icon"><i className="hand-icon"></i></div>
                  <p className="h5">Capture Buyers Attention</p>
                  <p>Adding more images to your listing can significantly attract buyers. High-quality photos enhance trust and interest in your car.</p>
                </div>
           
              </Slider>
          </div>
        </div>
      </section>

      <section className="card-sec">
        <div className="container">
          <h2>KarStudio Accepts All Major Payment Methods</h2>

          <div className="card-icons">
            <figure><img width="164" alt="icon" src={LocalImages.Visa} /></figure>
            <figure><img width="120" alt="icon" src={LocalImages.Master} /></figure>
            <figure><img width="135" alt="icon" src={LocalImages.Aex} /></figure>
            <figure><img width="135" alt="icon" src={LocalImages.Discover} /></figure>
            <figure><img width="235" alt="icon" src={LocalImages.Paypal} /></figure>
            <figure><img width="224" alt="icon" src={LocalImages.Venmo} /></figure>
            
          </div>
        </div>
      </section>

      <section className="review-sec">
        <div className="container">
          <h2>What Our Valued Customers Are Saying About Our Products and Services</h2>

          <div className="review-slider">
            <Slider {...reviewSettings}>
              <div className="review-card">
                <div className="review-top">
                  <div className="top">
                    <figure><img width="164" alt="icon" src={LocalImages.DP} /></figure>
                    <div className="text">
                      <p className="h5">Devid</p>
                      <p>Lead Designer</p>
                    </div>
                  </div>

                  <div className="stars">
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-line-icon"></i>
                  </div>
                </div>

                  <div className="text">
                    <p className="h5">It was a very good experience</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                  </div>
              </div>

              <div className="review-card">
                <div className="review-top">
                  <div className="top">
                    <figure><img width="164" alt="icon" src={LocalImages.DP} /></figure>
                    <div className="text">
                      <p className="h5">Devid</p>
                      <p>Lead Designer</p>
                    </div>
                  </div>

                  <div className="stars">
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-line-icon"></i>
                  </div>
                </div>

                  <div className="text">
                    <p className="h5">It was a very good experience</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                  </div>
              </div>

              <div className="review-card">
                <div className="review-top">
                  <div className="top">
                    <figure><img width="164" alt="icon" src={LocalImages.DP} /></figure>
                    <div className="text">
                      <p className="h5">Devid</p>
                      <p>Lead Designer</p>
                    </div>
                  </div>

                  <div className="stars">
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-icon"></i>
                    <i className="star-line-icon"></i>
                  </div>
                </div>

                  <div className="text">
                    <p className="h5">It was a very good experience</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                  </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
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


      <Box sx={{ marginTop: 10}}><Footer /></Box>
      
    </>
  );
};

export default Plans;
