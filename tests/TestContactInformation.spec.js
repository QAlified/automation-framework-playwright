const { test } = require('@playwright/test');
const QalifiedMainPage = require('../helpers/QAlifedPage/QAlified.js');

test.beforeEach(async ({ page }) => {
     await QalifiedMainPage.goToQAlified(page);
});

test.describe('Test sobre web QAlified', () => {

    test('Test Contact Information', async ({ page }) => {
        await QalifiedMainPage.clickContact(page)
        await QalifiedMainPage.setName(page)
        await QalifiedMainPage.setMessage(page)
        await QalifiedMainPage.verifyEnteredName(page)
        await QalifiedMainPage.verifyEnteredMessage(page)
    });


    test('Test Visual', async ({ page }) => {
        
        await QalifiedMainPage.clickNews(page)
        await QalifiedMainPage.verifyScreenshot(page)
      });

});    