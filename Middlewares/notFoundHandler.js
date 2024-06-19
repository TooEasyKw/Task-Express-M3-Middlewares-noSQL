const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
};

module.exports = notFoundHandler;
