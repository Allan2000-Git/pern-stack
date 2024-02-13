import { createContext, useContext, useState } from "react";

export const YelpContext = createContext();

export const YelpContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);

    return (
        <YelpContext.Provider value={{restaurants, setRestaurants}}>
            {children}
        </YelpContext.Provider>
    )
}

export const useYelpContext = () => {
    return useContext(YelpContext); 
}