'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      {
        amount: 10,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 20,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 30,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 40,
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 50,
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
