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
import { authenticateToken } from "../middleware/authenticateToken"
const router = express.Router()

router.get("/users",authenticateToken,getUsers)
router.post("/users/register",validate(userSchema),hashPassword,register)
router.put("/users/:id",authenticateToken, validate(userSchema),hashPassword,updateUser)
router.delete("/users/:id",authenticateToken, deleteUser)
router.post("/users/login",validate(loginSchema),login)


export default router

