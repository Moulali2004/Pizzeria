const express = require('express');
const pizzaModel = require('../models/pizzas');

const router = express.Router();

let cart = [];

router.post('/add-to-cart', async (req, res) => {
    const pizza = req.body;
    if(pizza && pizza._id) {
        cart.push(pizza);
        res.status(200).json({ message: 'Pizza added to cart'});
    } else {
        res.status(400).json({ message: 'Invalid pizza data' });
    }
});

router.get('/items', async (req, res) => {
    res.status(200).json(cart);
})

router.delete('/delete-item/:id', (req, res) => {
    const { id } = req.params;
    const index = cart.findIndex(item => item._id === id);
    
    if (index !== -1) {
        cart.splice(index, 1);
        res.status(200).json({ message: 'Item removed from cart' });
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
});

// new route to clear all items from the cart
router.delete('/clear', (req, res) => {
    cart = [];
    res.status(200).json({ message: 'Cart cleared' });
});


module.exports = router;