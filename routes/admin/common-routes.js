const express = require('express');
const getCommon = require('../../controllers/admin/common-controller');
const router = express.Router();

router.get('/dashboard', getCommon);

module.exports = router;