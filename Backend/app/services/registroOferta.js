const Database = require('../../app/database');
const Model = Database.import('../models/registroOferta');
const Service = require('./service');


class registro0fertaService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "nombre_oferta", "descripcion_oferta","estado"]
            },
            one: {
                attributes: ["id", "nombre_oferta", "descripcion_oferta","estado"]
            },
            all: {
                attributes: ["id", "nombre_oferta", "descripcion_oferta","estado"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = registro0fertaService; 


