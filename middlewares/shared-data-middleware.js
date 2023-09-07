const Common = require('../models/common');
const handleError = require('../helpers/handle-error');

const sharedDataMiddleware = (req, res, next) => {
  Common
    .findOne()
    .then(commons => {
      res
        .locals.sharedData = {
          'logo': commons.logo || '',
          'nav': commons.nav || [],
          'user': req.session.userId || false
        };
        next();
    })
  .catch(error => handleError(res, error));
};

module.exports = sharedDataMiddleware;