const express = require('express');
const isAuthenticated = require('../../helpers/is-authenticated');

const {
  getPages,
  getAddPage,
  addPage,
  getEditPage,
  editPage,
  deletePage
} = require('../../controllers/admin/page-controller');

const router = express.Router();

router.get('/dashboard/pages', isAuthenticated, getPages);
router.get('/dashboard/pages/create', isAuthenticated, getAddPage);
router.post('/pages/create', addPage);
router.get('/dashboard/pages/:id/edit', isAuthenticated, getEditPage);
router.put('/pages/:id/edit', editPage);
router.delete('/pages/:id', deletePage);

module.exports = router;