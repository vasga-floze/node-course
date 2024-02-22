
import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
    //success case
    test('getPokemonById should return a pokemon', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    })

    //fail case, when pokemon doesnt exist
    test('should return an error if pokemon doesn exist', async () => {

        const pokemonId = 0;
        try { 
            await getPokemonById(pokemonId); 
            expect (true).toBeFalsy();
        }
        catch (error){

        }
        
    })
});
