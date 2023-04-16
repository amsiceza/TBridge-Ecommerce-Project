'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Categories', [
      {
        category_name: 'Deporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Cocina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Cine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Musica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Informatica',
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
