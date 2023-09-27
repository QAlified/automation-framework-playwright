//Se importa la función 'expect'
const { expect } = require('@playwright/test');
//Se importan los selectores a utilizar y se guardan en una variable para su invocación
const selectors = require('../../selectors/pokedatabase.json');
//Se importan los parámetros a utilizar y se guardan en una variable para su invocación
const parameters = require('../../config/parameters.json');

//Se exportan las funciones del script para ser utilizadas en los tests
module.exports = {

    async generarIdPokemonAzar() {
    //Se devuelve un número redondeado hacia arriba más uno, el cuál es el resultado ente un número aleatorio multiplicado por 905
    return Math.floor(Math.random() * (50)) + 1;
    },
    //Se redirige a la URL especificada en el parámetro pokemonDatabase
    async  goToPokedex (page) {
        await page.goto(parameters.pokemonDatabase);

    },

      //Se verifica que el elemento 'id' sea igual textualmente al valor 'idExpected'
      async verifyPokemonIdfromName (page, name, idExpected) {
        const id =  parseInt(await page.innerText(selectors.pokemonId.replace("#Repl", name)))
        await expect(id).toEqual(idExpected)
    },
    
    //Se verifica que el elemento 'name' sea igual al valor 'nameExpected' en minúscula
    async verifyPokemonNamefromId (page, id, nameExpected) {
        const name = await page.innerText(selectors.pokemonName.replace("#Repl", id.toString().padStart(4, '0')))
        await expect(name.toLowerCase()).toEqual(nameExpected.toLowerCase())
    },

}