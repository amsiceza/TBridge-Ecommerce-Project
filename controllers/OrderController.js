const { Order, Product, OrderProduct } = require('../models/index.js');

const OrderController = {

    // Funcion crear un pedido
    async create(req, res) {
        try {
          const order = await Order.create(req.body);
          await order.addProduct(req.body.ProductId);
          res.status(201).send({message: 'Pedido creado con exito', order});
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Internal server error' });
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
        res.status(200).send({message: 'Pedido encontrado con exito', order});      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
      }
    }
}

module.exports = OrderController