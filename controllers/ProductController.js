const { Product, Category, sequelize } = require('../models/index.js');


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

    // Actualizar por ID
    async updateById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            const changeProduct = await product.update(req.body);
            res.status(201).send({message: 'Producto actualizado con éxito', changeProduct});
        } catch (error) {
            console.error(error);
        }
    },

    // ELiminar por ID
    async deleteById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            const deleteProduct = await product.destroy();
            res.status(201).send({message: 'Producto eliminado con éxito', deleteProduct});
        } catch (error) {
            console.error(error);
        }
    },

    // Obtener todos productos con categorias
    async getAllProducts(req, res) {
        try {
            const products = await Product.findAll({
                include: {
                  model: Category,
                  attributes: ['category_name']
                }
            });
            res.status(201).send({message: 'Aqui mostramos todos los productos con categorias', products});
        } catch (error) {
            console.error(error);
        }
    },

    // Encontrar producto por ID
    async getById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            res.status(201).send({message: `Producto encontrado con ID (${req.params.id})`, product});
        } catch (error) {
            console.error(error);
        }
    },

    // Encontrar producto por nombre
    async getByName(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                  name_product: req.params.name
                }
              });
            res.status(201).send({message: `Producto encontrado con nombre (${req.params.name})`, product});
        } catch (error) {
            console.error(error);
        }
    },

    // Encontrar producto por nombre
    async getByPrice(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                  price_product: req.params.price
                }
              });
            res.status(201).send({message: `Producto encontrado con precio (${req.params.price} €)`, product});
        } catch (error) {
            console.error(error);
        }
    },

    // Ordenar descendente por precio
    async orderDesc(req, res) {
        try {
            const products = await Product.findAll({
                order: [['price_product', 'DESC']]
              });
            res.status(201).send({message: `Productos ordenados  descendente por precio `, products});
        } catch (error) {
            console.error(error);
        }
    },
    

    
}

module.exports = ProductController