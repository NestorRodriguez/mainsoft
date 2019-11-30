const Database = require('../../app/database');
const Model = Database.import('../models/usuario');
const Service = require('./service');

class UsuarioService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "nombre", "documento", "correo", "telefono", "contrasena", "descripcion", "carga_hv", "roles_id"]
            },
            one: {
                attributes: ["id", "nombre", "documento", "correo", "telefono", "contrasena", "descripcion", "carga_hv", "roles_id"]
            },
            all: {
                attributes: ["id", "nombre", "documento", "correo", "telefono", "contrasena", "descripcion", "carga_hv", "roles_id"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = UsuarioService;



