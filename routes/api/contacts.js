const express = require("express");

const router = express.Router();

// const contacts = require("../../models/contacts.js");
// const HttpError = require("../../helpers/HttpError.js");

const ctrl = require("../../controllers/contacts");



router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.put("/:contactId", ctrl.updateContact);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
