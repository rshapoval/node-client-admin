const createPath = require('../../helpers/create-path');

const getHome = (req, res) => {
  res
    .render(createPath('client', 'page'));
};

module.exports = getHome;