const express = require('express');
const getPosts = require('../../controllers/admin/post-controller');
const router = express.Router();

router.get('/dashboard/blog', getPosts);

module.exports = router;