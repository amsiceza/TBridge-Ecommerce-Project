'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Categories', [
      {
        category_name: 'Maki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Uramaki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Gunkanmaki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Nigiri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
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
