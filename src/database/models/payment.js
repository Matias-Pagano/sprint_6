'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.hasOne(models.Order, {
        foreignKey: 'payment_id',
        as: "orders"
      })
    }
  };
  Payment.init({
    type: DataTypes.STRING,
    card_number: DataTypes.INTEGER,
    expiration_date: DataTypes.DATE,
    security_code: DataTypes.INTEGER,
    payments: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};