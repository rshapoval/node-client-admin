const express = require('express');
const {
  getPages,
  getAddPage,
  addPage,
  getEditPage,
  editPage,
  deletePage
} = require('../../controllers/admin/page-controller');

const router = express.Router();

router.get('/dashboard/pages', getPages);
router.get('/dashboard/pages/create', getAddPage);
router.post('/pages/create', addPage);
router.get('/dashboard/pages/:id/edit', getEditPage);
router.put('/pages/:id/edit', editPage);
router.delete('/pages/:id', deletePage);

module.exports = router;