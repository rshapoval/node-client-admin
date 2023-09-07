const express = require('express');
const isAuthenticated = require('../../helpers/is-authenticated');

const {
  getPosts,
  getAddPost,
  addPost,
  getEditPost,
  editPost,
  deletePost
} = require('../../controllers/admin/post-controller');

const router = express.Router();

router.get('/dashboard/blog', isAuthenticated, getPosts);
router.get('/dashboard/blog/create', isAuthenticated, getAddPost);
router.post('/blog/create', addPost);
router.get('/dashboard/blog/:id/edit', isAuthenticated, getEditPost);
router.put('/blog/:id/edit', editPost);
router.delete('/blog/:id', deletePost);

module.exports = router;