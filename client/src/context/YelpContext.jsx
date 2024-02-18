import { createContext, useContext, useState } from "react";

export const YelpContext = createContext();

export const YelpContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedRestaurantReview, setSelectedRestaurantReview] = useState([]);

    const addRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
    }

    const addRestaurantReview = (newRestaurantReview) => {
        setSelectedRestaurantReview([...selectedRestaurantReview, newRestaurantReview]);
    }

    return (
        <YelpContext.Provider value={{restaurants, setRestaurants, addRestaurant, selectedRestaurant, setSelectedRestaurant, selectedRestaurantReview, setSelectedRestaurantReview, addRestaurantReview}}>
            {children}
        </YelpContext.Provider>
    )
}

export const useYelpContext = () => {
    return useContext(YelpContext); 
}