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

const getAddPost = (req, res) => {
  res
    .render(createPath('admin', 'page'), {
      'title': 'Create article',
      'isPage': false,
      'page': null
    });
};

const addPost = (req, res) => {
  const { title, description, h1, img, content } = req.body;
  const post = new Post({ title, description, h1, img, content });
  post
    .save()
    .then(result => res.redirect('/dashboard/blog'))
    .catch((error) => handleError(res, error));
};

const getEditPost = (req, res) => {
  Post
    .findById(req.params.id)
    .then(post => {
      res
        .render(createPath('admin', 'page'), {
          'title': 'Edit article',
          'isPage': false,
          'page': post
        });
    })
    .catch(error => handleError(res, error));
};

const editPost = (req, res) => {
  const { title, description, h1, img, content } = req.body;
  const { id } = req.params;
  Post
    .findByIdAndUpdate(id, { title, description, h1, img, content })
    .then(result => res.redirect(`/dashboard/blog/${id}/edit`))
    .catch((error) => handleError(res, error))
};

const deletePost = (req, res) => {
  Post
    .findByIdAndDelete(req.params.id)
    .then(result => res.sendStatus(200))
    .catch((error) => {
      console.log(error);
      res
        .status(404)
        .render(createPath('client', '404'));
    })
};

module.exports = {
  getPosts,
  getAddPost,
  addPost,
  getEditPost,
  editPost,
  deletePost
};