import { Box, Typography } from '@mui/material'
import React from 'react'

const BusPassenger = ({busPassenger}) => {
  return (
    <Box>
        <Typography>{busPassenger.id}</Typography>
        <Typography>{busPassenger.name}</Typography>
    </Box>
  )
}

export default BusPassenger