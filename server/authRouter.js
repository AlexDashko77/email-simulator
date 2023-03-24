const Router = require("express");
const router = new Router();
const controller = require("./authController");

router.get("/messages", controller.getMessages);
router.post("/send", controller.sendMessage);

module.exports = router;
