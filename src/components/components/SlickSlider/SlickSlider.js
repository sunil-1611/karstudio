import { Box, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import slickStyle from './slickstyle';
import LocalImages from '../../../assets/images';

const SlickSlider = () => {
    var settings = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        mobileFirst: true,
        responsive: [
          {
          breakpoint: 1172,
          settings: {
            slidesToShow: 2,
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
    <Box className="common-section paddingTop0">
    <Typography className='section-heading' variant='h2'>Why choose us</Typography>
      <Box sx={slickStyle.slick}>
      <Box className="container">
      <Slider {...settings}>
      <div className='innerCustomslider'>
        <Box className="iconholder">
        <img alt="test" src={LocalImages.SR} />
        </Box>
        <Typography className='title' variant='h3'>Simple Registration</Typography>
        <Typography className='para' >The registration process is simple. Just click the "Register" button and you'll be able to access advanced features for your car buying experience.</Typography>
      </div>
      <div className='innerCustomslider'>
        <Box className="iconholder">
        <img alt="test" src={LocalImages.SR} />
        </Box>
        <Typography className='title' variant='h3'>Simple Registration</Typography>
        <Typography className='para' >The registration process is simple. Just click the "Register" button and you'll be able to access advanced features for your car buying experience.</Typography>
      </div>
      <div className='innerCustomslider'>
        <Box className="iconholder">
        <img alt="test" src={LocalImages.SR} />
        </Box>
        <Typography className='title' variant='h3'>Simple Registration</Typography>
        <Typography className='para' >The registration process is simple. Just click the "Register" button and you'll be able to access advanced features for your car buying experience.</Typography>
      </div>
      
    </Slider>
      </Box>
      </Box>
    </Box>
    </>
  )
}

export default SlickSlider

