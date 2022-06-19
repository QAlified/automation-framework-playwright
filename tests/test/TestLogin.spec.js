const { test } = require('@playwright/test');
const Helpers = require('../helpers/HelpersConfig');


test.beforeEach(async ({ page }) => {
    await Helpers.Login.goToDemoCuraKatalon(page);
});

test.describe('CURA Healthcare Service', () => {

   test('Test Login', async ({ page }) => {
       await Helpers.Login.clickMakeAppointment(page)
       await Helpers.Login.setUsername(page)
       await Helpers.Login.setPassword(page)
       await Helpers.Login.clickLogin(page)
       await Helpers.Login.clickMenu(page)
       await Helpers.Login.verifyLogin(page)
       
   });

});  