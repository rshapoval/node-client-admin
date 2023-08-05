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
        'pageType': 'pages',
        'typeSlug': false
      })
    })
    .catch(error => handleError(res, error));
};

const getAddPage = (req, res) => {
  res
    .render(createPath('admin', 'page'), {
      'title': 'Create page',
      'isPage': true,
      'page': null
    });
};

const addPage = (req, res) => {
  const { title, description, h1, slug, content } = req.body;
  const page = new Page({ title, description, h1, slug, content });
  page
    .save()
    .then(result => res.redirect('/dashboard/pages'))
    .catch((error) => handleError(res, error));
};

const getEditPage = (req, res) => {
  Page
    .findById(req.params.id)
    .then(page => {
      res
        .render(createPath('admin', 'page'), {
          'title': 'Edit page',
          'isPage': true,
          page
        });
    })
    .catch(error => handleError(res, error));
};

const editPage = (req, res) => {
  const { title, description, h1, slug, content } = req.body;
  const { id } = req.params;
  Page
    .findByIdAndUpdate(id, { title, description, h1, slug, content })
    .then(result => res.redirect(`/dashboard/pages/${id}/edit`))
    .catch((error) => handleError(res, error))
};

const deletePage = (req, res) => {
  Page
    .findByIdAndDelete(req.params.id)
    .then(result => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(404)
        .render(createPath('client', '404'));
    })
};

module.exports = {
  getPages,
  getAddPage,
  addPage,
  getEditPage,
  editPage,
  deletePage
};