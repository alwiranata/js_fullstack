import {Request, Response, NextFunction} from "express"
import {users} from "../data/users"
import {User} from "../models/user"

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
	try {
		res.status(200).json({
			data: users,
		})
	} catch (error) {
		console.log(error)
	}
}

export const createUser = (req: Request, res: Response) => {
	try {
		const newUser: User = req.body
		users.push(newUser)

		res.status(201).json({
			message: "User created",
		})
	} catch (error) {
		console.log(error)
	}
}

export const updateUser = (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id)
		const updateUser: User = req.body

		const index = users.findIndex((user : User) => user.id === id)
		if (index !== -1) {
			users[index] = {...users[index], ...updateUser}

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

export const deleteUser = (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id)
		const index = users.findIndex((user : User) => user.id === id)

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
