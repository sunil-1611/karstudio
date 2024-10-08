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
import { useNavigate, useLocation } from "react-router-dom";
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
import { saveAs } from 'file-saver'

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
  const location = useLocation()
  const [isImageUpload, setIsImageUpload]  = useState(false)
  const [uploadedImages, setUploadedImages] = useState([]); // State to hold multiple image URLs
  const [selectedImage, setSelectedImage] = useState(null); // State to hold multiple image URLs
  const [finalImage, setFinalImage] = useState(null); // State to hold multiple image URLs
  const [editorList, setEditorList] = useState([]);
  const [hideAddImage, setHideAddImage] = useState(false);
const [openPlate, setOpenPlate] = useState(false)
  const [isAddImage, setIsAddImage] = useState(false); // State to store uploaded image

  const navigate = useNavigate()
  var settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToScroll: 1,
        },
      },
    ],
  };



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
  .then((result) => {
    setEditorList(result?.content)
    let imageUrlObj = null;
if(location?.state?.index === 0 || location?.state?.index){
   imageUrlObj = result?.content[location?.state?.index]?.carStudio?.afterStudioImages[0].afterStudioImageUrl
   setFinalImage(imageUrlObj)
   setUploadedImages([imageUrlObj])
   setIsImageUpload(true)
   setIsAddImage(true)
   setHideAddImage(true)
   setFinalImage(imageUrlObj)

}
  })
  .catch((error) => console.error(error));
  }

  console.log('***djsjdjsd', editorList)
   
  useEffect(() => {
    handleFetchBackgroundImages()
  }, [location?.state?.index])

  // UI for the component

  const handleUploadImageApi = () => {
    // const myHeaders = new Headers();
    // myHeaders.append("apiKey", "CgbmPwqMQNUZzeHAJYAreHKtT");
    // myHeaders.append("Cookie", "JSESSIONID=MTJkMmViNTItMzdhZi00NDhjLWE4ZTctZTkyZTk4Nzg1ZjMx");
    
    // const formdata = new FormData();
    // formdata.append("images[0].fileUrl", "https://img.freepik.com/free-psd/realistic-car-illustration_23-2151227613.jpg");
    // formdata.append("images[0].position", "FRONT");
    // formdata.append("plateImageUrl", "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/saved332093bce91ba24bda424dc75d8ad4e73b2f1b4aad37d027f7dbfcc0553a2c81f03fbbe9-41f4-4ec7-8137-3bbadfe43aa1.png");
    
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: "follow"
    // };
    const result = {
      "success": true,
      "code": "0004",
      "time": "2024-10-08T11:26:24.028+00:00",
      "return": {
          "orderId": "ba8a912e819c406bbc3d1b2e5e66d562",
          "carStudioId": "7063da7e-1302-4077-9e97-4fd91c17e70d",
          "afterStudioImages": [
              {
                  "imageUrl": "https://carstudio.s3.eu-west-1.amazonaws.com/carstudio/saved752cdbdab8aa1f6addc17e55d31a4fdd6bec829edf64655b84c9d4c230e7969af8dcf271-5eec-46a0-9989-7d540ae622b9.png",
                  "position": "FRONT"
              }
          ]
      }
  }
if(result?.return?.afterStudioImages && result?.return?.afterStudioImages.length  > 0){
  setFinalImage(result?.return?.afterStudioImages[0]?.imageUrl)
  setIsAddImage(true)

}
    
    // fetch("https://tokyo.carstudio.ai/webEditor/uploadImagesWithUrlV2", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => setTotalCredits(result?.return?.afterStudioImages))
    //   .catch((error) => console.error(error));
  }

  const handleImageUpload = (event) => {
    
    const files = Array.from(event.target.files); // Convert FileList to array
    if (files.length > 0) {
      setIsImageUpload(true);
      const imageUrls = files.map((file) => URL.createObjectURL(file)); // Create URLs for all uploaded files
      if(uploadedImages.length === 0){
        setSelectedImage(imageUrls)
      }
      setUploadedImages((prevImages) => [...prevImages, ...imageUrls]); // Append the new images to the existing state
    }
  };


 
// Function to remove an image based on its index
const removeImage = (index) => {
  setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
};

const getCurrentDate = () => {
  const date = new Date();
  
  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Pads single digit days with leading zero
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
};

const downloadImage = (imageUrl, imageName) => {
  
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = imageName;  // Name the file for download
  document.body.appendChild(link);  // Append the link to the DOM
  link.click();  // Simulate a click event on the link
  document.body.removeChild(link);  // Remove the link after download
};


console.log('***dsfsdfds23', hideAddImage)

 
  return (
    <>
       <Header />
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
                <Button onClick={() => navigate('/editor')}className="addImage">Return to Projects </Button>{" "}
                {isImageUpload ?  <Typography
                  sx={{
                    fontSize: "1.25rem",
                    lineHeight: "1.4363rem",
                    fontWeight: "500",
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {getCurrentDate()} - {uploadedImages?.length} Upload
                </Typography> : <Typography
                  sx={{
                    fontSize: "1.25rem",
                    lineHeight: "1.4363rem",
                    fontWeight: "500",
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                 </Typography>}
              </Box>
             {(isImageUpload && !hideAddImage) ?  <Button className="addImage" onClick={() => {
             
              setOpenPlate(true)
              
             }}style={{ marginLeft: '85px', padding: "1rem 1.75rem"  }}>
                Add Image
              </Button> : <Typography sx={{ marginLeft: '85px', padding: "1rem 12.50rem" }}></Typography>}
            </Box>

            <Box className="file-upload">
            {/* <img
            src={LocalImages.BackG}
            alt="Background Image"
          /> */}
            {(isAddImage && uploadedImages) ? 
           
                <img
              src={finalImage}
               alt="Uploaded Preview"
                    style={{
                        width: '824px',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
            />
                :     
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
                  onChange={handleImageUpload} // Attach the upload handler here
                  multiple
                />
              </Button> }
            </Box>

            

            {uploadedImages &&uploadedImages.length > 0 &&  <div className="pic-slider">
              <Slider  {...settings}>
                {uploadedImages && uploadedImages.map((image, index) => {
                  return(
                    <div className="pic-img" >
                    <img alt="test" src={image} />
                    <button onClick={() => removeImage(index)}><i className="cross-icon"></i></button>
                  </div>
                  )
                })}
               
                <div className="pic-img">
                  <img alt="test" src={LocalImages.BEFORECAR} />
                  <button><i className="cross-icon"></i></button>
                </div>
               
              </Slider>
            </div>}

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
                  <button onClick={() => downloadImage(finalImage, 'Karstudio.jpg')}className="btn-line" style={{ width: '100% ', cursor: 'pointer'}}>
                  DOWNLOAD SELECTED
                  </button>
                </Box>

                <Box className="" sx={{ width: '50%', paddingLeft:"15px"}}>
                  <button onClick={() => downloadImage(finalImage, 'Karstudio.jpg')}className="btn" style={{ width: '100% ',cursor: 'pointer'}}>
                    Download All Images
                  </button>
                </Box>
              </div>



          </Box>
        </Box>
      </Box>
    

     {openPlate && <PlatePopup setOpenPlate={setOpenPlate} onConfirm={() =>  handleUploadImageApi()} />}

      <Box sx={{ marginTop: 10}}><Footer /></Box>
      
    </>
  );
};

export default Editor;
