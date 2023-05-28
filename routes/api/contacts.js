const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const { schemas } = require("../../models/contacts");
const { isValidId } = require("../../helpers");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId",isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.delete("/:contactId",isValidId, ctrl.removeContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
