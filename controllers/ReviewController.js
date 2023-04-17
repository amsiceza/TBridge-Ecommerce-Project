const { Review, User, Product } = require("../models/index.js");


const ReviewController = {

    async create(req, res, next) {
        try {
            const foundProduct = await Product.findByPk (req.body.ProductId);
            if (!foundProduct) {
                return res.status(404).send({msg:`Producto con id ${foundProduct} no encontrado`})
            }

            const review = await Review.create({ ...req.body, ReviewUserId: req.user.id}); 
            res.status(201).send({msg: `Creada nueva review`, review})
        } catch(error){
            console.error(error);
            next();
        }
    },

    async getAll(req, res) {
        try{
            const reviews = await Review.findAll({
                include: [{ 
                    model: Product, 
                    attributes: ["serial_number", "name_product"]
                }, {
                    model: User,
                    attributes: ["username", "email"]
                 }] 
            })

            res.send(reviews);

        } catch(error){
            console.error(error);
            res.status(500).send(error);
        }
    },

    
    async updateById(req, res) {
        try {
          const review = await Review.findByPk(req.params.id);
          if (review.UserId !== req.user.id) { 
            return res.status(401).send("No autorizado para actualizar esta review");
          }
          const updatedReview = await review.update({
            score: req.body.score
          }, { 
            fields: ['score'] // Solo permite actualizar el campo 'score'
          });
          res.send({ msg: `Review actualizada`, review: updatedReview });
        } catch(error){
          console.error(error);
          res.status(500).send(error);
        }
    },


    async deleteById(req, res) {
        try {
            const review = await Review.findByPk(req.params.id);
            if (review.UserId !== req.user.id) {
                return res.status(401).send("No autorizado para actualizar esta review");
            }
            await review.destroy();
            res.send({msg: `Review borrada`, review})

        } catch(error){
            console.error(error);
            res.status(500).send(error);
        }
    },
        
    










}



module.exports = ReviewController;