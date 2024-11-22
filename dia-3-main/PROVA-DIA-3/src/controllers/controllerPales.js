import conn from "../config/conn.js";
import {v4 as uuidv4} from "uuid";


export const registrarPalestrante = (request, response) => {
    const {nome, nome_palestrante, expertise, area_de_especializacao} = request.body;

    if(!nome) {
        response.status(400).json({message: "O nome é obrigatório"});
        return;
    };
    if(!nome_palestrante) {
        response.status(400).json({message: "O nome do palestrante é obrigatório"});
        return;
    };
    if(!expertise) {
        response.status(400).json({message: "A expertise é obrigatório"});
        return;
    };
    if(!area_de_especializacao) {
        response.status(400).json({message: "A área de especialização é obrigatório"});
        return;
    };
        //Criar o usuario
        const id = uuidv4();
        const insertSql = /*sql*/` INSERT INTO palestrantes(??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)`;
        const insertSqlData = [
            "palestrante_id",
            "nome",
            "nome_palestrante",
            "expertise",
            "area_de_especializacao",
            id,
            nome,
            nome_palestrante,
            expertise,
            area_de_especializacao];

        conn.query(insertSql, insertSqlData, (err) => {
            if(err){
                console.error(err);
                response.status(500).json({Err: "Erro ao cadastrar palestrante"});
                return;
            };
        response.status(201).json({message: "Palestrante cadastrado com sucesso!"});
     });
};
export const listarPalestrantes = (request, response) =>{
    const sql = /*sql*/ `SELECT * FROM palestrantes`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao listar os palestrantes" });
      return;
    }
    const palestrantes = data;
    response.status(200).json(palestrantes);
  });
}