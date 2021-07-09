const { Post } = require('../models');

exports.create = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title) {
    res.status(400);
    return res.json({
      message: "Title is required."
    })
  }

  if (!content) {
    res.status(400);
    return res.json({
      message: "Content is required."
    })
  }

  try {
    const post = await Post.create({
      title,
      content
    });

    res.status(201);
    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error("An error occurred whilst trying to create the post."))
  }
}

exports.findAll = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.json(posts);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to find all posts.`))
  }
}

exports.findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (!post) {
      res.status(404);
      return next(new Error(`No post found to update with ID: ${id}`));
    }

    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to find a post with ID: ${id}.`))
  }
}

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  console.log(!content);

  if (!title && !content) {
    res.status(411);
    return next(new Error("Data to update the post cannot be empty."))
  }

  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

    if (!post) {
      res.status(404);
      return next(new Error(`No post found to update with ID: ${id}`));
    }

    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to update a post with ID: ${id}.`))
  }
}

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      res.status(404);
      return next(new Error(`No post found to delete with ID: ${id}`));
    }

    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to delete a post with ID: ${id}.`))
  }
}