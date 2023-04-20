const { expect } = require('@playwright/test');
//Se importan los selectores a utilizar y se guardan en una variable para su invocación
const selectors = require('../../selectors/curaKatalon.json');
//Se importan los parámetros a utilizar y se guardan en una variable para su invocación
const parameters = require('../../config/parameters.json');


module.exports = {

    //Se redirige a la URL especificada en el parámetro curaDemoKatalonLink
    async  goToDemoCuraKatalon (page) {
        await page.goto(parameters.curaDemoKatalonLink);

    },
    //Se hace click en el elemento buttonMakeAppointment
    async clickMakeAppointment (page) {
        await page.click(selectors.Home.buttonMakeAppointment)
    },
    //Se llena el campo inputUsername con el texto 'John Doe'
    async setUsername (page) {
        await page.fill(selectors.Login.inputUsername, 'John Doe')
    },
    //Se llena el campo inputPassword con el texto 'ThisIsNotAPassword'
    async setPassword (page) {
        await page.fill(selectors.Login.inputPassword, 'ThisIsNotAPassword')
    },
    //Se hace click en el elemento buttonLogin
    async clickLogin (page) {
        await page.click(selectors.Login.buttonLogin)
    },
    //Se hace click en el elemento buttonMenu
    async clickMenu (page) {
        await page.click(selectors.Home.buttonMenu)
    },


    //Se verifica que el elemento buttonLogout sea visible
    async verifyLogin (page) {
        const logout =  await page.locator(selectors.Login.buttonLogout)
        await expect(logout).toBeVisible()
    }

}