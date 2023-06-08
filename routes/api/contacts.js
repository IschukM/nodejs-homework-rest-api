const express = require("express");
const  authenticate  = require("../../helpers/authenticate");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const { schemas } = require("../../models/contacts");
const { isValidId,  } = require("../../helpers");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.put(
  "/:contactId",authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.delete("/:contactId",authenticate, isValidId, ctrl.removeContact);

router.patch(
  "/:contactId/favorite",authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
