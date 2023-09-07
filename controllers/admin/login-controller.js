const User = require('../../models/user');
const createPath = require('../../helpers/create-path');

const getLogin = (req, res) => {
  res
    .render(createPath('admin', 'login'));
};

const postLogin = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.redirect('/login');
      } else {
        const isPasswordValid = password === user.password;

        if (!isPasswordValid) {
          res.redirect('/login');
        } else {
          req.session.userId = user._id;
          res.redirect('/dashboard');
        }
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
};

const getLogout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

module.exports = {
  getLogin,
  postLogin,
  getLogout
};