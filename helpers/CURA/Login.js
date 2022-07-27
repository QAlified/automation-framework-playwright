const { expect } = require('@playwright/test');
const selectors = require('../../selectors/curaKatalon.json');
const parameters = require('../../config/parameters.json');


module.exports = {

    async  goToDemoCuraKatalon (page) {
        await page.goto(parameters.curaDemoKatalonLink);

    },

    async clickMakeAppointment (page) {
        await page.click(selectors.Home.buttonMakeAppointment)
    },

    async setUsername (page) {
        await page.fill(selectors.Login.inputUsername, 'John Doe')
    },

    async setPassword (page) {
        await page.fill(selectors.Login.inputPassword, 'ThisIsNotAPassword')
    },

    async clickLogin (page) {
        await page.click(selectors.Login.buttonLogin)
    },

    async clickMenu (page) {
        await page.click(selectors.Home.buttonMenu)
    },


    //Verify
    async verifyLogin (page) {
        const logout =  await page.locator(selectors.Login.buttonLogout)
        await expect(logout).toBeVisible()
    }

}