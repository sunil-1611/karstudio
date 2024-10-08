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
  Link,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import '../editor.css'
import styles from "../pages/styles/HeaderStyle";
// import styles from "../../pages/styles/HeaderStyle";
import LocalImages from "../assets/images";
import MenuIcon from "../pages/components/Products/Menu";
import PlusIcon from "./components/Products/PlusIcon";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "./components/Products/CloudUploadIcon";
import Slider from "react-slick";
import PlatePopup from './platePopup'
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

const Editor = () => {
  var settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    mobileFirst: true,
    variableWidth: true,
    // prevArrow: <img src={LocalImages.LEFTARROW} />,
    // nextArrow: <img src={LocalImages.RIGHTARROW} />,
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
      <Box className="container">
        <Box className="editor-holder" sx={styles.editorholder}>
          <Box className="left-editor">
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <Box className="innerbtn">
                <Button className="addImage">Return to Projects </Button>{" "}
                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    lineHeight: "1.4363rem",
                    fontWeight: "500",
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  16.08.2024 - 1 Upload
                </Typography>
              </Box>
              <Button className="addImage" style={{ marginLeft: '85px', padding: "1rem 1.75rem" }}>
                Add Image
              </Button>
            </Box>

            <Box className="file-upload">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Drag and drop images here
                <span>New</span>
                <span className="browse">BROWSE FILES</span>
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </Box>

            {/* <Box sx={{overflow:"hidden"}}>
            <Slider {...settings}>
                <div className="carholder">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                </div>
                <div className="carholder">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                </div>
                <div className="carholder">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                </div>
                <div className="carholder">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                </div>
              </Slider>
            </Box> */}

            <div className="pic-slider">
              <Slider {...settings}>
                <div className="pic-img">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                  <button><i className="cross-icon"></i></button>
                </div>
                <div className="pic-img">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                  <button><i className="cross-icon"></i></button>
                </div>
                <div className="pic-img">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                  <button><i className="cross-icon"></i></button>
                </div>
                <div className="pic-img">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                  <button><i className="cross-icon"></i></button>
                </div>
              </Slider>
            </div>
          </Box>
          <Box className="right-editor">
            <Accordion defaultExpanded>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Background Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="images-holder">
                  <Box className="iteam addplus">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.9998 18.4999H23.5001V2.99987C23.5001 1.61995 22.38 0.5 20.9998 0.5C19.62 0.5 18.4999 1.62001 18.4999 2.99987V18.4999H2.99987C1.62001 18.4999 0.5 19.62 0.5 20.9998C0.5 22.38 1.61995 23.5001 2.99987 23.5001H18.4999V38.9998C18.4999 40.3799 19.6199 41.5 20.9998 41.5C22.38 41.5 23.5001 40.38 23.5001 38.9998V23.5001H38.9998C40.38 23.5001 41.5 22.38 41.5 20.9998C41.5 19.6199 40.3799 18.4999 38.9998 18.4999Z"
                        fill="black"
                        stroke="white"
                      />
                    </svg>
                     <Typography>Add New</Typography>
                  </Box>
                  <Box className="iteam">
                    <img alt="test" src={LocalImages.IMAGE} />
                  </Box>
                  <Box className="iteam">
                    <img alt="test" src={LocalImages.Back1} />
                  </Box>
                  <Box className="iteam">
                    <img alt="test" src={LocalImages.Back2} />
                  </Box>
                  <Box className="iteam">
                    <img alt="test" src={LocalImages.Back3} />
                  </Box>
                  <Box className="iteam">
                    <img alt="test" src={LocalImages.Back4} />
                  </Box>
                </Box>
                <Box className="option">
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Apply to all"
                  />
                  <Button className="next">NEXT: STUDIO SETTINGS</Button>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Studio Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Additional Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div style={{ display: "flex", alignItems: "center" }}>
  
                <Box className="" sx={{ width: '50%', paddingRight:"15px"}}>
                  <button className="btn-line" style={{ width: '100% '}}>
                  DOWNLOAD SELECTED
                  </button>
                </Box>

                <Box className="" sx={{ width: '50%', paddingLeft:"15px"}}>
                  <button className="btn" style={{ width: '100% '}}>
                    Download All Images
                  </button>
                </Box>
              </div>



          </Box>
        </Box>
      </Box>
    

<PlatePopup />

      <Box sx={{ marginTop: 10}}><Footer /></Box>
      
    </>
  );
};

export default Editor;
