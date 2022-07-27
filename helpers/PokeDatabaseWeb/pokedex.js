const { expect } = require('@playwright/test');
const selectors = require('../../selectors/pokedatabase.json');
const parameters = require('../../config/parameters.json');


module.exports = {

generarIdPokemonAzar() {
    return Math.floor(Math.random() * (905)) + 1;
    },

    async  goToPokedex (page) {
        await page.goto(parameters.pokemonDatabase);

    },

      //Assertions
      async verifyPokemonIdfromName (page, name, idExpected) {
        const id =  parseInt(await page.innerText(selectors.pokemonId.replace("#Repl", name)))
        await expect(id).toEqual(idExpected)
    },
    
    
    async verifyPokemonNamefromId (page, id, nameExpected) {
        const name = await page.innerText(selectors.pokemonName.replace("#Repl", id))
        await expect(name.toLowerCase()).toEqual(nameExpected.toLowerCase())
    },

}