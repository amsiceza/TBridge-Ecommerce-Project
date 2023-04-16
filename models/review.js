'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User),
      Review.belongsTo(models.Product)    }
  }
  Review.init({

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Debe ser rellenado el campo score"
        },
        max: {
          args: [10],
          msg: "Introduzca valor entre 0 - 10"
        },
        min: {
          args: [0],
          msg: "Introduzca valor entre 0 - 10"
        }
      }
    },
    
    ReviewProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Producto id tiene que ser rellenado"
        },
      }
    },

    ReviewUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Usuario id tiene que ser rellenado"
        },
      }
    },
   
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};