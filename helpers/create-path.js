const path = require('path');

const createPath = (dir = '', view) => path.resolve(__dirname, `../views/${dir}`, `${view}.ejs`);

module.exports = createPath;