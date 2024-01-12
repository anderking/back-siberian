'use strict';
const models = require('../../models')
const Group = models.Group

module.exports = {
 up: async (queryInterface, Sequelize) => {
   const groups = await Group.findAll()
   return queryInterface.bulkInsert('Parameters', [
     //PERSONALES
     {
       name: 'Tiene Hijos',
       description: 'Padres',
       GroupId: groups[0].id,
       createdAt: new Date(),
       updatedAt: new Date(),
       status: 'active'
     }, {
       name: 'Vive Solo',
       description: 'Vive solo?',
       GroupId: groups[0].id,
       createdAt: new Date(),
       updatedAt: new Date(),
       status: 'active'
     },
      //PROFESIONALES - OCUPACIONALES
      {
       name: 'Educador',
       description: 'Profesion es educador',
       GroupId: groups[1].id,
       createdAt: new Date(),
       updatedAt: new Date(),
       status: 'active'
     }, {
       name: 'Ama de casa',
       description: 'Ocupacion es ama de casa ',
       GroupId: groups[1].id,
       createdAt: new Date(),
       updatedAt: new Date(),
       status: 'active'
     }, //HOBBIES
     {
       name: 'Bricolaje',
       description: 'Maderas. ',
       GroupId: groups[2].id,
       createdAt: new Date(),
       updatedAt: new Date(),
       status: 'active'
     }, {
       name: 'Pintura',
       description: 'Pintar',
       GroupId: groups[2].id,
       createdAt: new Date(),
       updatedAt: new Date(),
       status: 'active'
     }], {})
 },
 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Parameters', null, {})
 }
};
