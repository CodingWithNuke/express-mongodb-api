module.exports = async (error, req, res, next) => {
  res.status(error.status || res.statusCode == 200 ? 500 : res.statusCode);

  return res.json({
    message: error.message || "An error occurred...",
  });
};
