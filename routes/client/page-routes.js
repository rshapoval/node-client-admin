const express = require('express');
const {
  getHome,
  getPage
} = require('../../controllers/client/page-controller');
const router = express.Router();

router.get('/', getHome);
router.get('/:slug', getPage);

module.exports = router;