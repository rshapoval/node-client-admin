const express = require('express');
const {
  getPosts,
  getAddPost,
  getEditPost
} = require('../../controllers/admin/post-controller');

const router = express.Router();

router.get('/dashboard/blog', getPosts);
router.get('/dashboard/blog/create', getAddPost);
router.get('/dashboard/blog/:id/edit', getEditPost);

module.exports = router;