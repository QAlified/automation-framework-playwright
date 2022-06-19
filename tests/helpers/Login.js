const { expect } = require('@playwright/test');
const selectors = require('../selectors.json');
const parameters = require('../parameters.json');


module.exports = {

    async  goToDemoCuraKatalon (page) {
        await page.goto(parameters.curaDemoKatalonLink);

    },

    async clickMakeAppointment (page) {
        await page.click(selectors.DemoCuraKatalon.buttonMakeAppointment)
    },

    async setUsername (page) {
        await page.fill(selectors.DemoCuraKatalon.inputUsername, 'John Doe')
    },

    async setPassword (page) {
        await page.fill(selectors.DemoCuraKatalon.inputPassword, 'ThisIsNotAPassword')
    },

    async clickLogin (page) {
        await page.click(selectors.DemoCuraKatalon.buttonLogin)
    },

    async clickMenu (page) {
        await page.click(selectors.DemoCuraKatalon.buttonMenu)
    },


    //Verify
    async verifyLogin (page) {
        const logout =  await page.locator(selectors.DemoCuraKatalon.buttonLogout)
        await expect(logout).toBeVisible()
    }

}