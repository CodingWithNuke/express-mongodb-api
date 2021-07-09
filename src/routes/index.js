module.exports = app => {
  app.use('/v1/posts', require('./post.routes'));
}