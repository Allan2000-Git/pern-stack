import { createContext, useContext, useState } from "react";

export const YelpContext = createContext();

export const YelpContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const addRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
    }

    return (
        <YelpContext.Provider value={{restaurants, setRestaurants, addRestaurant, selectedRestaurant, setSelectedRestaurant}}>
            {children}
        </YelpContext.Provider>
    )
}

export const useYelpContext = () => {
    return useContext(YelpContext); 
}