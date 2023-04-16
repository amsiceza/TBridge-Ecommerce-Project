'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
        {
          serial_number: 'SN-0001',
          name_product: 'Producto 1',
          price_product: 10.99,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          serial_number: 'SN-0002',
          name_product: 'Producto 2',
          price_product: 20.99,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          serial_number: 'SN-0003',
          name_product: 'Producto 3',
          price_product: 30.99,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          serial_number: 'SN-0004',
          name_product: 'Producto 4',
          price_product: 40.99,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          serial_number: 'SN-0005',
          name_product: 'Producto 5',
          price_product: 50.99,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
