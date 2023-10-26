import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PassengerProvider from './context/PassengerContext/index.jsx'
import DestinationProvider from './context/DestinationContext/index.jsx'
import BusProvider from './context/BusContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PassengerProvider>
      <DestinationProvider>
        <BusProvider>
        <App />
        </BusProvider>
      </DestinationProvider>
    </PassengerProvider>
  </React.StrictMode>,
)
