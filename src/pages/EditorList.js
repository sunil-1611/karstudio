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
  TableFooter,
  Toolbar,
  Typography,
} from "@mui/material";
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
const Editor = () => {
  var settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
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
        <div className="edit-box">
          <Box className="container">
                <div class="project-header">
                  <h2>My Project</h2>
                  <div class="search-container">
                      <input type="text" placeholder="Search for Projects" class="search-input" />
                  </div>
                  <button class="btn">+ New Project</button>
              </div>

            <div class="projects-cards">
              <div>
                <div class="project-card add-new">
                    <div class="add-icon-container">
                        <i className="upload-icon"></i>
                        <span>Click here Start a New Project</span>
                        <button class="add-btn">ADD</button>
                    </div>
                </div>
              </div>

              <div>
                <div class="project-card">
                    <div className="img">
                      <img src={LocalImages.CAR} alt="Car Image" class="car-image" />
                    </div>
                    <div class="project-details">
                          <div className="left">
                            <h3>Unnamed</h3>
                            <div className="d-flex">
                            <p><i className="calendar-icon"></i> 15.08.2024</p>
                            <p><i class="upload-sm-icon"></i> 1 Uploads</p>
                            </div>
                          </div>
                          
                          <div className="btn-div">
                            <button class="edit-btn">Edit <i className="caret-right-icon"></i></button>
                          </div>
                        </div>
                </div>
              </div>
              
                <div class="">
                    <div class="project-card">
                      <div className="img">
                        <img src={LocalImages.CAR} alt="Car Image" class="car-image" />
                      </div>
                        <div class="project-details">
                          <div className="left">
                            <h3>Unnamed</h3>
                            <div className="d-flex">
                            <p><i className="calendar-icon"></i> 15.08.2024</p>
                            <p><i class="upload-sm-icon"></i> 1 Uploads</p>
                           </div>
                          </div>
                          
                          <div className="btn-div">
                            <button class="edit-btn">Edit <i className="caret-right-icon"></i></button>
                          </div>
                        </div>
                    </div>
                </div>

              </div>
              
              
              <div class="pagination-container">
                  <label for="view-select">View</label>
                  <select id="view-select">
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                  </select>
                  <div class="pagination-controls">
                      <span>1-1 of 1</span>
                      <button class="pagination-btn prev"><i className="prev-icon"></i></button>
                      <button class="pagination-btn next"><i className="next-icon"></i></button>
                  </div>
              </div>

                  
          </Box>
        </div>
      <Footer />

    </>
  );
};

export default Editor;
