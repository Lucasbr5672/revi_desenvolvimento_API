import conn from "../config/conn.js";
import {v4 as uuidv4} from "uuid";
import { request, response } from "express";


export const criar = (request, response) =>{

    const {titulo, data_even} = request.body;
   

    if(!titulo) {
        response.status(400).json({message: "O titulo é obrigatório"});
        return;
    };
    if(!data_even) {
        response.status(400).json({message: "A data do evento é obrigatório"});
        return;
    };
        //Criar o event
        const id = uuidv4();
       
        const insertSql = /*sql*/` INSERT INTO eventos(??, ??, ??) VALUES (?, ?, ?)`;
        const insertSqlData = [
            "evento_id",
            "titulo",
            "data_even",
            id,
            titulo,
            data_even,
            ];

        conn.query(insertSql, insertSqlData, (err) => {
            if(err){
                console.error(err);
                response.status(500).json({Err: "Erro ao criar evento"});
                return;
            };
        response.status(201).json({message: "Evento criado com sucesso!"});
     });  
}
export const editarEven = (request, response) =>{
    const {id} = request.params;
    const {titulo, data_even} = request.body;

    if(!titulo) {
        response.status(400).json({message: "O titulo é obrigatório"});
        return;
    };
    if(!data_even) {
        response.status(400).json({message: "A data do evento é obrigatório"});
        return;
    };

    //O evento existe mesmo?
    const checkSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ?`
    const checkDataSql = ["evento_id", id]

    conn.query(checkSql, checkDataSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({Err: "Erro ao buscar Evento"})
            return
        }
        
        if(data.length === 0){
            response.status(404).json({message: "Evento não encontrado"})
            return
        }

   const updateSql = /*sql*/ `UPDATE eventos SET ? WHERE ?? = ?`
                const updateData = [{titulo, data_even},  "evento_id", id]
                
                conn.query(updateSql, updateData, (err) => {
                    if(err){
                        console.error(err)
                        response.status(500).json({Err: "Erro ao atualizar evento"})
                        return
                    }
                    response.status(201).json({message: "Evento atualizado com sucesso!"})
                })
            })
}
export const deletarEven = (request, response) =>{
    const { id } = request.params;

    const deleteSql = /*sql*/ `DELETE FROM eventos WHERE evento_id = "${id}"`;
    conn.query(deleteSql, (err, data) => {
      if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro ao cancelar o vento" });
        return;
      }
  
      if (data.length === 0) {
        response.status(404).json({ err: "Evento não encontrado" });
        return;
      }
      response.status(200).json("Evento cancelado com sucesso!");
    });
}
export const getEven = (request, response) =>{
    const sql = /*sql*/ `SELECT * FROM eventos`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao listar os eventos" });
      return;
    }
    const eventos = data;
    response.status(200).json(eventos);
  });
}