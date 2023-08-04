const express = require('express');
const {
  getPages,
  getAddPage,
  getEditPage
} = require('../../controllers/admin/page-controller');

const router = express.Router();

router.get('/dashboard/pages', getPages);
router.get('/dashboard/pages/create', getAddPage);
router.get('/dashboard/pages/:id/edit', getEditPage);

module.exports = router;