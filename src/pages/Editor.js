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
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

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
import CircularProgress from '@mui/material/CircularProgress';

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

// S3 client configuration
const s3Client = new S3Client({
  endpoint: "https://nyc3.digitaloceanspaces.com",
region: "us-east-1",
  credentials: {
    accessKeyId: "DO00CA7LYRNJTQDRAAZF", // Replace with your actual key
    secretAccessKey: "nDEkIAWT/ofQgfZa9VSY5dAAlza4+N3NsZkUtRtiTFU", // Ensure this is set in your environment
  },
});

const Editor = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isImageUpload, setIsImageUpload]  = useState(false)
  const [bannerIndex, setBannerIndex]  = useState(0)
  const [selectedBanner, setSelectedBanner]  = useState('https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner1.jpg')
  const [activeIndex, setActiveIndex]  = useState(0)
  const [uploadedImages, setUploadedImages] = useState([]); // State to hold multiple image URLs
  const [selectedImage, setSelectedImage] = useState(null); // State to hold multiple image URLs
  const [finalImage, setFinalImage] = useState([]); // State to hold multiple image URLs
  const [editorList, setEditorList] = useState([]);
  const [hideAddImage, setHideAddImage] = useState(false);
const [openPlate, setOpenPlate] = useState(false)
  const [isAddImage, setIsAddImage] = useState(false); // State to store uploaded image

  const navigate = useNavigate()
  var settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    // prevArrow: <img src={LocalImages.LEFTARROW} />,
    // nextArrow: <img src={LocalImages.RIGHTARROW} />,
    responsive: [
      {
        breakpoint: 1172,
        settings: {
          slidesToShow: 1,
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
    setLoading(true)
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
  setIsImageUpload(true)
   setIsAddImage(true)
   setHideAddImage(true)
   setFinalImage([imageUrlObj])
   setUploadedImages([imageUrlObj])
   setLoading(false)
   setIsSaved(true)


}
setLoading(false)

  })
  .catch((error) => console.error(error));
  }

  console.log('***djsjdjsd', editorList)
   
  useEffect(() => {
    if(location?.state?.index){
      handleFetchBackgroundImages()

    }
  }, [location?.state?.index])

  // UI for the component

  const uploadImageToS3 = async (file) => {
    const params = {
      Bucket: "assets.karstudio", // Your bucket name
      Key: `static/${file.name}`, // File name, customize path if needed
      Body: file,
      ACL: "public-read", // Makes the file publicly accessible
    };
  
    try {
      await s3Client.send(new PutObjectCommand(params));
      const uploadedUrl = `https://nyc3.digitaloceanspaces.com/assets.karstudio/static/${file.name}`;
      return uploadedUrl; // Return the URL after upload
    } catch (err) {
      console.error("Error uploading file to S3", err);
      return null;
    }
  };
  
  // Handle image upload and store S3 URLs
  const handleImageUpload = async (event) => {
    setLoading(true)
    const files = Array.from(event.target.files); // Convert FileList to array
    if (files.length > 0) {
      setIsImageUpload(true);
  
      // Map over files and upload them to S3
      const uploadPromises = files.map(file => uploadImageToS3(file));
  
      // Wait for all uploads to complete
      const uploadedUrls = await Promise.all(uploadPromises);
  
      // Filter out any failed uploads (null values)
      const successfulUploads = uploadedUrls.filter(url => url !== null);
  
      // Store the URLs in the state
      setUploadedImages(prevImages => [...prevImages, ...successfulUploads]);
      setLoading(false)

    }
  };

  console.log('***asdasd', uploadedImages)

  

  const handleUploadImageApi = (imagesArr) => {
    setLoading(true)

    const myHeaders = new Headers();
    myHeaders.append("apiKey", "CgbmPwqMQNUZzeHAJYAreHKtT");
    myHeaders.append("Cookie", "JSESSIONID=MTJkMmViNTItMzdhZi00NDhjLWE4ZTctZTkyZTk4Nzg1ZjMx");
  
    const formdata = new FormData();
  
    // Dynamically append each image from the array
    imagesArr.forEach((imageUrl, index) => {
      formdata.append(`images[${index}].fileUrl`, imageUrl);
      // You can set different positions based on your needs
      formdata.append(`images[${index}].position`, "FRONT");
    });
  
    // Append other necessary fields
    formdata.append("plateImageUrl", selectedBanner);
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };
  
    fetch("https://tokyo.carstudio.ai/webEditor/uploadImagesWithUrlV2", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('***sdsds', result?.return?.afterStudioImages)
        if (result?.return?.afterStudioImages && result?.return?.afterStudioImages.length > 0) {
          const arr = result?.return?.afterStudioImages.map((item) => {
            return item.imageUrl
          })
          
          setFinalImage(arr);
          setIsAddImage(true);
          setLoading(false)

        }
      })
      .catch((error) => setLoading(false));
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
console.log('***kaskds', finalImage)

const downloadImage = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to download all images from the array
const downloadAllImages = (imagesArr) => {
  imagesArr.forEach((imageUrl, index) => {
    const filename = `Karstudio_${index + 1}.jpg`;  // Naming the images dynamically
    downloadImage(imageUrl, filename);
  });
};


console.log('***dsfsdfds23', activeIndex)
useEffect(() => {
  if (loading || openPlate) {
    // Disable scroll
    document.body.style.overflow = 'hidden';
  } else {
    // Re-enable scroll
    document.body.style.overflow = 'auto';
  }

  // Cleanup: Re-enable scrolling when the component unmounts or loading stops
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [loading, openPlate]);
 
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
                  {getCurrentDate()} - {uploadedImages?.length}Upload
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

            <Box className="file-upload" >
            {/* <img
            src={LocalImages.BackG}
            alt="Background Image"
          /> */}
            {(isAddImage && finalImage.length > 0) ? 
           
                <img
              src={finalImage[activeIndex]}
               alt="Uploaded Preview"
                    style={{
                        width: '824px',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
            />
                :     
               !loading && <Button
               
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon style={{marginTop: '80px'}}/>}
              >
                Drag and drop images here
                <span>New</span>
                <span className="browse" style={{marginBottom: "112px"}}>BROWSE FILES</span>
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleImageUpload} // Attach the upload handler here
                  multiple
                />
              </Button> }
            </Box>

            

            {uploadedImages &&uploadedImages.length > 0 &&  <div className="pic-slider">
              <Slider  
              {...{
                ...settings, // Base settings
                slidesToScroll: uploadedImages.length > 1 ? 1 : 0, // Disable infinite scrolling if only one image
              }}>
                {uploadedImages && uploadedImages.map((image, index) => {
                  return(
                    <div className="pic-img" onClick={(e) => {
                      debugger
                      e.preventDefault();
                      setActiveIndex(index)
                    }
                    }>
                    <img alt="test" src={image} />
                    {!isSaved && <button onClick={() => removeImage(index)}><i className="cross-icon"></i></button>}
                  </div>
                  )
                })}
               
                <div className="pic-img">
                 
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
                    <img onClick={() => {
                      setSelectedBanner('https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner1.jpg')
                      setBannerIndex(0)
                    }} className={bannerIndex === 0 ?"active" : ""} alt="test" src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner1.jpg" />
                  </Box>
                  <Box onClick={() => {
                      setSelectedBanner('https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner2.jpg')
                      setBannerIndex(1)
                   }} className="iteam">
                    <img className={bannerIndex === 1 ?"active" : ""} alt="test" src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner2.jpg" />
                  </Box>
                  <Box onClick={() => {
                      setSelectedBanner('https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner3.jpg')
                      setBannerIndex(2)
                    }} className="iteam">
                    <img className={bannerIndex === 2 ?"active" : ""} alt="test" src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner3.jpg" />
                  </Box>
                  <Box onClick={() => {
                      setSelectedBanner('https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner4.jpg')
                      setBannerIndex(3)
                   }} className="iteam">
                    <img className={bannerIndex === 3 ?"active" : ""} alt="test" src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner4.jpg" />
                  </Box>
                  <Box onClick={() => {
                      setSelectedBanner('https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner5.jpg')
                      setBannerIndex(4)
                   }} className="iteam">
                    <img className={bannerIndex === 4 ?"active" : ""} alt="test" src="https://nyc3.digitaloceanspaces.com/assets.karstudio/static/banner5.jpg" />
                  </Box>
                </Box>
                <Box className="option">
                  <FormControlLabel
                    required
                    control={<Checkbox  checked={true}/>}
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
                  <button onClick={() => downloadImage(finalImage[activeIndex],'Karstudio.jpg')}className="btn-line" style={{ width: '100% ', cursor: 'pointer'}}>
                  DOWNLOAD SELECTED
                  </button>
                </Box>

                <Box className="" sx={{ width: '50%', paddingLeft:"15px"}}>
                  <button onClick={() => downloadAllImages(finalImage)} className="btn" style={{ width: '100% ',cursor: 'pointer'}}>
                    Download All Images
                  </button>
                </Box>
              </div>



          </Box>
        </Box>
      </Box>
    

     {openPlate && <PlatePopup setOpenPlate={setOpenPlate} onConfirm={() =>  handleUploadImageApi(uploadedImages)} />}

      <Box sx={{ marginTop: 10}}><Footer /></Box>
      {loading && <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Back shadow
        zIndex: 9999, // Ensure it's on top of other elements
      }}>
      <CircularProgress size={100} thickness={3}/>
    </Box>}
    </>
  );
};

export default Editor;
