// CONTROLADOR PARA PRODUCTOS
// Endoints relacionados con las productos

// Importar los modelos de productos y categorias.
const { Product, Category, sequelize } = require('../models/index.js');

// Objeto con cada endpoint
const ProductController = {

    // Funcion crear producto
    async create(req, res) {
        try {
          const { serial_number, name_product, price_product, CategoryId } = req.body;
      
          if (!serial_number || !name_product || !price_product || !CategoryId) {
            return res.status(400).send({ message: 'Todos los campos son obligatorios' });
          }
      
          const product = await Product.create( req.body);
          res.status(201).send({ message: 'Producto creada con éxito', product });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Ha ocurrido un error al crear el producto' });
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

// Exportar el objeto de endpoints para poder trabajar con ellos
module.exports = ProductController