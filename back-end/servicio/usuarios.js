import ModelFactory from "../model/DAO/usuariosFactory.js";
import config from "../config.js";

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerUsuarios = async (email) => {
        const usuarios = await this.model.obtenerUsuarios(email);
        return usuarios;
    };

    guardarUsuario = async (usuario) => {
        const usuarioGuardado = await this.model.guardarUsuario(usuario);
        return usuarioGuardado;
    };

    logUsuario = async (usuario) => {
        const usuarioAux = await this.model.obtenerUsuarios(usuario.email);

        if (usuario && usuarioAux && usuario.contraseña == usuarioAux.contraseña) {
            return(usuarioAux)
        } else {
            return(null);
        }
    };

    actualizarUsuario = async (email, usuario) => {
        const usuarioActualizado = await this.model.actualizarUsuario(
            email,
            usuario
        );
        return usuarioActualizado;
    };

    eliminarUsuario = async (email) => {
        const usuarioEliminado = await this.model.eliminarUsuario(id);
        return usuarioEliminado;
    };
}

export default Servicio;
