import * as yup from "yup"
import {users} from "../data/users"

const isIdUnique = async (id: number | undefined): Promise<boolean> => {
	if (typeof id !== "number") return false
	const existing = users.find((user) => user.id === id)
	return !existing
}

export const userSchema = yup.object({
	name: yup.string().required("Name is required"),
	email: yup
		.string()
		.email("Invalid email format")
		.required("Email is Required"),
	password: yup
		.string()
		.min(10, "Password min 10")
		.required("Password is Required"),
	role: yup
		.string()
		.oneOf(["admin", "user"], "Role must be either admin or user")
		.required("Role is Required"),
	isActive: yup
		.boolean()
		.oneOf([true ,false] ,"isActive must be true or false")
})

export const loginSchema = yup.object({
	email: yup.string().email("Invalid email format").required("Email is Required"),
  password : yup.string().min(10, "Password min 10").required("Password is Required")
})
