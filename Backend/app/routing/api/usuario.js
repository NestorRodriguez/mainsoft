const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/usuario');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/usuario', routing.all)
    .get('/usuario/:id', routing.one)
    .post('/usuario', routing.create)
    .put('/usuario/:id', routing.update)
    .delete('/usuario/:id', routing.destroy);

module.exports = router;
