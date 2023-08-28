const Post = require('../../models/post');
const createPath = require('../../helpers/create-path');
const handleError = require('../../helpers/handle-error');

const POSTS_PER_PAGE = 9;

const getPosts = (req, res) => {
  const page = req.query.page || 1;
  const skip = (page - 1) * POSTS_PER_PAGE;

  Post
    .find()
    .sort({ createdAt: -1})
    .skip(skip)
    .limit(POSTS_PER_PAGE)
    .then(posts => {
      Post.countDocuments()
        .then(totalPosts => {
          res.render(createPath('client', 'blog'), {
            title: 'Blog',
            posts,
            currentPage: page,
            totalPages: Math.ceil(totalPosts / POSTS_PER_PAGE)
          });
        })
        .catch(error => handleError(res, error));
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