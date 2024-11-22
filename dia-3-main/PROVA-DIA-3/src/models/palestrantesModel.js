import conn from "../config/conn.js                       ";

const tabelaPalestrantes = /*sql*/`
    CREATE TABLE IF NOT EXISTS palestrantes(
        palestrante_id VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        nome_palestrante VARCHAR (255) not null,
        expertise VARCHAR (255) not null,
        area_de_especializacao varchar (255) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

conn.query(tabelaPalestrantes, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [palestrantes] criada com sucesso");
});