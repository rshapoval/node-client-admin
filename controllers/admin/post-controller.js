const Post = require('../../models/post');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getPosts = (req, res) => {
  Post
    .find()
    .sort({ createdAt: -1})
    .then(posts => {
      res.render(createPath('admin', 'pages'), {
        'title': 'Blog',
        'pages': posts,
        'pageType': 'blog',
        'typeSlug': 'blog'
      })
    })
    .catch(error => handleError(res, error));
};

module.exports = getPosts;