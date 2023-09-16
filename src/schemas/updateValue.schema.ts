import { UpdateBody } from "@/protocols/main.protocols";
import Joi from "joi";

export const updateValueSchema = Joi.object<UpdateBody>({
    valor: Joi.number().integer().required()
});