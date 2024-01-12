'use strict'

const Role = require('../../models').Role
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = await Role.findAll()

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Ely',
        lastName: 'Colmenares',
        email: 'gilberto@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1234567,
				dniType: 'v',
				imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783413/Ely_d9lh7q.jpg',
        RoleId: roles[0].id,
        gender: 'Masculino',
        dateOfBirth: '1994-07-13',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Génesis',
        lastName: 'Álvarez',
        email: 'maria@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 2345678,
				dniType: 'v',
				imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783397/Genesis_dnfkta.jpg',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Junior',
        lastName: 'Camacho',
        email: 'junior@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
				dni: 3456789,
				imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783407/Junior_irykui.jpg',
        dniType: 'v',
        RoleId: roles[2].id,
        gender: 'Masculino',
        dateOfBirth: '1996-4-02',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Perez',
        email: 'mariap2@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 4567891,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Lopez',
        email: 'marial3@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 5678912,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Sanchez',
        email: 'marias4@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 6789123,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Suarez',
        email: 'marias5@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 7891234,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Cardiff',
        email: 'mariac6@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 8912345,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Melendez',
        email: 'mariam7@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 9123456,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Hernandez',
        email: 'mariah8@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1123456,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Campos',
        email: 'mariac9@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1234567,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Alvarez',
        email: 'mariaa10@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1345678,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Luces',
        email: 'marial11@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 14567889,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Riera',
        email: 'mariar12@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1567891,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Rea',
        email: 'mariar13@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1678912,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Barreto',
        email: 'mariab14@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1789123,
        dniType: 'v',
        RoleId: roles[1].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Maria',
        lastName: 'Amaro',
        email: 'mariaa15@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 1891234,
        dniType: 'v',
        RoleId: roles[2].id,
        gender: 'Femenino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Anderson',
        lastName: 'Díaz',
        email: 'anderson@gmail.com',
        password: bcrypt.hashSync('12345678', 8),
        dni: 19123456,
				dniType: 'v',
				imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783404/Anderson_zbqghr.jpg',
        RoleId: roles[3].id,
        gender: 'Masculino',
        dateOfBirth: '1994-12-24',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
