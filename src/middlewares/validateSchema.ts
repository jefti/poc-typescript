import { RequestHandler, Request, Response, NextFunction } from "express";
import Joi from "joi";

const validateSchema = (schema: Joi.ObjectSchema): RequestHandler =>{
    return (req:Request, res:Response, next:NextFunction) =>{
        const {error} = schema.validate(req.body, {abortEarly:false});
        if(error){
            const errorList = error.details.map((e)=>e.message);
            return res.status(422).send(errorList);
        }
        next();
    };
};

export {validateSchema};