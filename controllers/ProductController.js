const { Product } = require('../models/index.js');


const ProductController = {

    // Funcion crear categorias
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ message: 'Producto creada con éxito', product });
        } catch (error) {
            console.error(error);
        }
    },

    

    
}

module.exports = ProductController