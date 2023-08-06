const Common = require('../../models/common');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');
const parseNavLinks = require('../../helpers/parse-nav-links');

const getCommon = (req, res) => {
  res
    .render(createPath('admin', 'dashboard'));
};

const editCommon = (req, res) => {
  const { logo, ...links } = req.body;
  const nav = parseNavLinks(links);

  Common
    .findOneAndUpdate({}, { logo, nav }, { overwrite: true })
    .then(result => res.redirect(`/dashboard`))
    .catch((error) => handleError(res, error))
};

module.exports = {
  getCommon,
  editCommon
};