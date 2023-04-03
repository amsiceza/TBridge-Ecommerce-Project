// Documento para modificar columnas de la tabla users

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    // Editar columna de la tabla haciendo unico el email
    return queryInterface.changeColumn("Users", "email", {
      type:Sequelize.STRING,
      unique:true
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
