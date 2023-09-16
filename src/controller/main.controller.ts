import { UpdateBody, createSaving } from "@/protocols/main.protocols";
import { mainServices } from "@/services/main.services";
import express, {Request, Response} from "express";
import httpStatus from "http-status";

async function getSavingsList(req: Request, res: Response){
    const resposta = await mainServices.readSavings();
    res.send(resposta);
}

async function postSaving(req:Request, res:Response){
    const {valor, rendimento_mensal, titulo, descricao, data_deposito}= req.body as createSaving;
    await mainServices.createSaving(valor, rendimento_mensal, titulo, descricao, data_deposito);
    res.sendStatus(httpStatus.CREATED);
}

async function putSaving(req:Request, res:Response){
    const id = Number(req.params.id);
    const {valor} = req.body as UpdateBody;
    await mainServices.updateSaving(id, valor);
    res.sendStatus(httpStatus.OK);
}

async function deleteSaving(req:Request, res:Response){
    const id = Number(req.params.id);
    await mainServices.deleteSaving(id);
    res.sendStatus(httpStatus.OK);
}

export const mainController = {getSavingsList,postSaving, putSaving, deleteSaving};

