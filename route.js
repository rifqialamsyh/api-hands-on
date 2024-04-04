module.exports = (app) => {
  const handler = require("./action");

  app.route("/").get(handler.main);
  app.route("/getallbook").get(handler.getAllBook);

  app.route("/addbook").post(handler.addBook);
};
