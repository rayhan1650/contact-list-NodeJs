const contact = require("express").Router();

contact.get("/", (req, res) => {
  res.send("<h1>This is contact route</h1>");
});

module.exports = contact;
