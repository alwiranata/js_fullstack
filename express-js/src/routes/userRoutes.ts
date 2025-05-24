import express from "express"

import {
	getUsers,
	register,
	updateUser,
	deleteUser,
	login,
} from "../controller/userController"
import { validate } from "../middleware/validate"
import { userSchema ,loginSchema } from "../validators/userValidator"
import { hashPassword } from "../middleware/hashPassword"

const router = express.Router()

router.get("/users" ,getUsers)
router.post("/users/register",validate(userSchema),hashPassword,register)
router.put("/users/:id",validate(userSchema),hashPassword,updateUser)
router.delete("/users/:id",deleteUser)
router.post("/users/login",validate(loginSchema),login)


export default router

