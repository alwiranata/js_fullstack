import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

export const authenticateToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers["authorization"]
	const token = authHeader && authHeader.split(' ')[1]

	if (!token) {
		res.status(401).json({
			msg: "Acces denied. No token provide",
		})
		return
	}

	const secret = process.env.JWT_SECRET
	if (!secret) {
		res.status(500).json({
			msg : "Internal server error"
		})
		return
	}

	try {
		const decode = jwt.verify(token, secret as string)
		// req.user = decode //opsional
		next()
	} catch (error) {
		res.status(403).json({
			msg : "Invalid or expired token"
		})
		
	}
}


