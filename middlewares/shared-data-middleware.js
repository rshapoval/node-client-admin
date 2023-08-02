const Common = require('../models/common');
const handleError = require('../helpers/handle-error');

const sharedDataMiddleware = (req, res, next) => {
  console.log(req.url);
  Common
    .findOne()
    .then(commons => {
      res
        .locals.sharedData = {
          'logo': commons.logo || '',
          'nav': commons.nav || []
        };
        next();
    })
  .catch(error => handleError(res, error));
};

module.exports = sharedDataMiddleware;