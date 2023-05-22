import express from "express";
import Controlador from "../controlador/usuarios.js";

class Router {
    constructor() {
        this.router = express.Router();
        this.controlador = new Controlador();
    }

    start() {
        // API REST FULL
        this.router.get("/api/usuarios/:email?", this.controlador.obtenerUsuarios);
        this.router.post("/api/usuarios", this.controlador.guardarUsuario);
        this.router.put("/api/usuarios/:email", this.controlador.actualizarUsuario);
        this.router.delete("/api/usuarios/:email", this.controlador.eliminarUsuario);

        this.router.post("/login", this.controlador.logUsuario);

        return this.router;
    }
}

export default Router;