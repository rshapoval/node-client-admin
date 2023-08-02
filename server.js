const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const engine = require('ejs-mate')
require('dotenv').config();
const createPath = require('./helpers/create-path');
const homeRoutes = require('./routes/client/home-routes');
const postClientRoutes = require('./routes/client/post-routes');
const commonAdminRoutes = require('./routes/admin/common-routes');
const postAdminRoutes = require('./routes/admin/post-routes');
const pageAdminRoutes = require('./routes/admin/page-routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || '';
const LOG_LEVEL = process.env.LOG_LEVEL || 'tiny';

const errorMessage = chalk.bgKeyword('white').redBright;
const successMessage = chalk.bgKeyword('green').white;

app.engine('ejs', engine);
app.set('view engine', 'ejs');

mongoose
  .connect(MONGO_URL)
  .then((res) => console.log(successMessage('Connected to DB')))
  .catch((error) => console.log(errorMessage(error)));

app.listen(PORT, (error) => {
  error ? console.log(errorMessage(error)) : console.log(successMessage(`listening port ${PORT}`));
});

app.get('/blog/:id', (req, res) => {
  res
    .render(createPath('client', 'blog-post'));
});

app.get('/dashboard/pages/create', (req, res) => {
  const title = 'Create page';
  const isPage = true;
  res
    .render(createPath('admin', 'page'), { title, isPage });
});

app.get('/dashboard/pages/:id/edit', (req, res) => {
  const title = 'Edit page';
  const isPage = true;
  res
    .render(createPath('admin', 'page'), { title, isPage });
});

app.get('/dashboard/blog/create', (req, res) => {
  const title = 'Create article';
  const isPage = false;
  res
    .render(createPath('admin', 'page'), { title, isPage });
});

app.get('/dashboard/blog/:id/edit', (req, res) => {
  const title = 'Edit article';
  const isPage = false;
  res
    .render(createPath('admin', 'page'), { title, isPage });
});

app.use(morgan(`${LOG_LEVEL}`));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(homeRoutes);
app.use(postClientRoutes);
app.use(commonAdminRoutes);
app.use(postAdminRoutes);
app.use(pageAdminRoutes);
app.use((req, res) => {
  res
    .status(404)
    .render(createPath('client', '404'));
});