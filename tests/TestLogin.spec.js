//Se importan las funciones correspondientes de Playwright
const { test } = require('@playwright/test');
//Se importa el módulo Login
const Login = require('../helpers/CURA/Login.js');

//Se ejecutan acciones antes de realizar el test principal
test.beforeEach(async ({ page }) => {
    await Login.goToDemoCuraKatalon(page);
});


test.describe('Tests sobre CURA Healthcare Service', () => {

   test('Test Login', async ({ page }) => {
        //Se invocan varias funciones referente al módulo Login
       await Login.clickMakeAppointment(page)
       await Login.setUsername(page)
       await Login.setPassword(page)
       await Login.clickLogin(page)
       await Login.clickMenu(page)
       await Login.verifyLogin(page)
       
   });

});  