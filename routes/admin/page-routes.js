const express = require('express');
const getPages = require('../../controllers/admin/page-controller');
const router = express.Router();

router.get('/dashboard/pages', getPages);

module.exports = router;