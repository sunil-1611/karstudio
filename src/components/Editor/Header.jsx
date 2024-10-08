import React, { useState, useEffect } from "react";
import {
 
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../pages/styles/HeaderStyle";
 import LocalImages from "../../assets/images";
import MenuIcon from "../../pages/components/Products/Menu";
import PlusIcon from "../../pages/components/Products/PlusIcon";

const Header = () => {
  const navigate = useNavigate()
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
   const [totalCredits, setTotalCredits] = useState(null);
  
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
        .then((response) => response.json())
        .then((result) => setTotalCredits(result?.return?.totalCredits))
        .catch((error) => console.error(error));
      }
    

    fetchCredits();
   }, []);

 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log('***djsdjjsd', totalCredits)

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
            <Link to={"/package"}>Try KarStudio</Link>
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
                <Link sx={{ cursor: "pointer"}} onClick={() =>{
                  navigate('/')
                }} className="logo">
                  {" "}
                  <img alt="test" src={LocalImages.LOGO} />
                </Link>
              </Box>
              <Button
                sx={{ display: { xs: "block", sm: "none" } }}
                className="backtoBtn"
                variant="contained"
                to={"/"}
                onClick={() =>{
                  navigate('/')
                }}
              >
                Back to KarKiosk
              </Button>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Box className="navbarStyle">
                  <Button className="outlinedBtn" variant="contained" to={"/"}>
                    Available Credits: {totalCredits}
                  </Button>
                  <Button   onClick={() =>{
                  navigate('/package')
                }}className="outlinedBtn" variant="contained" to={"/"}>
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
 
    </>
  );
};

export default Header;
