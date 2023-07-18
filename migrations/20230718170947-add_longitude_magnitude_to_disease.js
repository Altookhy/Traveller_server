'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Diseases', 'longitude', {
      type: Sequelize.FLOAT,
      allowNull: true
    });

    await queryInterface.addColumn('Diseases', 'magnitude', {
      type: Sequelize.FLOAT,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Diseases', 'longitude');
    await queryInterface.removeColumn('Diseases', 'magnitude');
  }
};
