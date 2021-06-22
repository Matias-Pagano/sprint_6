'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Products', [{
      name: 'Tokio',
      description: 'Lorem',
      price: 10000,
      stock: 100,
      stock_min: 1,
      stock_max: 100,
      types_id: 1,
      colors_id: 2,
      genders_id: 1,
    },
    {
      name: 'Osaka',
      description: 'Lorem',
      price: 15000,
      stock: 90,
      stock_min: 1,
      stock_max: 100,
      types_id: 2,
      colors_id: 1,
      genders_id: 1,
   },
   {
    name: 'Okinawa',
    description: 'Lorem',
    price: 25000,
    stock: 56,
    stock_min: 1,
    stock_max: 100,
    types_id: 1,
    colors_id: 3,
    genders_id: 3,
   },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
