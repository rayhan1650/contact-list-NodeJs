const useContact = require("express").Router();
const { getAllContact, createContact } = require("./contactController");

useContact.get("/", getAllContact);
// useContact.get("/:id");
useContact.post("/", createContact);
// useContact.put("/:id");
// useContact.delete("/:id");

module.exports = useContact;
