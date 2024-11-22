import conn from "../config/conn.js";
import {v4 as uuidv4} from "uuid";


export const registrarParticipante = (request, response) => {
    const {nome, email} = request.body;

    if(!nome) {
        response.status(400).json({message: "O nome é obrigatório"});
        return;
    };
    if(!email) {
        response.status(400).json({message: "O email do palestrante é obrigatório"});
        return;
    };
        const id = uuidv4();
        const insertSql = /*sql*/` INSERT INTO participantes(??, ??, ??) VALUES (?, ?, ?)`;
        const insertSqlData = [
            "participante_id",
            "nome",
            "email",
            id,
            nome,
            email];

        conn.query(insertSql, insertSqlData, (err) => {
            if(err){
                console.error(err);
                response.status(500).json({Err: "Erro ao cadastrar participante"});
                return;
            };
        response.status(201).json({message: "Participante cadastrado com sucesso!"});
     });
}