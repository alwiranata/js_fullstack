import {User} from "../models/user"
import bcrypt, {hash} from "bcrypt"

export let users: User[] = []

export async function initUsers() {
	users = [
		{
			id: 1,
			name: "Aldo Wiranata",
			email: "aldowiranata16@gmail.com",
			password: await bcrypt.hash("2455201036", 10),
			role: "admin",
		},
		{
			id: 2,
			name: "Farel",
			email: "farel@gmail.com",
			password: await bcrypt.hash("24455201035", 10),
			role: "user",
		},
	]
}
