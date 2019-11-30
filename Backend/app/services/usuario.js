const Database = require('../../app/database');
const Model = Database.import('../models/usuario');
const Service = require('./service');

class UsuarioService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "name", "documento", "correo", "telefono", "contraseña", "descripcion", "carga_hv", "roles_id"]
            },
            one: {
                attributes: ["id", "name", "documento", "correo", "telefono", "contraseña", "descripcion", "carga_hv", "roles_id"]
            },
            all: {
                attributes: ["id", "name", "documento", "correo", "telefono", "contraseña", "descripcion", "carga_hv", "roles_id"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = UsuarioService;



