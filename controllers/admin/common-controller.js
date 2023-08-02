const Common = require('../../models/common');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getCommon = (req, res) => {
  Common
    .findOne()
    .then(commons => {
      res
        .render(createPath('admin', 'dashboard'), {
          'logo': commons.logo || '',
          'nav': commons.nav || []
        });
    })
    .catch(error => handleError(res, error));
};

module.exports = getCommon;