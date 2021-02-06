module.exports = {
  notInFields: {
    status: 400,
    name: 'invalid request',
    message: '모델에 존재하지 않는 필드가 있습니다.',
  },
  invalidUrl: {
    status: 404,
    name: 'invalid url',
    message: '존재하지 않는 url입니다',
  },
  notContainId: {
    status: 400,
    name: 'invalid request',
    message: 'id가 포함되지 않았습니다.',
  },
};
