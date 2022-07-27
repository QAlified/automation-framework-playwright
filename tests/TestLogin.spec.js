const { test } = require('@playwright/test');
const Login = require('../helpers/CURA/Login.js');


test.beforeEach(async ({ page }) => {
    await Login.goToDemoCuraKatalon(page);
});

test.describe('Tests sobre CURA Healthcare Service', () => {

   test('Test Login', async ({ page }) => {
       await Login.clickMakeAppointment(page)
       await Login.setUsername(page)
       await Login.setPassword(page)
       await Login.clickLogin(page)
       await Login.clickMenu(page)
       await Login.verifyLogin(page)
       
   });

});  