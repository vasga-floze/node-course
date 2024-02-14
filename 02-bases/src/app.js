
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(23)
    .then((pokemon) => console.log({ pokemon }))
    //.catch((err) => console.log({ err }))
    .finally(() => console.log('Finalmente'));


// setTimeout(() => {
//     console.log(info)
// }, 3000);
