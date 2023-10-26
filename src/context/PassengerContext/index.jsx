import { createContext, useEffect, useState } from "react";

const defaultValues = {
    passengers: [],
    setPassengers: () => {},
    removePassenger: (passengerId) => {}
}

export const PassengerContext = createContext(defaultValues)

/**
 * name
 * id
 * destination 
 */

const PassengerProvider = ({children}) => {
    const [allPassengers, setAllPassengers] = useState([])
    const [passengers, setPassengers] = useState([])

    const fetchPassengers = () => {
        fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/passengers')
            .then((res) => res.json())
            .then((data) => {
                setAllPassengers(data)
                setPassengers(data)
            })
    }

    const removePassenger = (passengerId) => {
        const newPassengerQueue = passengers.filter((passenger) => passenger.id !== passengerId)
        setPassengers(newPassengerQueue)
    }

    useEffect(() => {
        fetchPassengers()
    }, [])

    return (
        <PassengerContext.Provider value={{
            passengers,
            setPassengers,
            removePassenger
        }}>
            {children}
        </PassengerContext.Provider>
    )
}

export default PassengerProvider