const express = require('express');
const router = express.Router();
const db = require('../db/index')

router.get("/api/v1/restaurants", async (req, res) => {
    try {
        const {rows} = await db.query('select * from restaurants left join (select restaurant_id, count(*) as total_reviews, trunc(avg(rating),1) as avg_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json("Error while fetching restaurants data: ", error);
    }
})

router.get("/api/v1/restaurants/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const {rows: restaurantRows} = await db.query(`select * from restaurants left join (select restaurant_id, count(*) as total_reviews, trunc(avg(rating),1) as avg_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = ${id}`);
        const {rows: reviewRows} = await db.query(`SELECT * FROM reviews WHERE restaurant_id = ${id}`)
        res.status(200).json({restaurantRows, reviewRows});
    } catch (error) {
        res.status(500).json("Error while fetching restaurants data: ", error);
    }
})

router.post("/api/v1/restaurants/", async (req, res) => {
    const {name, location, price} = req.body;
    try {
        const {rows} = await db.query("INSERT INTO restaurants(name, location, price) VALUES($1, $2, $3) RETURNING *", [name, location, price]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json("Error while creating restaurant data: ", error);
    }
})

router.patch("/api/v1/restaurants/:id", async (req, res) => {
    const {name, location, price} = req.body;
    const {id} = req.params;
    try {
        const {rows} = await db.query("UPDATE restaurants SET name=$1, location=$2, price=$3 WHERE id=$4 RETURNING *", [name, location, price, id]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json("Error while updating restaurant data: ", error);
    }
})

router.delete("/api/v1/restaurants/:id", async (req, res) => {
    const {id} = req.params;
    try {
        await db.query("DELETE FROM restaurants WHERE id = $1", [id]);
        res.status(200).json(`Row with id: ${id} deleted successfully`);
    } catch (error) {
        res.status(500).json("Error while deleting restaurant data: ", error);
    }
})

// Reviews

router.post("/api/v1/restaurants/:id/review", async (req, res) => {
    const {id: restaurant_id} = req.params;
    const {username, review, rating} = req.body;
    try {
        const {rows} = await db.query("INSERT INTO reviews (restaurant_id, username, review, rating) VALUES($1, $2, $3, $4) RETURNING *", [restaurant_id, username, review, rating]);
        res.status(201).json(rows);
    } catch (error) {
        res.status(500).json("Error while creating restaurant data: ", error);
    }
})

module.exports = router;
