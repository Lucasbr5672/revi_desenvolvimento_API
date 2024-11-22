import express from "express"
//importar as rotas
import even from "./routes/criarEven.js"
import pales from "./routes/palestrantesRoutes.js"
import part from "./routes/registrarPart.js"
//importar os models
import "./models/registrarParticipante.js"
import "./models/NovoEvenModel.js"
import "./models/palestrantesModel.js"


const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());

app.use("/eventos", pales, even)
app.use("/eventos/participante", part)

app.use((request, response) => {
    response.status(404).json({message: "Rota não encontrada"});
});

app.listen(PORT, () => {
    console.log(`Servidor on PORT : ${PORT} 🚀`);
});


//CRIAR UM ARQUIVO 

//.env

// PORT = 3333
// MYSQL_HOST = "localhost"
// MYSQL_USER = "root"
// MYSQL_PASSWORD = "Sen@iDev77!."
// MYSQL_DATABASE = "eventos"
// MYSQL_PORT = 3333
