const Database = require('../../app/database');
const Model = Database.import('../models/roles');
const Service = require('./service');


class rolesService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "codigo_rol", "nombre_rol",]
            },
            one: {
                attributes: ["id", "codigo_rol", "nombre_rol",]
            },
            all: {
                attributes: ["id", "codigo_rol", "nombre_rol",]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = rolesService; 


