const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/registroOferta');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/registroOferta', Auth.isAuth, routing.all)
    .get('/registroOferta/:id', Auth.isAuth, routing.one)
    .post('/registroOferta', Auth.isAuth, routing.create)
    .put('/registroOferta/:id', Auth.isAuth, routing.update)
    .delete('/registroOferta/:id', Auth.isAuth, routing.destroy);

module.exports = router;
