import ModelFactory from "../model/DAO/chatsFactory.js";
import config from "../config.js";
import { InvalidCredentialsError } from "../../errores.js";

class ServicioChats {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerChatsDelUsuario = async (userId) => {
        try {
            const chats = await this.model.obtenerChatsDelUsuario(userId);
            return chats;
        } catch (error) {
            return error;
        }
    };

    obtenerChat = async (chatId) => {
        try {
            const chat = await this.model.obtenerChat(chatId);
            return chat;
        } catch (error) {
            return error;
        }
    };

    mandarMensaje = async (idChat, mensaje) => {
        try {
            const mensajeNuevo = await this.model.mandarMensaje(idChat, mensaje);
            return mensajeNuevo;
        } catch (error) {
            throw error;
        }
    };

    crearChat = async (chat) => {
        try {
            const chatNuevo = await this.model.agregarChat(chat);
            return chatNuevo;
        } catch (error) {
            throw error;
        }
    }
    
}

export default ServicioChats;