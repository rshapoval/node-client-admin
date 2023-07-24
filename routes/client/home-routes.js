const express = require('express');
const getHome = require('../../controllers/client/home-controller');
const router = express.Router();

router.get('/', getHome);

module.exports = router;