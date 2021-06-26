'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shipping.hasOne(models.Order, {
        foreignKey: 'shippings_id',
        as: "orders"
      })
    }
  };
  Shipping.init({
    first_name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    province: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};