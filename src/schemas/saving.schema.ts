import Joi from "joi";
import { createSaving } from "@/protocols/main.protocols";


export const savingSchema = Joi.object<createSaving>({
    valor: Joi.number().integer().required(),
    rendimento_mensal: Joi.number().integer().required(),
    titulo: Joi.string().max(50).required(),
    descricao: Joi.string().max(100).required(),
    data_deposito: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required()
    .messages({
        "string.pattern.base": 'A data deve estar no formato "DD-MM-YYYY".'
    })
})