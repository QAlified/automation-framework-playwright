//Se importan las funciones correspondientes de Playwright
const { test,request, expect } = require('@playwright/test');
//Se importa la clase 'Request'
const {Request} = require('../helpers/Pokeapi/request')
//Se importa el módulo Pokedex
const Pokedex = require('../helpers/PokeDatabaseWeb/pokedex')





test.describe('Tests hibridos sobre api y web base datos pokemon', () => {
    test('Generar id en Api y verificar dato en web', async ({ request, page }) => {

    //Se guarda el valor devuelto de la función generarIdPokemonAzar() en una variable
    let pokemonId = await Pokedex.generarIdPokemonAzar();
        //Se define la clase 'Request' dentro del test para acceder a la misma
        const peticion = new Request(request);
        //Se invoca la función getPokemon con la variable pokemonId como input
        const requestPokemon = await peticion.getPokemon(pokemonId);
            //Se espera que la respuesta de la petición sea con código 200
            expect(requestPokemon.ok()).toBeTruthy();
        
        //Se convierte la respuesta de la petición a formato JSON
        const pokemonData = await requestPokemon.json()

         //Se invoca la función goToPokedex y posteriormente verifyPokemonNamefromId
        await  Pokedex.goToPokedex(page)
        await  Pokedex.verifyPokemonNamefromId(page, pokemonId, pokemonData.name)



    });
});