import express from "express"

import {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} from "../controller/userController"
import { validate } from "../middleware/validate"
import { userSchema } from "../validators/userValidator"
import { hashPassword } from "../middleware/hashPassword"

const router = express.Router()

router.get("/users" ,getUsers)
router.post("/users",validate(userSchema),hashPassword,createUser)
router.put("/users/:id",validate(userSchema),hashPassword,updateUser)
router.delete("/users/:id",deleteUser)

export default router

