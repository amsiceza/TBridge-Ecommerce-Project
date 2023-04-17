'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        score: 4,
        UserId: 1,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 3,
        UserId: 2,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 5,
        UserId: 3,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 2,
        UserId: 4,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 1,
        UserId: 5,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
