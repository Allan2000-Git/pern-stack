const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const restaurantRoutes = require('./routes/restaurants');
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", restaurantRoutes);

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});