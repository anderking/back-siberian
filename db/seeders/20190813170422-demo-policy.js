'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Policies', [
      {
        name: 'Pieza rota por el prestador',
        description: 'Política que se activa cuando en la revisión por garantía se determina que el prestador de servicio estropeó alguna pieza del electrodoméstico',
        actionPlan: 'Reinstalación de una nueva pieza.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pieza averiada por el prestador',
        description: 'Política que se activa cuando se determina que un componente del electrodoméstico fue averiado por el prestador pero existe la posibilidad de repararse.',
        actionPlan: 'Reparación de la pieza y de no proceder, sustitución por una nueva.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pared mal pintada',
        description: 'Cubre paredes veteadas o paredes manchadas de pintura de otra pared',
        actionPlan: 'Retocar la zona de la pared pintada indebidamente.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Policies', null, {})
  }
};
