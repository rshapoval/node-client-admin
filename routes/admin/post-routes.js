const express = require('express');
const {
  getPosts,
  getAddPost,
  addPost,
  getEditPost,
  editPost,
  deletePost
} = require('../../controllers/admin/post-controller');

const router = express.Router();

router.get('/dashboard/blog', getPosts);
router.get('/dashboard/blog/create', getAddPost);
router.post('/blog/create', addPost);
router.get('/dashboard/blog/:id/edit', getEditPost);
router.put('/blog/:id/edit', editPost);
router.delete('/blog/:id', deletePost);

module.exports = router;