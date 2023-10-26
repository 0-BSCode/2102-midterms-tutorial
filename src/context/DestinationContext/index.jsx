import { createContext, useState, useEffect } from "react"

const defaultValues = {
    destinations: [],
    setDestinations: () => {}
}

export const DestinationContext = createContext(defaultValues)

/**
 * id
 * destination
 * price
 */

const DestinationProvider = ({children}) => {
    const [destinations, setDestinations] = useState([])

    const fetchDestinations = () => {
        fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/destinations')
            .then((res) => res.json())
            .then((data) => setDestinations(data))
    }

    useEffect(() => {
        fetchDestinations()
    }, [])

    return (
        <DestinationContext.Provider value={{
            destinations,
            setDestinations
        }}>
            {children}
        </DestinationContext.Provider>
    )
}

export default DestinationProvider