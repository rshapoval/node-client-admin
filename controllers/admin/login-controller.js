const createPath = require('../../helpers/create-path');

const getLogin = (req, res) => {
  res
    .render(createPath('admin', 'login'));
};

module.exports = getLogin;