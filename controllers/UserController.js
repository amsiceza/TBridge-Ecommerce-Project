const { User, Order, Token, Product, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"]
const { Op } = Sequelize;
const transporter = require("../config/nodemailer");

const UserController = {

    // Funcion crear usuario
    async create(req, res, next) {
        // req.body.role = "user"; // Rol por defecto
        try {
            const password = await bcrypt.hashSync(req.body.password, 10);
            const user = await User.create({ 
                ...req.body, 
                password, 
                confirmed: false,
                role: "user",
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

     

}

module.exports = UserController