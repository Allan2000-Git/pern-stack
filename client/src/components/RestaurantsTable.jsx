import React, { useEffect, useState } from 'react'
import yelpApi from '../api/yelpApi';
import { useYelpContext } from '../context/YelpContext';
import {useNavigate} from "react-router-dom";

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
                        restaurants.map((restaurant) => (
                            <tr onClick={() => navigate(`/restaurants/${restaurant.id}`)} key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{restaurant.price}</td>
                                <td>5</td>
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