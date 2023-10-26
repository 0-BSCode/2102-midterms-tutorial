import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PassengerProvider from './context/PassengerContext/index.jsx'
import DestinationProvider from './context/DestinationContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PassengerProvider>
      <DestinationProvider>
        <App />
      </DestinationProvider>
    </PassengerProvider>
  </React.StrictMode>,
)
