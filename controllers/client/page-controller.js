const Page = require('../../models/page');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getHome = (req, res) => {
  Page
    .findOne({ slug: '' })
    .then(page => {
      if (!page) return handleError(res, 'Page not found');
      res
        .render(createPath('client', 'page'), { page });
    })
    .catch(error => handleError(res, error));
};

const getPage = (req, res) => {
  Page
    .findOne({ slug: req.params.slug })
    .then(page => {
      if (!page) return handleError(res, 'Page not found');
      res
        .render(createPath('client', 'page'), { page });
    })
    .catch(error => handleError(res, error));
};

module.exports = {
  getHome,
  getPage
};