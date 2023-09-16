import { connection } from "@/database/database";
import { saving } from "@/protocols/main.protocols";

async function selectSavings(){
    const select = await connection.query<saving>(`SELECT * FROM poupancas;`);
    return select.rows;
}

async function selectSavingsByTitulo(titulo:string){
    const select = await connection.query<saving>(`SELECT * FROM poupancas WHERE titulo = $1;`,[titulo]);
    return select.rowCount;
}
async function selectSavingsById(id:number){
    const select = await connection.query<saving>(`SELECT * FROM poupancas WHERE id = $1`,[id]);
    return select.rowCount;
}
async function InsertSavings(valor:number, rendimento_mensal:number, titulo:string, descricao:string, data_deposito:Date){
    await connection.query(`
    INSERT INTO poupancas (
        valor, 
        rendimento_mensal, 
        titulo,
        descricao,
        data_deposito 
    ) 
    VALUES($1,$2,$3,$4,$5)`,
    [valor, rendimento_mensal, titulo, descricao,data_deposito]);
}
async function updateSavingValue(id:number,valor:number){
    await connection.query(`UPDATE poupancas SET valor=$1 WHERE id=$2;`,[valor, id]);
}
async function deleteSaving(id:number){
    await connection.query(`DELETE FROM poupancas WHERE id = $1;`,[id]);
}

export const mainRepository = {selectSavings,selectSavingsByTitulo,selectSavingsById,InsertSavings,updateSavingValue,deleteSaving};