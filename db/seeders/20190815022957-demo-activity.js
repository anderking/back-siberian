'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Activities', [
      {
        name: 'Destapar el Equipo',
        description: 'Se debe destapar el equipo con mucho cuidado.',
        estimatedTime: 1,
        difficultyDegree: 'Media',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Sacar la pieza dañada',
        description: 'Se sacar la pieza dañana utilizando el destornillador.',
        estimatedTime: 5,
        difficultyDegree: 'Alta',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Colocar la pieza nueva en su lugar',
        description: 'Se debe colocar la pienza nueva en reemplazo de la dañada.',
        estimatedTime: 1,
        difficultyDegree: 'Alta',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Activities', null, {})
  }
};
