// CONTROLADOR PARA PRODUCTOS
// Endoints relacionados con las productos

// Importar los modelos de user, token, sequelize
const { User, Order, Token, Product, Sequelize } = require("../models/index.js");
// Importamos bcrypts
const bcrypt = require("bcryptjs");
// Importamos jsonwebtoken con sus secretito
const jwt = require("jsonwebtoken");
// Secreto puesto en desarrollo
const { jwt_secret } = require("../config/config.json")["development"]
const { Op } = Sequelize;
// Importamos archivo nodemailer.js
const transporter = require("../config/nodemailer");

// Objeto con cada endpoint
const UserController = {

    // Funcion crear usuario
    async create(req, res, next) {
        try {
            const password = await bcrypt.hashSync(req.body.password, 10);
           // Establece el valor predeterminado de "user" para el campo "role"
            const role = req.body.role || "user"; 
            
            const user = await User.create({ 
                ...req.body, 
                password, 
                confirmed: false,
                role,
         }); 

            const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn: '24h' })
            const url = 'http://localhost:3000/users/confirm/' + emailToken  
             

            await transporter.sendMail({   
                to: req.body.email,
                subject: "Confirma tu email para confirmar tu registro",
                html: `<h3>¡Estás muy cerca!</h3>
                    <a href="${url}">Pincha en el enlaze para empezar a navegar</a>
                    <p>El link caduca en 24h</p>`,
            });
            res.status(201).send({
                msg: "Email of confirmation sent",
                user,
            });

        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    // Endpoint para confirmar usuario
    async confirm(req,res){
        try {
            const token = req.params.emailToken
            const payload = jwt.verify(token,jwt_secret)
            await User.update({confirmed:true},{
            where:{
                email: payload.email
            }
        })
        res.status(201).send( "Usuario confirmado con éxito" );
        } catch (error) {
            console.error(error)
        }
    },

    // Funcion login match
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: { email: req.body.email }
            });
            if (!user) {
                return res.status(400).send("Email o contraseña incorrecto");
            }
            if (!user.confirmed) {  
                return res.status(400).send({ msg: "Revisa tu email para confirmar tu correo" })
            }

            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                res.status(400).send("Email o contraseña incorrecto");
            }
            const token = jwt.sign({ id: user.id }, jwt_secret); 
            Token.create({ token, UserId: user.id }); 
            res.send({ token, msg: `Bienvenida ${user.username}`, user });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    // Funcion Log Out
    // Primero deberiamos crear autenticacion
    async logout(req, res) {  
        console.log(req.user);
        try {
            console.log(req.headers.authorization);
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ msg: `Desconectado ${req.user.username}` });
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al desconectarse");
        }

    },

    // Mostrar usuarios con sus pedidos y productos
    async getUserOrderProduct(req, res) {
        try {
            const user = await User.findByPk(req.params.id, {
                attributes: ["id", "username", "email"],
                include: [{
                    model: Order,
                    attributes: ["id"],
                    include: [{ 
                        model: Product, 
                        attributes: ["name_product", "price_product"],
                        through: {attributes: []} // No muestra tabla intermedia
                     }]  
                }]
            });
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

}

// Exportar el objeto de endpoints para poder trabajar con ellos
module.exports = UserController