const categoryModel = require('@model/category');
module.exports = {
  read: async (req, res, next) => {
    try {
      const allCategories = await categoryModel.findAll();
      res.status(200).json({ allCategories });
    } catch (err) {
      err.status = 400;
      next(err);
    }
  },
};
