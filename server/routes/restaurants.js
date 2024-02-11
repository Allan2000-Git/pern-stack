const express = require('express');
const router = express.Router();

router.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        data:{
            restaurants:["test1", "test2", "test3"]
        }
    })
})

router.get("/api/v1/restaurants/:id", (req, res) => {
    res.status(200).json(req.params.id)
})

router.post("/api/v1/restaurants/", (req, res) => {
    res.status(200).json(req.body)
})

module.exports = router;
