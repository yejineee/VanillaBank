const { User } = require('@model');

module.exports = {
  verify: async (name, password) => {
    return User.findOne({
      attributes: ['id'],
      where: {
        name,
        password,
      },
    });
  },
  findUserByPk: async ({ id }) => {
    const user = await User.findByPk(id);
    return user.id;
  },
};
