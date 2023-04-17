// CONTROLADOR PARA CATEGORIAS
// Endoints relacionados con las categorias

// Importar los modelos de productos y categorias.
const { Category, Product } = require('../models/index.js');

// Objeto con cada endpoint
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

    // Funcion get todas categorias
    async getAll(req, res) {
        try {
            const categories = await Category.findAll();
            res.send(categories)
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    // Encontrar categoria por ID
    async getById(req, res) {
        try {
            const category = await Category.findByPk(req.params.id); // findByPk (función propia de sequelize)
            res.status(201).send(category);
        } catch (error) {
            console.error(error);
        }
    },

    // Encontrar categoria por nombre
    async getByName(req, res) {
        try {
            const category = await Category.findOne({
                // Query para buscar por nombre
                where: {
                  category_name: req.params.name
                }
              });
            res.status(201).send({message: `Categoria encontrada por nombre (${req.params.name})`, category});
        } catch (error) {
            console.error(error);
        }
    },

    // Obtener todas las categorias con productos
    async getAllCategories(req, res) {
        try {
            const categories = await Category.findAll({ // Encuentra todas las categorias
                // Incluir en la query (Join)
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


    async updateById(req, res) {
        try {
            const foundCategory = await Category.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (!foundCategory) {
                return res.status(404).send({ msg: `Category con id ${req.params.id} no se ha encontrado` }
                )
            }
            await foundCategory.update(req.body);
            res.send({ msg: "Producto actualizado", foundCategory });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },


    async deleteById(req, res) {
        try {
            const foundCategory = await Category.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (!foundCategory) {
                return res.status(404).send({ msg: `Categoria con id ${req.params.id} not encontrada` });
            }
            await foundCategory.destroy();

            res.send({ msg: "La siguiente categoria ha sido eliminada:", foundCategory })

        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },

    
}

// Exportar el objeto de endpoints para poder trabajar con ellos
module.exports = CategoryController