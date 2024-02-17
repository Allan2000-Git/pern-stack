import React, { useEffect } from 'react'
import { useYelpContext } from '../context/YelpContext';
import { useParams, useNavigate} from "react-router-dom";
import yelpApi from '../api/yelpApi';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';

const RestaurantDetail = () => {
    const {id} = useParams();

    const {selectedRestaurant, setSelectedRestaurant} = useYelpContext();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await yelpApi.get(`/${id}`);
                setSelectedRestaurant(response.data[0]);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    },[])

    return (
        <div className="container mt-5">
            <h1 className="text-center">{selectedRestaurant && selectedRestaurant.name}</h1>
            
            <div className="row mt-5">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
    )
}

export default RestaurantDetail