//if you are using node js then use this file if not go on with the index.html

const path = require("path");

const notFound404 = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../public/404.html"));
};

module.exports = notFound404;
