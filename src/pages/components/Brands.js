import React from 'react'
import Featured from '../Featured/Featured'
import { Box, Typography } from '@mui/material'
// import ProductsList from './Products/ProductsList'

const brands = () => {
  return (
    <Box className="common-section">
        <Typography className='section-heading' variant='h2'>Our Top Brands</Typography>
        <Featured/>
        {/* <ProductsList /> */}
    </Box>
  )
}

export default brands