const express = require("express");

const userController = require("../controller/auth");
const alertController = require("../controller/alert");
const contactController = require("../controller/contact");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.put("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/alert", isAuth, alertController.createAlert);
router.post("/contact", isAuth, contactController.createContact);
router.get("/severity", isAuth, alertController.getSeverity);

router.get("/contacts", contactController.getContacts);
module.exports = router;
