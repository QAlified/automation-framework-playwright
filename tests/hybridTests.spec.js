const { test,request, expect } = require('@playwright/test');
const {Request} = require('../helpers/Pokeapi/request')
const Pokedex = require('../helpers/PokeDatabaseWeb/pokedex')





test.describe('Tests hibridos sobre api y web base datos pokemon', () => {
    test('Generar id en Api y verificar dato en web', async ({ request, page }) => {



    let pokemonId = Pokedex.generarIdPokemonAzar(1, 905);

        const peticion = new Request(request);
        const requestPokemon = await peticion.getPokemon(pokemonId);
         
          expect(requestPokemon.ok()).toBeTruthy();
         
       const pokemonData = await requestPokemon.json()


       await  Pokedex.goToPokedex(page)
       await  Pokedex.verifyPokemonNamefromId(page, pokemonId, pokemonData.name)



    });
});