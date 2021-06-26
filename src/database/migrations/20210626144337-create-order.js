'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      total: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      users_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      states_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'states',
          key: 'id'
        }
      },
      shippings_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'shippings',
          key: 'id'
        }
      },
      payment_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};