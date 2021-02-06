const { payment: paymentField } = require('@model/fields');
const field = require('@model/fields');
const errorType = require('@util/errorType');

module.exports = {
  hasId: (req, res, next) => {
    const { ...data } = req.body;
    const hasId = Object.keys(data).includes('id');
    if (hasId) return next();
    return next(errorType.notContainId);
  },
  allInFields: (req, res, next) => {
    try {
      if (!needToCheckMethod(req.method, ['POST', 'PATCH'])) {
        return next();
      }
      const fieldList = getFieldList(req.url);
      const { ...data } = req.body;
      const allDataInFields = Object.keys(data).every(key =>
        fieldList.includes(key),
      );
      if (allDataInFields) return next();
      return next(errorType.notInFields);
    } catch (err) {
      return next(errorType.invalidUrl);
    }
  },
};

const needToCheckMethod = (method, validMethod) => {
  return validMethod.includes(method);
};

const getFieldList = url => {
  const api = url.split('/')[1];
  const modelField = {
    methods: field.method,
    payments: field.payment,
    users: field.user,
  };
  return modelField[api];
};
