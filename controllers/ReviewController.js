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
                return res.status(401).send("Not authorised to update this review");
            }
         await review.update(req.body);
            res.send({msg: `Review updated`, review})
         } catch(error){
            console.error(error);
            res.status(500).send(error);
        }
            },


        async deleteById(req, res) {
            try {
                const review = await Review.findByPk(req.params.id);
                if (review.UserId !== req.user.id) {
                    return res.status(401).send("Not authorised to delete this review");
                }
                await review.destroy();
                res.send({msg: `Review deleted`, review})

             } catch(error){
                console.error(error);
                res.status(500).send(error);
            }
                },
        
    










}



module.exports = ReviewController;