import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductsList from './Products/ProductsList'
import FeaturedPopular from '../Featured/FeaturedPopular'

const popular = () => {
  return (
    <Box className="common-section paddingTop0">
        <Typography className='section-heading' variant='h2'>Popular Cars by Body Type</Typography>
        <FeaturedPopular/>
        <ProductsList />
    </Box>
  )
}

export default popular