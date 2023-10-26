import { useContext } from 'react'
import './App.css'
import Passenger from './components/Passenger'
import { PassengerContext } from './context/PassengerContext'
import {BusContext} from './context/BusContext'
import { Box, Typography } from '@mui/material'
import Bus from './components/Bus'

function App() {
  const {passengers} = useContext(PassengerContext)
  const {buses, totalSales} = useContext(BusContext)

  console.log(buses)

  return (
    <>
      <Typography>Sales: {totalSales}</Typography>
      <Box display='flex' gap={1}>
      {passengers.map((passenger, idx) => (
        <Passenger key={`passenger_${idx}`} passenger={passenger} />
      ))}
      </Box>
      <Box display='flex' gap={1}>
        {buses.map((bus, idx) => (
          <Bus key={`bus_${idx}`} bus={bus} />
        ))}
      </Box>
    </>
  )
}

export default App
