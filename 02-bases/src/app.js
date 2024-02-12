
const getPokemonById = require('./js-foundation/06-promises');

const name = getPokemonById(2, (pokemon) => {
    console.log({ pokemon });
});

