const methodModel = require('@model/method');
const errorType = require('@util/errorType');
module.exports = {
  read: async (req, res, next) => {
    try {
      const allMethods = await methodModel.findAll(req.userId);
      res.status(200).json({ allMethods });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const id = await methodModel.createAndGetId({
        ...req.body,
        userId: req.userId,
      });
      return res.status(201).json({ id });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      await methodModel.delete(req.params.id);
      res.status(200).json({ success: true });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
};
