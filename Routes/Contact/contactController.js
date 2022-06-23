const contacts = require("../../Contacts");

exports.getAllContact = (req, res) => {
  res.json(contacts.getAllContacts());
};

exports.createContact = (req, res) => {
  console.log(req.body);
};
