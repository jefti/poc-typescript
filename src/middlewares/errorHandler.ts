import * as HttpStatus from 'http-status';
import { NextFunction, Request, Response } from "express";
import { CustomError } from '@/errors/Errors';

export function errorHandler(error: CustomError | Error, req: Request, res: Response, next: NextFunction){
    if ('statusCode' in error && 'message' in error) {
        return res.status(error.statusCode).send(error.message);
    } else {
        console.error('Não entrou!');
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno do servidor' });
    }
}