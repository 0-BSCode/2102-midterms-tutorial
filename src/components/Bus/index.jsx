import { Box, Typography } from '@mui/material'
import React from 'react'
import BusPassenger from '../BusPassenger'

const Bus = ({bus}) => {
  return (
    <Box>
        <Typography>Bus {bus.id}</Typography>
        <Box>
            {bus.passengers.map((busPassenger, idx) => (
                <BusPassenger key={`busPassenger_${idx}`} busPassenger={busPassenger} />
            ))}
        </Box>
    </Box>
  )
}

export default Bus