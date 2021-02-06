module.exports = (sequelize, Datatypes) => {
  const Payment = sequelize.define(
    'Payment',
    {
      date: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      content: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: Datatypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Payment;
};
