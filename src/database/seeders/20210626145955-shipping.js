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
     await queryInterface.bulkInsert('Shippings', [{
      first_name: 'John Doe',
      number: 1,
      address: 'Calle Falsa 123',
      location: 'Springfield',
      province: 'Kentucky',
      postal_code: 1234,
      telephone: '43430192',
      email: 'johndoe@gmail.com',
      dni: 12345678
       },
       {
        first_name: 'Mary Doe',
        number: 2,
        address: 'Calle Falsa 678',
        location: 'Shelbyvielle',
        province: 'Alabama',
        postal_code: 1234,
        telephone: '43523192',
        email: 'doemary@gmail.com',
        dni: 12345978
         }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Shippings', null, {});
  }
};
