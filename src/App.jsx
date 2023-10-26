import { useContext } from 'react'
import './App.css'
import Passenger from './components/Passenger'
import { PassengerContext } from './context/PassengerContext'
import { Box } from '@mui/material'

function App() {
  const {passengers} = useContext(PassengerContext)

  return (
    <>
      <Box display='flex' gap={1}>
      {passengers.map((passenger, idx) => (
        <Passenger key={`passenger_${idx}`} passenger={passenger} />
      ))}
      </Box>
    </>
  )
}

export default App
