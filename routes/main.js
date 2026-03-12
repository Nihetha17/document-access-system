const express = require("express")
const router = express.Router()
const controller = require("../controllers/mainController")

router.post("/create",authMiddleware, controller.create)
router.get("/list",authMiddleware, controller.list)
router.delete("/:id",authMiddleware, controller.remove)

module.exports=router