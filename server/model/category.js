const { Category } = require('@model');

module.exports = {
  findAll: async () => {
    const categories = await Category.findAll();
    return categories;
  },
};
