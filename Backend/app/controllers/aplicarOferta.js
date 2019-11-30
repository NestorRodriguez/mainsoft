const Controller = require('./controller');
const Service = require('../services/aplicarOferta');

class AplicarOfertaController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = AplicarOfertaController;
