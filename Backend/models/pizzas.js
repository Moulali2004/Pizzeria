const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema;

const pizza = new pizzaSchema({
    id: String,
    type: String,
    price: Number,
    name: String,
    image: String,
    description: String,
    ingredients: [],
    topping: [],
});


const pizzaModel = mongoose.model('pizzas', pizza);

module.exports = pizzaModel;