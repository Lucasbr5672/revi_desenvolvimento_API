import conn from "../config/conn.js";

const tabelaParticipantes = /*sql*/`
    CREATE TABLE IF NOT EXISTS participantes(
        participante_id VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

conn.query(tabelaParticipantes, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [participantes] criada com sucesso");
});