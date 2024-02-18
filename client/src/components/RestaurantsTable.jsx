import React, { useEffect, useState } from 'react'
import yelpApi from '../api/yelpApi';
import { useYelpContext } from '../context/yelpContext';
import {useNavigate} from "react-router-dom";
import StarRating from './StarRating';

const RestaurantsTable = () => {
    const {restaurants, setRestaurants} = useYelpContext();
    const navigate = useNavigate();

    const handleUpdate = (event, restaurantId) => {
        event.stopPropagation();
        navigate(`restaurants/${restaurantId}/edit`)
    }

    const handleDelete = async (event, restaurantId) => {
        event.stopPropagation();
        try {
            await yelpApi.delete(`/${restaurantId}`);
            const allRestaurants = restaurants.filter(restaurant => restaurant.id !== restaurantId);
            setRestaurants(allRestaurants);
        } catch (error) {
            console.log(error.message);
        }
    }

    const showRatings = (restaurant) => {
        if(restaurant.total_reviews === 0){
            return <span className="text-warning">0 reviews</span>
        }
        return(
            <div className="d-flex align-items-center gap-2">
                <StarRating rating={restaurant.avg_rating} />
                <span className="text-warning">({restaurant.total_reviews})</span>
            </div>
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await yelpApi.get("/");
                setRestaurants(response.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    },[])

    return (
        <>
            <table className="table table-dark table-striped table-hover mt-5">
                <thead>
                    <tr className="thead-row">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants?.map((restaurant) => (
                            <tr onClick={() => navigate(`/restaurants/${restaurant.id}`)} key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{restaurant.price}</td>
                                <td>{showRatings(restaurant)}</td>
                                <td className="d-flex gap-3">
                                    <button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning" type="button">Edit</button>
                                    <button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger" type="button">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default RestaurantsTable