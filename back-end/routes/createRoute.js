import express from "express"
import { createUser } from "../controllers/user.js"
import { getallUsers } from "../controllers/user.js"

const router = express.Router()

router.post("/createUser", createUser)
router.get("/getUsers", getallUsers)

export default router