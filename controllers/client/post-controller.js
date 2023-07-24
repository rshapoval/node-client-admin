const Post = require('../../models/post');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getPosts = (req, res) => {
  const title = 'Blog';
  Post
    .find()
    .sort({ createdAt: -1})
    .then(posts => {
      res.render(createPath('client', 'blog'), { title, posts })
    })
    .catch(error => handleError(res, error));
};

module.exports = getPosts;