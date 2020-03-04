
// const pacient = require('../models/Pacient');
const Pacient = require('../models/Pacient');

// when create new client
exports.newClient = async (req, res, next) => {

    // create object post
    const pacient = new Pacient(req.body);

    // insert database
    try {
        await pacient.save(); // method mongo to save record
        res.json({message: 'Cliente se agregó Correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
};

// get all pacients 
exports.getClients = async (req, res, next) => {
    try {
        const pacients = await Pacient.find({}); // method mongo to save record
        res.json({pacients});
    } catch (error) {
        console.log(error);
        next();
    }
};

// get pacient by id
exports.getClient = async (req, res, next) => {
    try {
        const pacient = await Pacient.findById(req.params.id); // method mongo to save record
        res.json({pacient});
    } catch (error) {
        console.log(error);
        next();
    }
};

// update pacients by id
exports.updateClient = async (req, res, next) => {
    try {
        const pacient = await Pacient.findOneAndUpdate({_id : req.params.id}, req.body, {
            new : true
        }); 
        res.json({pacient});
    } catch (error) {
        console.log(error);
        next();
    }
};

// destroy pacients by id
exports.destroyClient = async (req, res, next) => {
    try {
        await Pacient.findOneAndDelete({ _id : req.params.id} ); 
        res.json( {mensaje : 'Paciente fue eliminado con exito'} );
    } catch (error) {
        console.log(error);
        next();
    }
};