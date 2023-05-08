const express = require('express');
const app = express();
const PORT = 3000
const { typeError } = require('./middleware/errors');
const cors = require("cors")


// Parseamos el body para el json
app.use(express.json())
app.use(cors())
app.use(express.static("./uploads"))

app.use('/users', require('./routes/users'));
app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/reviews', require('./routes/reviews'));

app.use(typeError)


app.listen(PORT, () => console.log('Servidor levantado en el puerto ' + PORT))