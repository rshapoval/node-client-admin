const express = require('express');
const {
  getPosts,
  getPost
} = require('../../controllers/client/post-controller');
const router = express.Router();

router.get('/blog', getPosts);
router.get('/blog/:id', getPost);

module.exports = router;