'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      // stock_min: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      // stock_max: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      types_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'types',
          key: 'id'
        }
      },
      colors_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'colors',
          key: 'id'
        }
      },
      genders_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'genders',
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
    await queryInterface.dropTable('Products');
  }
};