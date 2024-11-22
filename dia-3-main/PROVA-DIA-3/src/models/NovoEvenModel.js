import conn from "../config/conn.js";

const tabelaEventos = /*sql*/`
    CREATE TABLE IF NOT EXISTS eventos(
        evento_id VARCHAR(60) PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        data_even DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP/*,
        foreign key (evento_id) references palestrantes (palestrante_id)*/
)`;

conn.query(tabelaEventos, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [eventos] criada com sucesso");
});