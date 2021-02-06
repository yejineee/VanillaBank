module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: Datatypes.STRING(40),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Datatypes.STRING(40),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return User;
};
