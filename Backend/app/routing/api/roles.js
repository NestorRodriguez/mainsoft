const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/roles');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/roles', Auth.isAuth, routing.all)
    .get('/roles/:id', Auth.isAuth, routing.one)
    .post('/roles', Auth.isAuth, routing.create)
    .put('/roles/:id', Auth.isAuth, routing.update)
    .delete('/roles/:id', Auth.isAuth, routing.destroy);

module.exports = router;
