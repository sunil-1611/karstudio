import { Box, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import slickStyle from './slickstyle';
import LocalImages from '../../../assets/images';
import Logoico from '../Products/logoico';

const KarKioskSlider = () => {
    var KarKiosk = {
      dots: false,
      arrows:false,
      autoplay:true,
      infinite: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
        breakpoint: 1172,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
    ]
      };
  return (
    
    <>
    <Box className="common-section" sx={slickStyle.KarKiosk}>
    <Typography className='section-heading' variant='h2'>KarKiosk Assured Benefits
    </Typography>
      <Box className="container">
      <Slider {...KarKiosk}>
      <div className='KarKiosk'>
        <img className='KarKioskImg' alt="KarKioskImg" src={LocalImages.KARKIOSK} />
        <Typography className='title' variant='h3'><Logoico/>Unique and Easy to Use 
        Platform</Typography>
      </div>
     
      <div className='KarKiosk'>
        <img className='KarKioskImg' alt="KarKioskImg" src={LocalImages.KARKIOSK} />
        <Typography className='title' variant='h3'><Logoico/>Get Instant quotes for your Used Car</Typography>
      </div>

      <div className='KarKiosk'>
        <img className='KarKioskImg' alt="KarKioskImg" src={LocalImages.KARKIOSK} />
        <Typography className='title' variant='h3'><Logoico/>Unique and Easy to Use 
        Platform</Typography>
      </div>
      <div className='KarKiosk'>
        <img className='KarKioskImg' alt="KarKioskImg" src={LocalImages.KARKIOSK} />
        <Typography className='title' variant='h3'><Logoico/>Unique and Easy to Use 
        Platform</Typography>
      </div>

      <div className='KarKiosk'>
        <img className='KarKioskImg' alt="KarKioskImg" src={LocalImages.KARKIOSK} />
        <Typography className='title' variant='h3'><Logoico/>Get Insurance Quote before you Buy</Typography>
      </div>
      
    </Slider>
      </Box>
     
    </Box>
    </>
  )
}

export default KarKioskSlider

