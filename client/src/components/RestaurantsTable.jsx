import React, { useEffect, useState } from 'react'
import yelpApi from '../api/yelpApi';
import { useYelpContext } from '../context/YelpContext';

const RestaurantsTable = () => {
    const {restaurants, setRestaurants} = useYelpContext();

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
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-25">
                        <td>Mc Donalds</td>
                        <td>Mangalore</td>
                        <td>5</td>
                        <td>5</td>
                        <td className="d-flex gap-3">
                            <button className="btn btn-warning" type="button">Edit</button>
                            <button className="btn btn-danger" type="button">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>Mangalore</td>
                        <td>5</td>
                        <td>5</td>
                        <td className="d-flex gap-3">
                            <button className="btn btn-warning" type="button">Edit</button>
                            <button className="btn btn-danger" type="button">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>Mangalore</td>
                        <td>5</td>
                        <td>5</td>
                        <td className="d-flex gap-3">
                            <button className="btn btn-warning" type="button">Edit</button>
                            <button className="btn btn-danger" type="button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default RestaurantsTable