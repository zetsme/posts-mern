//
const Post = require('../models/Post');
//
// @desc Get All Posts
// @route GET /api/v1/posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
//
// @desc Add single post
// @route POST /api/v1/posts
exports.addPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    return res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map((i) => i.message);
      return res.status(400).json({
        success: false,
        error: errorMessages,
      });
    }
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
// @desc Delete single post by Id
// @route DELETE /api/v1/posts/:id
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'No Post Found',
      });
    }
    await post.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
