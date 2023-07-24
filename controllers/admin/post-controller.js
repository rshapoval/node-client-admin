const Post = require('../../models/post');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getPosts = (req, res) => {
  const title = 'Blog';
  Post
    .find()
    .sort({ createdAt: -1})
    .then(posts => {
      res.render(createPath('admin', 'pages'), { title, 'pages': posts, 'pageType': 'blog', 'slug': 'blog' })
    })
    .catch(error => handleError(res, error));
};

module.exports = getPosts;