const Database = require('../../app/database');
const Model = Database.import('../models/aplicarOferta');
const Service = require('./service');


class AplicarOfertaService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "registro_oferta_id", "usuarios_id"]
            },
            one: {
                attributes: ["id", "registro_oferta_id", "usuarios_id"]
            },
            all: {
                attributes: ["id", "registro_oferta_id", "usuarios_id"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = AplicarOfertaService;


