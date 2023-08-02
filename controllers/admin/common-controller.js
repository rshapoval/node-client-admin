const createPath = require('../../helpers/create-path');

const getCommon = (req, res) => {
  res
    .render(createPath('admin', 'dashboard'));
};

module.exports = getCommon;