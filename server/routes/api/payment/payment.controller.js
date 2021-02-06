const paymentModel = require('@model/payment');
const categoryController = require('../category/category.controller');

module.exports = {
  create: async (req, res, next) => {
    try {
      const payment = await paymentModel.createAndGetRow({
        ...req.body,
        userId: req.userId,
      });
      return res.status(201).json({ payment });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
  read: async (req, res, next) => {
    try {
      const userId = req.userId;
      const date = req.params.date;
      const allPayments = await paymentModel.findAllByDate({ userId, date });
      res.status(200).json({ allPayments });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
  edit: async (req, res, next) => {
    try {
      await paymentModel.edit(req.body);
      res.status(200).json({ success: true });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      await paymentModel.delete(req.params.id);
      res.status(200).json({ success: true });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
};
