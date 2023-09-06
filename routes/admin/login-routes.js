const express = require('express');
const getLogin = require('../../controllers/admin/login-controller');

const router = express.Router();

router.get('/login', getLogin);

module.exports = router;