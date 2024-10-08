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

  const list = [
    {
        "_id": "1c3c17e6220e4151b0d898de5f9e7b59",
        "carStudio": {
            "_id": "fa44572b64e941a9a64396ca01655ebc",
            "afterStudioImages": [
                {
                    "afterStudioImageUrl": "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/saved332093bce91ba24bda424dc75d8ad4e73b2f1b4aad37d027f7dbfcc0553a2c81f03fbbe9-41f4-4ec7-8137-3bbadfe43aa1.png"
                },
                {
                    "afterStudioImageUrl": "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/saveda619e1d8f2601ec95434603a68d65dfe96dfbd59b08213b2bd218aea92bbd1c199046334-4c81-4bb0-b9fd-650bb84661ec.png"
                }
            ]
        }
    },
    {
        "_id": "5ca73e6b0e47443b9d4944cc8d6500f1",
        "carStudio": {
            "_id": "20792e099ec64d21b3362c2b104e5383",
            "afterStudioImages": [
                {
                    "afterStudioImageUrl": "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/savedfaf8357274fbd495733d01e7b1328087b59688d75140dbb26e347f1ec2f6ee165ec64ae9-5c85-40a2-b23a-f61fe153e7c2.png"
                }
            ]
        }
    },
    {
        "_id": "a42f789fa44e401ebc0e2665ee791b5b",
        "carStudio": {
            "_id": "106bcefe822c41d98d7aef87db346647",
            "afterStudioImages": [
                {
                    "afterStudioImageUrl": "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/saved752cdbdab8aa1f6addc17e55d31a4fdd6bec829edf64655b84c9d4c230e7969af8dcf271-5eec-46a0-9989-7d540ae622b9.png"
                }
            ]
        }
    },
    {
        "_id": "ba8a912e819c406bbc3d1b2e5e66d562",
        "carStudio": {
            "_id": "299889214f75435fb733bf725ba48721",
            "afterStudioImages": [
                {
                    "afterStudioImageUrl": "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/savedc4fe61f5fc902582642ead02496372f564c68ee8ff94a79a06c5d0392c1f0ed1ffae2a5a-de46-4c13-a43a-6051bb26a7d6.jpg"
                }
            ]
        }
    }
];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [editorList, setEditorList] = useState(list);
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

// fetch("https://tokyo.carstudio.ai/webEditor/list", requestOptions)
//   .then((response) => response.json())
//   .then((result) => setEditorList(result?.content))
//   .catch((error) => console.error(error));
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
