import httpStatus from "http-status";

export type saving = {
    id: number,
    valor: number,
    rendimento_mensal: number,
    titulo: string,
    descricao: string,
    ativo: boolean,
    data_deposito: Date
}
export type createSaving = Omit<saving, "id" | "ativo">;
export type UpdateBody = {
    valor: number
}
export type httpError = {
    status: httpStatus.HttpStatus,
    message: string
};