const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/usuario');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/usuario', Auth.isAuth, routing.all)
    .get('/usuario/:id', Auth.isAuth, routing.one)
    .post('/usuario', Auth.isAuth, routing.create)
    .put('/usuario/:id', Auth.isAuth, routing.update)
    .delete('/usuario/:id', Auth.isAuth, routing.destroy);

module.exports = router;
