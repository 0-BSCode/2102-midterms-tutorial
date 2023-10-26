import { createContext, useContext, useState } from "react";
import {PassengerContext} from '../PassengerContext'

const defaultValues = {
    buses: [],
    setBuses: () => {},
    totalSales: 0,
    addPassengerToBus: (passengerInfo, destinationInfo) => {}
}

export const BusContext = createContext(defaultValues)

const BusProvider = ({children}) => {
    const {removePassenger} = useContext(PassengerContext)
    const [totalSales, setTotalSales] = useState(0)
    const [buses, setBuses] = useState([
        {
            id: 1,
            passengers: []
        },
        {
            id: 2,
            passengers: []
        },
        {
            id: 3,
            passengers: []
        },
    ])

    const addPassengerToBus = (passengerInfo, destinationInfo) => {
        // Update passenger info with proper destination
        // Add updated passenger info to bus
        // Update total sales

        removePassenger(passengerInfo.id)
        const updatedPassengerInfo = {...passengerInfo, destination: destinationInfo.destination};
        let busIndex;

        switch (destinationInfo.destination) {
            case "Cebu":
            case "Mandaue":
                busIndex = 1
                break
            case "Lilo-an":
            case "Lapu-Lapu":
                busIndex = 2;
                break
            case "Consolacion":
            case "Talisay":
                busIndex = 3;
                break
            default:
                busIndex = 1;
        }

        const updatedBusQueue = buses.map((bus) => bus.id === busIndex ? {...bus, passengers: [...bus.passengers, updatedPassengerInfo]} : bus)
        setBuses(updatedBusQueue)
        setTotalSales(totalSales + destinationInfo.price)
    }

    return (
        <BusContext.Provider value={{
            buses,
            setBuses,
            totalSales,
            addPassengerToBus
        }}>
            {children}
        </BusContext.Provider>
    )
}

export default BusProvider