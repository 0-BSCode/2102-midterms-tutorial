import React, { useContext } from 'react'
import { DestinationContext } from '../../context/DestinationContext'
import Destination from '../Destination'
import { Box } from '@mui/material'

const Passenger = ({passenger}) => {
    const {destinations} = useContext(DestinationContext)

  return (
    <Box bgcolor='skyblue' px={2} py={1} borderColor='black' border='solid'>
      <p>{passenger.id}</p>
      <p>{passenger.name}</p>
      <Box display='flex' gap={1}>
        {destinations.map((destination, idx) => (
          <Destination key={`destination_${idx}`} destination={destination} passenger={passenger} />
        ))}
      </Box>
    </Box>
  )
}

export default Passenger