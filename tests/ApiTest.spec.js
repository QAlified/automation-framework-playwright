const { test, expect, request } = require('@playwright/test');
const {Request} = require('../helpers/Pokeapi/request.js')






test.describe('Tests sobre pokeapi', () => {
    test('Obtener pokemon correcto por id', async ({ request }) => {



        const peticion = new Request(request);
        const requestPokemon = await peticion.getPokemon(25);
         
          expect(requestPokemon.ok()).toBeTruthy();
         
       const pokemonData = await requestPokemon.json()


       expect(pokemonData.name).toEqual("pikachu")



    });
});