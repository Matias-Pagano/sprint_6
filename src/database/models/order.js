'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.State, {
        foreignKey: 'states_id',
        as: "states"
      });
      Order.belongsTo(models.Shipping, {
        foreignKey: 'shippings_id',
        as: "shipping"
      });
      Order.belongsTo(models.User, {
        foreignKey: 'users_id',
        as: "user"
      });
      Order.belongsTo(models.Payment, {
        foreignKey: 'payment_id',
        as: "payment"
      });
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    users_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER,
    shippings_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};