const express = require('express');
const {
  getPages,
  getAddPage,
  getEditPage,
  deletePage
} = require('../../controllers/admin/page-controller');

const router = express.Router();

router.get('/dashboard/pages', getPages);
router.get('/dashboard/pages/create', getAddPage);
router.get('/dashboard/pages/:id/edit', getEditPage);
router.delete('/pages/:id', deletePage);

module.exports = router;