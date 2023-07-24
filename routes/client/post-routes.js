const express = require('express');
const getPosts = require('../../controllers/client/post-controller');
const router = express.Router();

router.get('/blog', getPosts);

module.exports = router;