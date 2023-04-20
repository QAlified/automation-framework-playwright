//Se importa la función 'expect'
const { expect } = require('@playwright/test');
//Se importan los selectores a utilizar y se guardan en una variable para su invocación
const selectors = require('../../selectors/qalified.json');
//Se importan los parámetros a utilizar y se guardan en una variable para su invocación
const parameters = require('../../config/parameters.json');


module.exports = {
    //Se redirige a la URL especificada en el parámetro qalifiedLink
    async  goToQAlified (page) {
        await page.goto(parameters.qalifiedLink);

    },
    //Se hace click en el elemento buttonContact
    async clickContact (page) { 
        await page.click(selectors.buttonContact)      
    },
    //Se hace click en el elemento aNews
    async clickNews (page) { 
        await page.click(selectors.aNews)      
    },
    //Se llena el campo inputName con el texto 'James Bond'
    async setName (page) {
        await page.fill(selectors.inputName, 'James Bond')
    },
    //Se llena el campo textArea_msg con el texto 'My name is Bond, James Bond...'
    async  setMessage (page) {
        await page.fill(selectors.textArea_msg, 'My name is Bond, James Bond...')
    },

    //Se verifica que el elemento 'name' tenga el valor 'James Bond' en alguno de sus atributos
    async verifyEnteredName (page) {
        const name =  await page.locator(selectors.inputName)
        await expect(name).toHaveValue('James Bond')
    },

    //Se verifica que el elemento 'message' tenga el valor 'My name is Bond, James Bond...' en alguno de sus atributos
    async verifyEnteredMessage (page) {
        const message =  await page.locator(selectors.textArea_msg)
        await expect(message).toHaveValue('My name is Bond, James Bond...')
    },

    //Se valida que la captura de pantalla guardada de la página coincida con la pantalla actual
    async verifyScreenshot (page) {

        
        await expect(page).toHaveScreenshot();
    }
    
}