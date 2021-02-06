module.exports = (sequelize, Datatypes) => {
  const Category = sequelize.define(
    'Category',
    {
      title: {
        type: Datatypes.STRING(40),
        allowNull: false,
      },
      is_deposit: {
        type: Datatypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Category;
};
