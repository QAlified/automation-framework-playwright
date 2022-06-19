const { expect } = require('@playwright/test');
const selectors = require('../selectors.json');
const parameters = require('../parameters.json');


module.exports = {

    async  goToQAlified (page) {
        await page.goto(parameters.qalifiedLink);

    },

    async clickContact (page) { 
        await page.click(selectors.QAlified.buttonContact)      
    },

    async setName (page) {
        await page.fill(selectors.QAlified.inputName, 'James Bond')
    },

    async  setMessage (page) {
        await page.fill(selectors.QAlified.textArea_msg, 'My name is Bond, James Bond...')
    },

    //Verifys
    async verifyEnteredName (page) {
        const name =  await page.locator(selectors.QAlified.inputName)
        await expect(name).toHaveValue('James Bond')
    },

    async verifyEnteredMessage (page) {
        const message =  await page.locator(selectors.QAlified.textArea_msg)
        await expect(message).toHaveValue('My name is Bond, James Bond...')
    }


    
}