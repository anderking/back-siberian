'use strict'

const models = require('../models')
var _ = require('underscore')

async function getServiceDetails (params) {
  const { createdAtDategteq, createdAtDatelteq, serviceTypeEq,
    EquipinfrasNameCont, userGenderEq } = params

  const serviceOrders = await models.ServiceOrder.findAll({
    attributes: ['id'],
    where: serviceOrderCreatedAtCondition(createdAtDategteq, createdAtDatelteq),
    include: [
      { model: models.Revision,
        attributes: ['id'],
        where: { status: 'finalized' },
        include: [
          { model: models.VarietyDetail,
            attributes: ['id'],
            where: { status: 'active' },
            include: [{
              model: models.VarietyEquipinfras,
              attributes: ['id'],
              include: [{ model: models.Equipinfras,
                attributes: ['id', 'name'],
                where: equipinfrasNameCondition(EquipinfrasNameCont) }]
            }]
          }, { model: models.User,
            attributes: ['id'],
            where: userGenderCondition(userGenderEq)
          }
        ]
      }, { model: models.ServiceOrderDetail,
        attributes: ['id'],
        where: { status: 'approved' },
        include: [
          { model: models.ServiceDetail,
            attributes: ['id', 'serviceType'],
            where: serviceDetailServiceTypeCondition(serviceTypeEq)
          }]
      }
    ]
  })

  return compressArray(organizeArray(serviceOrders))
}

function serviceDetailServiceTypeCondition (serviceType) {
  return serviceType ? { serviceType, status: 'active' } : { status: 'active' }
}

function userGenderCondition (gender) {
  return gender ? { gender, status: 'active' } : { status: 'active' }
}

function equipinfrasNameCondition (nameCont) {
  return nameCont ? { name: { [models.Sequelize.Op.like]: '%' + nameCont + '%' }, status: 'active' } : { status: 'active' }
}

function serviceOrderCreatedAtCondition (greater, less) {
  let result = { status: { [models.Sequelize.Op.ne]: null } }

  if (greater && less) {
    result = { createdAt: { [models.Sequelize.Op.and]: {
      [models.Sequelize.Op.lte]: less,
      [models.Sequelize.Op.gte]: greater } } }
  } else if (greater) {
    result = { createdAt: { [models.Sequelize.Op.and]: {
      [models.Sequelize.Op.gte]: greater } } }
  } else if (less) {
    result = { createdAt: { [models.Sequelize.Op.and]: {
      [models.Sequelize.Op.lte]: less } } }
  }

  return result
}

function compressArray (original) {
  var compressed = []
  var copy = original.slice(0)

  for (var i = 0; i < original.length; i++) {
    var myCount = 0

    for (var w = 0; w < copy.length; w++) {
      if (_.isEqual(original[i], copy[w])) {
        myCount++
        delete copy[w]
      }
    }

    if (myCount > 0) {
      original[i].count = myCount
      compressed.push(original[i])
    }
  }

  return compressed
}

function organizeArray (serviceDetails) {
  return serviceDetails.map((serviceDetail) => {
    return {
      serviceType: serviceDetail.ServiceOrderDetails[0].ServiceDetail.serviceType,
      equipInfra: serviceDetail.Revision.VarietyDetail.VarietyEquipinfra.Equipinfra.name
    }
  })
}

module.exports = {
  getServiceDetails
}
