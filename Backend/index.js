const express = require('express');
const cors = require('cors');

const connectDB = require('./connection/connection');
const ingredientRoutes = require('./routes/ingredients');
const pizzaRoutes = require('./routes/pizzas');
const cartRoutes = require('./routes/cart');

connectDB();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ingredients', ingredientRoutes);
app.use('/pizzas', pizzaRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});