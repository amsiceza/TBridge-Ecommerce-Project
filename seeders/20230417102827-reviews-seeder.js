'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        score: 4,
        ReviewUserId: 1,
        ReviewProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 3,
        ReviewUserId: 2,
        ReviewProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 5,
        ReviewUserId: 3,
        ReviewProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 2,
        ReviewUserId: 4,
        ReviewProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 1,
        ReviewUserId: 5,
        ReviewProductId: 3,
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
