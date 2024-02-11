const express = require('express');
const router = express.Router();
const db = require('../db/index')

router.get("/api/v1/restaurants", async (req, res) => {
    // const {rows} = await db.query('SELECT * FROM restaurants');
    res.status(200).json(rows);
})

router.get("/api/v1/restaurants/:id", async (req, res) => {
    // const {rows} = await db.query('SELECT * FROM restaurants');
    res.status(200).json(req.params.id)
})

router.post("/api/v1/restaurants/", (req, res) => {
    res.status(201).json(req.body)
})

router.patch("/api/v1/restaurants/:id", (req, res) => {
    res.status(200).json(req.body)
})

router.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(200).json(req.params.id)
})

module.exports = router;
