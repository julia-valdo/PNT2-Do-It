import express from "express";
import RouterUsuarios from "./router/usuarios.js";
import RouterIdeas from "./router/ideas.js";
import config from "./config.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/usuarios", new RouterUsuarios().start());
app.use("/api/ideas", new RouterIdeas().start())

const PORT = config.PORT;
const server = app.listen(PORT, () =>
    console.log(`Servidor HTTP express escuchando en http://localhost:${PORT}`)
);

server.on("error", (error) =>
    console.log(`Error en servidor: ${error.message}`)
);