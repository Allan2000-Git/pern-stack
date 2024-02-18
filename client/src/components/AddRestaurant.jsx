import React, { useState } from 'react'
import yelpApi from '../api/yelpApi';
import { useYelpContext } from '../context/yelpContext';

const AddRestaurant = () => {
    const {addRestaurant} = useYelpContext();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newRestaurant = await yelpApi.post("/", {
                name,
                location,
                price
            });

            addRestaurant(newRestaurant);
        } catch (error) {
            console.log("Error while submitting the form: ", error);
        }
    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <div className="row align-items-center">
                    <div className="col">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" type="text" placeholder="Location" />
                    </div>
                    <div className="col">
                        {/* <select value={price} onChange={(e) => setPrice(e.target.value)} className="form-select my-1 mr-sm-2" aria-label="price">
                            <option value="Price Range" disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select> */}
                        <div className="d-flex gap-3">
                            <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="range" name="price" min={1} max={5} />
                            <label className="">{price}</label>
                        </div>
                    </div>
                    <div className="col">
                        <input type="submit" className="btn btn-primary px-4" value="Add" />
                    </div>  
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant