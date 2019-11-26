const Controller = require('./controller');
const Service = require('../services/registroOferta');

class RegistroOfertaController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = RegistroOfertaController;
