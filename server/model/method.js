const { Method } = require('@model');

module.exports = {
  findAll: async userId => {
    return Method.findAll({
      attributes: ['id', 'title'],
      where: {
        userId,
      },
    });
  },
  createAndGetId: async data => {
    const { id } = await Method.create(data);
    return id;
  },
  delete: async id => {
    const affectedRow = await Method.destroy({
      where: { id },
    });
    if (affectedRow) return true;
    throw new Error();
  },
};
