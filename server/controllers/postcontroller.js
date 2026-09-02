const Post = require("../models/post");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      user: req.user.id,
    });

    res.json(post);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      user: req.user.id,
    });

    res.json(posts);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      { new: true }
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found or you are not authorized",
      });
    }

    res.json(post);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found or you are not authorized",
      });
    }

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};