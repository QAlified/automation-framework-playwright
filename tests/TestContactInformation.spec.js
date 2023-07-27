//Se importan las funciones correspondientes de Playwright
const { test } = require('@playwright/test');
//Se importa el módulo QAlified
const QalifiedMainPage = require('../helpers/QAlifedPage/QAlified.js');

//Se ejecutan acciones antes de realizar el test principal
test.beforeEach(async ({ page }) => {
    //Se invoca la función goToQAlified
     await QalifiedMainPage.goToQAlified(page);
});

test.describe('Test sobre web QAlified', () => {

    test('Test Contact Information', async ({ page }) => {
        //Se invocan varias funciones referente al módulo QalifiedMainPage
        await QalifiedMainPage.clickContact(page)
        await QalifiedMainPage.setName(page)
        await QalifiedMainPage.setMessage(page)
        await QalifiedMainPage.verifyEnteredName(page)
        await QalifiedMainPage.verifyEnteredMessage(page)
    });

    test('Test Visual', async ({ page}) => {
        
        //Se invocan varias funciones referente al módulo QalifiedMainPage
        await QalifiedMainPage.clickNews(page)
        await QalifiedMainPage.verifyScreenshot(page)
      });

});    