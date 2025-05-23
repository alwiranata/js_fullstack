import {Request, Response, NextFunction} from "express"
import bcrtyp from "bcrypt"

export const hashPassword = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const {password} = req.body
        if(!password) {
            res.status(400).json({
                message : "Password Required"
            })
        }
        const hashedPassword = await bcrtyp.hash(password , 10)
        req.body.password = hashedPassword

        next()
	} catch (error) {
        res.status(500).json({
            message : "An error occurred while hashing the password."
        })
    }
}
