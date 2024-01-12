'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NotificationDetails', [
			// Client revision workflow
      {
        name: 'Solicitud creada',
        message: 'Tu solicitud de servicio ha sido creada exitosamente.',
				createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Solicitud aceptada',
        message: 'Tu solicitud de servicio ha sido aceptada.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Solicitud rechazada',
        message: 'Tu solicitud de servicio ha sido rechazada.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Servicio irreparable',
        message: 'Tu solicitud de servicio ha sido diagnosticada y se ha hallado irreparable.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Revisión realizada',
        message: 'Tu revisión ha sido realizada y se generó su diágnostico.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Revisión cancelada',
        message: 'Tu revisión ha sido cancelada',
        createdAt: new Date(),
        updatedAt: new Date()
			},// Lender revision workflow
			{
        name: 'Revisión asignada',
        message: 'Has sido asignado a una revisión.',
        createdAt: new Date(),
        updatedAt: new Date()
			},//Client order workflow
			{
        name: 'Presupuesto realizado',
        message: 'El presupuesto de tu servicio a sido emitido.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Presupuesto aceptado',
        message: 'Has aceptado el presupuesto y agendado la fecha del serivcio.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Servicio finalizado',
        message: 'Tu servicio ha sido finalizado exitosamente.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Garantía emitida',
        message: 'Se ha emitido la garantía de tu servicio',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Servicio cancelado',
        message: 'Has cancelado tu servicio.',
        createdAt: new Date(),
        updatedAt: new Date()
			}, //Lender order workflow
			{
        name: 'Servicio asignado',
        message: 'Has sido asignado a un servicio.',
        createdAt: new Date(),
        updatedAt: new Date()
			}, 
			{
        name: 'Mensaje respondido',
        message: 'Tu mensaje ha sido respondido.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Sugerencia atendida',
        message: 'Tu sugerencia ha sido atendida.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Reclamo atendido',
        message: 'Tu reclamo ha sido atendido.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Día de ejecución de servicio',
        message: 'Recordatorio: Hoy será ejecutado el servicio.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Día de revisión',
        message: 'Recordatorio: Hoy será realizada la revisión.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Calificación recibida',
        message: 'Has sido calificado.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Promoción para ti',
        message: 'Disfruta esta promoción especial para ti.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {})
  }
};
