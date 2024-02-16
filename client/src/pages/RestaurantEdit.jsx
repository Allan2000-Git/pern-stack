import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from "react-router-dom";
import yelpApi from '../api/yelpApi';

const RestaurantEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState(1);

    const handleUpdate = async(e) => {
        e.preventDefault();

        try {
            const response = await yelpApi.patch(`/${id}`, {
                name,
                location,
                price
            })
            navigate("/");
        } catch (error) {
            console.log("Error while updating the data: ", error);
        }
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await yelpApi.get(`/${id}`);
                setName(response.data[0].name);
                setLocation(response.data[0].location);
                setPrice(response.data[0].price);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    },[])

    return (
        <div  className="container mt-5">
            <h1>Update Restaurant</h1>
            <form onSubmit={handleUpdate}>
                <div className="form-group mt-5">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>

                <div className="form-group mt-5">
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
                </div>
                <div className="form-group mt-5 d-flex gap-3 align-items-center">
                    <label htmlFor="price">Price Range</label>
                    <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="range" name="price" min={1} max={5} />
                    <span>{price}</span>
                </div>
                <button type="submit" className="btn btn-primary mt-5">
                    Update
                </button>
            </form>
        </div>
    )
}

export default RestaurantEdit