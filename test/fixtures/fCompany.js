'use strict'

const company = {
  id: 1,
  name: 'PiOne',
  rif: 'J-001234567',
  aboutUs: 'Empresa dedicada a ofrecer soluciones a los problemas en los hogares de la familia venezolana',
  vision: 'Ser la empresa líder en Venezuela en la reparación de todo tipo de artefacto o infraestrutura',
  mision: 'Ser la empresa líder en Venezuela en la reparación de todo tipo de artefacto o infraestrutura, a travez de un personal altamente calificado.',
  imageUrl: 'public/images/avatar/avatardefault.png',
  phoneOne: '+584127489562',
  phoneTwo: '+582512624820',
  address: 'Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela',
  facebook: 'PiOne',
  instagram: '@pione',
  twitter: '@pione',
  createdAt: '2019-08-10 00:00:00',
  updatedAt: '2019-08-10 00:00:00'
}

const unprocessableCompany = {
  id: 2,
  name: 'PiOne',
  rif: 'J-001234567',
  imageUrl: 'public/images/avatar/avatardefault.png',
  phoneOne: '+584127489562',
  address: 'Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela',
  createdAt: '2019-08-10 00:00:00',
  updatedAt: '2019-08-10 00:00:00'
}

module.exports = {
  single: company,
  unprocessableCompany
}
