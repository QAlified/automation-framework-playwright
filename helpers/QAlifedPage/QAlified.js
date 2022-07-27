const { expect } = require('@playwright/test');
const selectors = require('../../selectors/qalified.json');
const parameters = require('../../config/parameters.json');


module.exports = {

    async  goToQAlified (page) {
        await page.goto(parameters.qalifiedLink);

    },

    async clickContact (page) { 
        await page.click(selectors.buttonContact)      
    },
    
    async clickNews (page) { 
        await page.click(selectors.aNews)      
    },

    async setName (page) {
        await page.fill(selectors.inputName, 'James Bond')
    },

    async  setMessage (page) {
        await page.fill(selectors.textArea_msg, 'My name is Bond, James Bond...')
    },

    //Assertions
    async verifyEnteredName (page) {
        const name =  await page.locator(selectors.inputName)
        await expect(name).toHaveValue('James Bond')
    },

    async verifyEnteredMessage (page) {
        const message =  await page.locator(selectors.textArea_msg)
        await expect(message).toHaveValue('My name is Bond, James Bond...')
    },

    async verifyScreenshot (page) {

        
        await expect(page).toHaveScreenshot();
    }
    
}