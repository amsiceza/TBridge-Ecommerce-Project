const { Category } = require('../models/index.js');


const CategoryController = {

    // Funcion crear categorias
    async create(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send({ message: 'Categoria creada con éxito', category });
        } catch (error) {
            console.error(error);
        }
    },

    // Funcion crear categorias
    async getById(req, res) {
        try {
            const category = await Category.findByPk(req.params.id);
            res.status(201).send(category);
        } catch (error) {
            console.error(error);
        }
    },

    
}

module.exports = CategoryController