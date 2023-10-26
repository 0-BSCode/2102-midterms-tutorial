import { Button } from '@mui/material'
import React from 'react'

const Destination = ({destination}) => {
  return (
    <Button variant='contained'>{destination.destination}</Button>
  )
}

export default Destination