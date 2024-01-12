var schedule = require('node-schedule')

const models = require('../models')

var j = schedule.scheduleJob('0 17 * * *', async function () {
  const serviceOrders = await models.ServiceOrder.findAll({
    attributes: ['status', 'id'],
    where: { status: 'warranty' },
    include: { model: models.Bitacora, where: { eventType: 'warranty' } }
  })

  const serviceOrdersCompleted = serviceOrders.filter(serviceOrder =>
    (Math.abs(new Date() - serviceOrder.Bitacora[0].createdAt) / (1000 * 3600 * 24)) >= serviceOrder.warrantyTime)

  if (serviceOrdersCompleted.length > 0) { await serviceOrdersCompleted.update({ status: 'finalized' }) }
})

module.exports = j
