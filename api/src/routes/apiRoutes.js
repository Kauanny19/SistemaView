const router = require('express').Router()

const userController = require("../controllers/userController");
const organizadorController = require("../controllers/organizadorController");
const eventoController =  require("../controllers/eventoController");

//Rotas Usuário
router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

//Rotas Organizador
router.post('/organizador', organizadorController.createOrganizador);
router.get('/organizador', organizadorController.getAllOrganizador);
router.put('/organizador', organizadorController.updateOrganizador);
router.delete('/organizador/:id', organizadorController.deleteOrganizador);

//Rotas Evento
router.post('/evento', eventoController.createEvento);
router.get('/evento', eventoController.getAllEventos);
router.put('/evento', eventoController.updateEvento);


// http://localhost:5000/api/v1/
module.exports = router