const express = require("express");

const authenticate = require("../../helpers/authenticate");

const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validateBody } = require("../../decorators");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);
module.exports = router;
