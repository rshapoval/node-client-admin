const express = require('express');
const {
  getCommon,
  editCommon
} = require('../../controllers/admin/common-controller');

const router = express.Router();

router.get('/dashboard', getCommon);
router.put('/common/edit', editCommon);

module.exports = router;