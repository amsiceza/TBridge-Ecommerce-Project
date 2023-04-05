const { Order } = require('../models/index.js');

const OrderController = {

    // Funcion crear un pedido
    async create(req, res) {
        try {
          const order = await Order.create(req.body);
          await order.addProduct(req.body.ProductId);
          res.send(order);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Internal server error' });
        }
      },

}

module.exports = OrderController