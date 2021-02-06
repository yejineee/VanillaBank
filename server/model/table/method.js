module.exports = (sequelize, Datatypes) => {
  const Method = sequelize.define(
    'Method',
    {
      title: {
        type: Datatypes.STRING(40),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Method;
};
