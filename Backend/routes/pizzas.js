const express = require('express');
const pizzaModel = require('../models/pizzas');

const router = express.Router();


router.get('/get-all-pizzas', async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.json(pizzas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;