const { Product } = require('../models/index.js');


const ProductController = {

    // Funcion crear producto
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ message: 'Producto creada con éxito', product });
        } catch (error) {
            console.error(error);
        }
    },

    // Encontrar categoria por ID
    async updateById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            const changeProduct = await product.update(req.body);
            res.status(201).send({message: 'Producto actualizado con éxito', changeProduct});
        } catch (error) {
            console.error(error);
        }
    },
    

    
}

module.exports = ProductController