//Se importan las funciones correspondientes de Playwright
const { test, expect, request } = require('@playwright/test');
//Se importa la clase 'Request'
const {Request} = require('../helpers/Pokeapi/request.js')






test.describe('Tests sobre pokeapi', () => {
    test('Obtener pokemon correcto por id', async ({ request }) => {
        //Se define la clase 'Request' dentro del test para acceder a la misma
        const peticion = new Request(request);
        //Se invoca la función getPokemon con valor 25
        const requestPokemon = await peticion.getPokemon(25);
         //Se espera que la respuesta de la petición sea con código 200
          expect(requestPokemon.ok()).toBeTruthy();
        //Se convierte la respuesta de la petición a formato JSON
       const pokemonData = await requestPokemon.json()

       //Se espera que el valor devuelto en la clave 'name' sea 'pikachu'
       expect(pokemonData.name).toEqual("pikachu")



    });
});