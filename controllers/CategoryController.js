const { Category, Product } = require('../models/index.js');


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

    // Encontrar categoria por ID
    async getById(req, res) {
        try {
            const category = await Category.findByPk(req.params.id);
            res.status(201).send(category);
        } catch (error) {
            console.error(error);
        }
    },

    // Encontrar categoria por nombre
    async getByName(req, res) {
        try {
            const category = await Category.findOne({
                where: {
                  category_name: req.params.name
                }
              });
            res.status(201).send({message: `Categoria encontrado con nombre (${req.params.name})`, category});
        } catch (error) {
            console.error(error);
        }
    },

    // Obtener todas las categorias con productos
    async getAllCategories(req, res) {
        try {
            const categories = await Category.findAll({
                include: {
                  model: Product,
                  attributes: ['name_product']
                }
            });
            res.status(201).send({message: 'Aqui mostramos todos las categorias con sus productos', categories});
        } catch (error) {
            console.error(error);
        }
    },

    
}

module.exports = CategoryController