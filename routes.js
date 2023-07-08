const express = require("express");
const route = express.Router();

// Pasta das rotas
const indexController = require('./src/controllers/indexController');
const cadastroController = require('./src/controllers/cadastroController');
const ajudaController =require('./src/controllers/ajudaController');
const ferramentaController = require('./src/controllers/ferramentaController');
const minhaContaContorller = require('./src/controllers/minhaContaController');
const relacaoMaterialController = require('./src/controllers/relacaoMaterialController');
const cableController = require('./src/controllers/cableController');

// Rotas controller
route.get('/', indexController.index);
route.post('/', indexController.save);

route.get('/ajuda', ajudaController.index);

route.get('/cadastro', cadastroController.index);
route.get('/ferramenta', ferramentaController.index);
route.post('/ferramenta', ferramentaController.index); 
route.get('/minhaConta', minhaContaContorller.index);

// rota relação de material
route.get('/relacaoMaterial', relacaoMaterialController.index);
route.get('/cable', cableController.index);


// envia via externa a rota para server.js
module.exports = route

