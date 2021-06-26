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
     await queryInterface.bulkInsert('Orders', [{
      number: 1,
      total: 15000,
      users_id: 1,
      states_id: 1,
      shippings_id: 1,
      payment_id: 1,
    },
    {
      number: 2,
      total: 20000,
      users_id: 2,
      states_id: 2,
      shippings_id: 2,
      payment_id: 2,
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
  }
};
