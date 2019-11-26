const Controller = require('./controller');
const Service = require('../services/usuario');

class UsusarioController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = UsusarioController;
