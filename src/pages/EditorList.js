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
import { useNavigate } from "react-router-dom";
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
import Header from "../components/Editor/Header";
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
  const [editorList, setEditorList] = useState([]);
  const [totalCredits, setTotalCredits] = useState(null);
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
        .then((response) => response.json())
        .then((result) => setTotalCredits(result?.return?.totalCredits))
        .catch((error) => console.error(error));
      }
    

    fetchCredits();
    handleFetchBackgroundImages()
  }, []);

 
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
  .then((response) => response.json())
  .then((result) => setEditorList(result?.content))
  .catch((error) => console.error(error));
  }
  //handle menu click

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
      <Header />
        <div className="edit-box">
          <Box className="container">
                <div class="project-header">
                  <h2>My Project</h2>
                  <div class="search-container">
                      <input type="text" placeholder="Search for Projects" class="search-input" />
                  </div>
                  <button style={{ cursor: 'pointer'}}  onClick={() =>{
                    navigate('/editor/new')
                  }} class="btn">+ New Project</button>
              </div>

            <div class="projects-cards">
              <div>
                <div class="project-card add-new">
                    <div class="add-icon-container">
                        <i className="upload-icon"></i>
                        <span>Click here Start a New Project</span>
                        <button  onClick={() =>{
                    navigate('/editor/new')
                  }} class="add-btn">ADD</button>
                    </div>
                </div>
              </div>
              {editorList?.length > 0 && editorList.map((item, index) => {
                console.log('***jdjsdjs', item?.carStudio?.afterStudioImages[0].afterStudioImageUrl)
                return(
                  <div key={index}>
                  <div class="project-card">
                      <div className="img">
                        <img src={item?.carStudio?.afterStudioImages[0].afterStudioImageUrl} alt="Car Image" class="car-image" />
                      </div>
                      <div class="project-details">
                            <div className="left">
                              <h3>Unnamed</h3>
                              <div className="d-flex">
                              <p><i className="calendar-icon"></i> 15.08.2024</p>
                              <p><i class="upload-sm-icon"></i> {item?.carStudio?.afterStudioImages.length > 0 ? item?.carStudio?.afterStudioImages.length : 1} Uploads</p>
                              </div>
                            </div>
                            
                            <div className="btn-div">
 
                              <button onClick={() =>  navigate('/editor/new', { state: { index } })} class="edit-btn">Edit <i className="caret-right-icon"></i></button>
                            </div>
                          </div>
                  </div>
                </div>
                )
              })}

             
              
            

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
