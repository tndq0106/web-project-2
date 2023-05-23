function route(app) {
  // home
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "Server is OK - pham le song tuan -haha!",
    });
  });
}

module.exports = route;
