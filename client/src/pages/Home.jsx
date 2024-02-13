import React from 'react'
import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import RestaurantsTable from '../components/RestaurantsTable'

const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <AddRestaurant />
                <RestaurantsTable />
            </div>
        </>
    )
}

export default Home