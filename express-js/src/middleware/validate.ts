import { Request , Response , NextFunction } from "express";
import {ObjectSchema}  from "yup"

export const validate = (schema : ObjectSchema<any>) => async (
    req : Request , res : Response , next : NextFunction
) => {
    try {
        req.body  = await schema.validate(req.body , {
            abortEarly :false,
            stripUnknown : true
        })
        next()
    } catch (error : any) {
        res.status (400).json({
            message  : "validation Failed",
            errors : error.inner.map((err : any) => ({
                field : err.path,
                message : err.message
            }))
        })
    }
}
