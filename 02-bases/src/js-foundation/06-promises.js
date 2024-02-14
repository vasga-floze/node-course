
const getPokemonById = async (id) => {
     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const resp = await fetch(url);
    const pokemon = await resp.json();

    //throw new Error('Pokemon no existe');
    return pokemon.name;

    // return fetch(url)
    //     .then((response) => response.json())
    //     //.then(() => { throw new Error('Pokemon no existe') })
    //     .then((pokemon) => pokemon.name)
}

module.exports = getPokemonById;
