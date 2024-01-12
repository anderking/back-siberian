'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Mr. Bob',
        rif: 'J-001234567',
        aboutUs: 'VALORES Transparencia, Honestidad, Excelencia, Cercanía al Cliente.',
        vision: 'Consolidarnos como líderes de los mercados en los que actuamos y continuar creciendo, tanto geográficamente como con la apertura de nuevas líneas de negocio, para ampliar la gama de servicios que nuestros clientes requieren.',
        mision: 'Queremos ser activos importantes de nuestros clientes, realizando la gestión completa de todas las tareas de mantenimiento, reparación y otros servicios auxiliares que requieren los inmuebles que ponen en nuestras manos. Siempre persiguiendo la excelencia en la calidad y el servicio y caracterizándonos por tener delegaciones allá donde operamos, con personal propio, ofreciendo la cercanía al cliente que requiere nuestro servicio.',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783421/MrBob1024LogoC_ntsrsp.png',
        phoneOne: '+584127489562',
        phoneTwo: '+582512624820',
        address: 'Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela',
        facebook: 'http://facebook.com/mrbob',
        instagram: 'http://instagram.com/mrbob',
        twitter: 'http://twitter.com/mrbob',
        revisionPrice: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {})
  }
};
