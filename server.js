const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const engine = require('ejs-mate')
require('dotenv').config();
const createPath = require('./helpers/create-path');
const sharedDataMiddleware = require('./middlewares/shared-data-middleware');
const pageClientRoutes = require('./routes/client/page-routes');
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

app.use(sharedDataMiddleware);
app.use(morgan(`${LOG_LEVEL}`));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(commonAdminRoutes);
app.use(pageAdminRoutes);
app.use(postAdminRoutes);
app.use(postClientRoutes);
app.use(pageClientRoutes);
app.use((req, res) => {
  res
    .status(404)
    .render(createPath('client', '404'));
});

app.listen(PORT, (error) => {
  error ? console.log(errorMessage(error)) : console.log(successMessage(`listening port ${PORT}`));
});