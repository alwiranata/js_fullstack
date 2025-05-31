import express from "express"

import {
	getUsers,
	register,
	updateUser,
	deleteUser,
	login,
	activateUser
} from "../controller/userController"
import {validate} from "../middleware/validate"
import {userSchema, loginSchema} from "../validators/userValidator"
import {hashPassword} from "../middleware/hashPassword"
import {authenticateToken} from "../middleware/authenticateToken"
const router = express.Router()
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: User management and authentication
 */

router.get("/users", authenticateToken, getUsers)
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns list of users
 */
router.post("/users/register", validate(userSchema), hashPassword, register)
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Invalid request
 */

router.put("/users/:id",authenticateToken,validate(userSchema),hashPassword,updateUser)
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update an existing user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

router.delete("/users/:id", authenticateToken, deleteUser)
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

router.post("/users/login", validate(loginSchema), login)
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user and get JWT token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Successful login, returns JWT
 *       401:
 *         description: Invalid credentials
 */
router.get("/users/activate/:token", activateUser)
/**
 * @swagger
 * /api/users/activate/{token}:
 *   get:
 *     summary: Activate user account using token
 *     tags: [Users]
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account activated successfully
 *       400:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 */

export default router
 