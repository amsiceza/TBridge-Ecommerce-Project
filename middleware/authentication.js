const { User, Token, Sequelize } = require("../models");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

// Check authentication
const authentication = async (req, res, next ) => {
    try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [{ UserId: user.id }, { token: token }],
      },
    });
    if (!tokenFound) {
      return res.status(401).send({ msg: "No estás autorizado" });
    }
    req.user = user; 
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, msg: "Ha habido un problema con el token" });
  }
};


// Check si es admin
const isAdmin = async (req, res, next) => {
  try {
      const role = req.user.role;
      if (role === "admin") {
        next();
      } else {
        return res.status(403).send({ msg: "No tienes permisos" })
      }
      
      } catch (error) {
      console.error(error);
      res.status(500).send(error);
}
}


module.exports = { authentication, isAdmin };
