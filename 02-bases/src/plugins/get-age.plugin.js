//patron adaptador
// se importa la libreria
const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if ( !birthdate ) return new Error('birtdate is required');

    //se hace uso de la libreria
    return getAgePlugin(birthdate);
}

//se importa la funcion
module.exports = {
    getAge,
}