const Page = require('../../models/page');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getPages = (req, res) => {
  Page
    .find()
    .sort({ createdAt: -1})
    .then(pages => {
      res.render(createPath('admin', 'pages'), {
        'title': 'Pages',
        'pages': pages,
        'pageType': 'page',
        'typeSlug': false
      })
    })
    .catch(error => handleError(res, error));
};

module.exports = getPages;