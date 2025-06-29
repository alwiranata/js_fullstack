import {Request, Response, NextFunction} from "express"
import {users} from "../data/users"
import {User} from "../models/user"
import bcrypt from "bcrypt" // pastikan sudah install: npm i bcrypt
import jwt from "jsonwebtoken"
import {sendActivationEmail} from "../utils/mailer"

export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.status(200).json({
			data: users,
		})
	} catch (error) {
		console.log(error)
	}
}

export const updateUser = async (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id)
		const updateUser: User = req.body
		const {role} = req.body

		const index = users.findIndex((user: User) => user.id === id)
		const isActive = role === "admin" ? true : false
		if (index !== -1) {
			users[index] = {...users[index], ...updateUser, isActive}

			res.status(201).json({
				message: "User updated",
				data: users[index],
			})
		} else {
			res.status(404).json({
				message: "User not found",
			})
		}
	} catch (error) {
		console.log(error)
	}
}

export const deleteUser = async (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id)
		const index = users.findIndex((user: User) => user.id === id)

		if (index !== -1) {
			const deletedUser = users[index]
			users.splice(index, 1)

			res.status(200).json({
				message: "User deleted",
				data: deletedUser,
			})
		} else {
			res.status(404).json({
				message: "User not found",
			})
		}
	} catch (error) {
		console.log(error)
	}
}

export const register = async (req: Request, res: Response) => {
	try {
		const {role} = req.body
		const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1
		const isActive = role === "admin" ? true : false

		const newUser: User = {
			id: newId,
			...req.body,
			isActive: isActive,
		}
		users.push(newUser)

		const activationToken = jwt.sign(
			{id: newUser.id, email: newUser.email},
			process.env.JWT_SECRET as string,
			{expiresIn: "1d"}
		)

		await sendActivationEmail(newUser.email, activationToken)

		res.status(201).json({
			message: "User created",
		})
	} catch (error) {
		console.log(error)
	}
}

export const login = async (req: Request, res: Response): Promise<void> => {
	try {
		const {email, password} = req.body

		if (!email || !password) {
			res.status(400).json({
				message: "Validation Failed",
				errors: [
					{field: "email", message: "Email is required"},
					{field: "password", message: "Password is required"},
				],
			})
			return
		}

		const user = users.find((u) => u.email === email)
		if (!user) {
			res.status(401).json({
				message: "Email and Password Invalid",
			})
			return
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password)
		if (!isPasswordMatch) {
			res.status(401).json({
				message: "Email and Password Invalid",
			})
			return
		}

		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
				role: user.role,
			},
			process.env.JWT_SECRET as string,

			{
				expiresIn: "1h",
			}
		)

		res.status(200).json({
			message: "Login Successfully",
			token: token,
			data: user,
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({
			message: "Server error",
		})
	}
}

// Controller untuk aktivasi akun
export const activateUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const {token} = req.params

		// Verifikasi token
		const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
			id: number
			email: string
		}

		const user = users.find(
			(u) => u.id === decoded.id && u.email === decoded.email
		)

		if (!user) {
			res.status(404).json({message: "User not found"})
			return
		}

		user.isActive = true

		res.status(200).json({
			message: "Account activated successfully",
			data: user,
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({message: "Invalid or expired activation token"})
	}
}
