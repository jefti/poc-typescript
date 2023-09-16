import { CustomError } from "@/errors/Errors";
import { mainRepository } from "@/repositories/main.respository";
import httpStatus from "http-status";

async function createSaving(valor:number, rendimento_mensal:number, titulo:string, descricao:string, data_deposito:Date){
    const checkDuplicate: number = await mainRepository.selectSavingsByTitulo(titulo);
    if(checkDuplicate >0) throw new CustomError(httpStatus.CONFLICT, 'Título já em uso.');
    mainRepository.InsertSavings(valor, rendimento_mensal, titulo, descricao, data_deposito);
}

async function readSavings(){
    const savingList = await mainRepository.selectSavings();
    return savingList;
}

async function updateSaving(id:number, valor:number){
    const checkId: number = await mainRepository.selectSavingsById(id);
    if (checkId < 1) throw new CustomError(httpStatus.NOT_FOUND, 'Id informado não consta no banco!');
    await mainRepository.updateSavingValue(id,valor);
}

async function deleteSaving(id:number){
    const checkId: number = await mainRepository.selectSavingsById(id);
    if (checkId < 1) throw new CustomError(httpStatus.NOT_FOUND, 'Id informado não consta no banco!');
    await mainRepository.deleteSaving(id);
}

export const mainServices = {createSaving, readSavings, updateSaving, deleteSaving};