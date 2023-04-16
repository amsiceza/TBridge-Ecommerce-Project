'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync('password', 10),
        confirmed: true,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        password: bcrypt.hashSync('password', 10),
        confirmed: true,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Bob',
        last_name: 'Smith',
        username: 'bobsmith',
        email: 'bobsmith@example.com',
        password: bcrypt.hashSync('password', 10),
        confirmed: true,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Alice',
        last_name: 'Johnson',
        username: 'alicejohnson',
        email: 'alicejohnson@example.com',
        password: bcrypt.hashSync('password', 10),
        confirmed: true,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Tom',
        last_name: 'Jones',
        username: 'tomjones',
        email: 'tomjones@example.com',
        password: bcrypt.hashSync('password', 10),
        confirmed: true,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
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
