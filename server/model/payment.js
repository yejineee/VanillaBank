const { sequelize, Payment } = require('@model');
const { QueryTypes } = require('sequelize');
const { payment: paymentQuery } = require('./query');
const moment = require('moment');

module.exports = {
  createAndGetRow: async data => {
    const id = await createAndGetId(data);
    const payments = await sequelize.query(paymentQuery.getPaymentById, {
      replacements: { paymentId: id },
      type: QueryTypes.SELECT,
    });
    return changeDateFormat(payments);
  },
  findAllByDate: async ({ userId, date }) => {
    const payments = await sequelize.query(paymentQuery.getPaymentByDate, {
      replacements: { startDate: date, userId },
      type: QueryTypes.SELECT,
    });
    return changeDateFormat(payments);
  },
  edit: async ({ id, ...data }) => {
    const affectedRow = await Payment.update(data, {
      where: { id },
    });
    if (!!affectedRow) return true;
    throw new Error();
  },
  delete: async id => {
    const affectedRow = await Payment.destroy({
      where: { id },
    });
    if (!!affectedRow) return true;
    throw new Error();
  },
};

const createAndGetId = async data => {
  const { id } = await Payment.create(data);
  return id;
};

const changeDateFormat = list => {
  return list.map(element => {
    element.date = moment(element.date).format('YYYY-MM-DD');
    return element;
  });
};
