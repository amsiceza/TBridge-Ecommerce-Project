// CONTROLADOR PARA PEDIDOS
// Endoints relacionados con las categorias

// Importar los modelos de productos y pedidos.
const { Order, Product } = require('../models/index.js');

// Objeto con cada endpoint
const OrderController = {

    // Funcion crear un pedido
    async create(req, res) {
      try {
          const orderArray = req.body.productAndQuantity; 
          for (pair of orderArray) {
              const product = await Product.findByPk(pair.ProductId);  
              if (!product) {
                  return res.status(404).send({ msg: `Product with id ${pair.ProductId} not found.` })
              }
          };
          const order = await Order.create({ ...req.body, UserId: req.user.id })
          orderArray.forEach(pair => {
              order.addProduct(pair.ProductId, { through: { amount: pair.amount } }) 
          })

          res.status(201).send({ msg: "Order created", order })
      } catch (error) {
          res.status(500).send(error);
      }
  },

    // Mostrar todos los pedidos con sus productos
    async getOrderProduct(req, res) {
      try {
        const order = await Order.findAll({
          include: {
            model: Product,
            attributes: ['id', 'name_product','price_product'],
            through: { attributes: [] },
          },
        });
        res.status(200).send({message: 'Pedido encontrado con exito', order});
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
      }
    }
}

// Exportar el objeto de endpoints para poder trabajar con ellos
module.exports = OrderController