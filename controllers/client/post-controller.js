const Post = require('../../models/post');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const getPosts = (req, res) => {
  Post
    .find()
    .sort({ createdAt: -1})
    .then(posts => {
      res.render(createPath('client', 'blog'), {
        title: 'Blog',
        posts
      })
    })
    .catch(error => handleError(res, error));
};

const getPost = async (req, res) => {
  try {
    const latestPosts = await Post.find().sort({ createdAt: -1 }).limit(3) || [];
    const post = await Post.findById(req.params.id);
    res
      .render(createPath('client', 'blog-post'), {
        post,
        latestPosts
      });
  } catch (error) {
    handleError(res, error)
  };
};

module.exports = {
  getPosts,
  getPost
};