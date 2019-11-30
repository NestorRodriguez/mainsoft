const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/aplicarOferta');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/aplicarOferta', routing.all)
    .get('/aplicarOferta/:id', routing.one)
    .post('/aplicarOferta', routing.create)
    .put('/aplicarOferta/:id', routing.update)
    .delete('/aplicarOferta/:id', routing.destroy);

module.exports = router;
