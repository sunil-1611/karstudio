import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from './components/Banner'
import Brands from '../pages/components/Brands'
import Popular from '../pages/components/Popular'
import ProductsList from './components/Products/ProductsList'
import { Box, Typography } from '@mui/material'

import SlickSlider from './components/SlickSlider/SlickSlider'
import KarKioskSlider from './components/SlickSlider/KarKioskSlider'
import Blog from './components/Products/Blog/Blog'
import Carslist from './components/carslist/Carslist'
const Home = () => {
  
  return (
    <>
    <Layout>
      <Banner/>
      <Brands />
      <Popular />
      <Box className="common-section paddingTop0">
        <Typography className='section-heading' variant='h2'>Popular Cars</Typography>
        <ProductsList />
    </Box>
  
    <SlickSlider/>
    <KarKioskSlider/>
    <Blog/>
    <Carslist/>
    </Layout>
 
</>
    
  )
}

export default Home