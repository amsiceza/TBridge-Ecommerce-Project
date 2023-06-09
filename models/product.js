'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Review);
      Product.belongsTo(models.Category); 
      Product.belongsToMany(models.Order,{
        through:models.OrderProduct
      })
    }
  }
  Product.init({
    
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La descripcion es obligatorio"
        },
      }
    },

    name_product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre de producto es obligatorio"
        },
      }
    },

    price_product: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El precio es obligatorio"
        },
        isFloat: {
          msg:"Pon un precio valido"
        }
     }
    } ,
    
    CategoryId: {
      type: DataTypes.INTEGER,
    },

    img: {
      type: DataTypes.STRING,
    }
    
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};