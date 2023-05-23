const authRouter = require("./auth");

function route(app) {
  // signin-signup for authenticate
  app.use("/auth", authRouter);

  // home
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "Server is OK - pham le song tuan -haha!",
    });
  });
}

module.exports = route;
