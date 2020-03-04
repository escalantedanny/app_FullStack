const express = require('express');
const router =  express.Router();
const pacientController = require('../controllers/PacientControllers')

module.exports = function() {

    // agrega nuevos pacientes via post
    router.post('/pacients',
        pacientController.newClient
    );

    // get all pacients
    router.get('/pacients',
        pacientController.getClients
    );

    // search pacients by id
    router.get('/pacients/:id',
        pacientController.getClient
    );

    // update pacients by id
    router.put('/pacients/:id',
        pacientController.updateClient
    );

    // destroy pacients by id
    router.delete('/pacients/:id',
        pacientController.destroyClient
    );

    return router;
}