const createPath = require('./create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('client', '404'), { title: 'Error' });
};

module.exports = handleError;