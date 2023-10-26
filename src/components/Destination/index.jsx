import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { BusContext } from '../../context/BusContext'

const Destination = ({destination, passenger}) => {
    const {addPassengerToBus} = useContext(BusContext)

  return (
    <Button variant='contained' onClick={() => addPassengerToBus(passenger, destination)}>{destination.destination}</Button>
  )
}

export default Destination