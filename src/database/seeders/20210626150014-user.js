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
     await queryInterface.bulkInsert('Users', [{
      first_name: "John",
    last_name: "Doe",
    email: "johndoe@gmail.com",
    password: "1234567890",
    gender: "Masculino",
    telephone: "43430192",
    avatar: "Avatar1.jpg"
    },
    {
      first_name: "Mary",
      last_name: "Doe",
      email: "doemary@gmail.com",
      password: "1234567890",
      gender: "Femenina",
      telephone: "43523192",
      avatar: "Avatar2.jpg"
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
