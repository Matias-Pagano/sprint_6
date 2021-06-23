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
      // define association here
      Product.belongsTo(models.Color, {
        foreignKey: 'colors_Id',
        as: "color"
      });
      Product.belongsTo(models.Gender, {
        foreignKey: 'genders_id',
        as: "gender"
      });
      Product.hasMany(models.Image, {
        foreignKey: 'product_id',
        as: "images"
      });
      Product.belongsTo(models.Type, {
        foreignKey: 'types_id',
        as: "type"
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    // stock_min: DataTypes.INTEGER,
    // stock_max: DataTypes.INTEGER,
    types_id: DataTypes.INTEGER,
    colors_id: DataTypes.INTEGER,
    genders_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};