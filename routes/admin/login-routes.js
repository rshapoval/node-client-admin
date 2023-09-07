const express = require('express');
const {
  getLogin,
  postLogin,
  getLogout
} = require('../../controllers/admin/login-controller');

const router = express.Router();

router.get('/login', getLogin);
router.post('/login/check', postLogin);
router.get('/logout', getLogout);

module.exports = router;