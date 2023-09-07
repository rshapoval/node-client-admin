const express = require('express');
const isAuthenticated = require('../../helpers/is-authenticated');

const {
  getCommon,
  editCommon
} = require('../../controllers/admin/common-controller');

const router = express.Router();

router.get('/dashboard', isAuthenticated, getCommon);
router.put('/common/edit', editCommon);

module.exports = router;