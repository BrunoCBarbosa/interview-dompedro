const express = require('express');
const routes = express.Router();

const RegisterController = require('./controller/register.controller');

routes.get('/register', RegisterController.index);
routes.post('/register', RegisterController.save);

module.exports = routes;