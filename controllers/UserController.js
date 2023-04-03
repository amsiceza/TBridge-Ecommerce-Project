const { User, Token } = require('../models/index.js');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {

    // Funcion crear usuario
    async create(req, res) {
        try {
            req.body.role = "user";
            const password = bcrypt.hashSync(req.body.password,10)
            const user = await User.create({...req.body, password: password});
            res.status(201).send({ message: 'Usuario creado con éxito', user });
        } catch (error) {
            console.error(error);
        }
    },

    // Funcion login match
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                username: req.body.username,
                },
            });
            if (!user) {
                return res.status(400).send({ message: "Usuario o contraseña incorrectos" });
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({ message: "Usuario o contraseña incorrectos" });
            }
            let token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send({ message: 'Bienvenid@ ' + user.username, user, token });
        } catch (error) {
          console.error(error);
        }
      },

}

module.exports = UserController