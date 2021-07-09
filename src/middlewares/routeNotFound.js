module.exports = (req, res, next) => {
  const error = new Error(`Not Found - ${req.method} ${req.originalUrl}`);

  error.status = 404;

  return next(error);
};
