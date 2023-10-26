import React, { useContext } from 'react'
import { PassengerContext } from '../../context/PassengerContext'
import { DestinationContext } from '../../context/DestinationContext'

const Passenger = ({count, handleClick}) => {
    const {passengers} = useContext(PassengerContext)
    const {destinations} = useContext(DestinationContext)

  return (
    <button onClick={() => handleClick()}>
    count is {count}
  </button>  
  )
}

export default Passenger