const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/registroOferta');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/registroOferta', routing.all)
    .get('/registroOferta/:id', routing.one)
    .post('/registroOferta', routing.create)
    .put('/registroOferta/:id', routing.update)
    .delete('/registroOferta/:id', routing.destroy);

module.exports = router;
