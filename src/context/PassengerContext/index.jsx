import { createContext, useEffect, useState } from "react";

const defaultValues = {
    passengers: [],
    setPassengers: () => {}
}

export const PassengerContext = createContext(defaultValues)

const PassengerProvider = ({children}) => {
    const [passengers, setPassengers] = useState([])

    const fetchPassengers = () => {
        fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/passengers')
            .then((res) => res.json())
            .then((data) => setPassengers(data))
    }

    useEffect(() => {
        fetchPassengers()
    }, [])

    return (
        <PassengerContext.Provider value={{
            passengers,
            setPassengers
        }}>
            {children}
        </PassengerContext.Provider>
    )
}

export default PassengerProvider