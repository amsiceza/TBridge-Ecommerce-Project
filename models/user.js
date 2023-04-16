'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order); 
      User.hasMany(models.Token);
      User.hasMany(models.Review); 

   
    }
  }
  User.init({

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Firstname es obligatorio"
        }
      }
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Lastname es obligatorio"
        }
      }
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Username es obligatorio"
        }
      }
    },

    email: { 
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,
      validate: {
        notNull: {    
          msg: "Email es obligatorio"
        },
        isEmail: { 
          msg: "Email no valido"
        }
      }
    },
  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password es obligatoria"
        }
      }
    },

    confirmed: {  
      type: DataTypes.BOOLEAN,
    },

    role: {  
      type: DataTypes.STRING,
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};