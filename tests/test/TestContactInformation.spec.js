const { test } = require('@playwright/test');
const Helpers = require('../helpers/HelpersConfig');

test.beforeEach(async ({ page }) => {
     await Helpers.QAlified.goToQAlified(page);
});

test.describe('QAlified', () => {

    test('Test Contact Information', async ({ page }) => {
        await Helpers.QAlified.clickContact(page)
        await Helpers.QAlified.setName(page)
        await Helpers.QAlified.setMessage(page)
        await Helpers.QAlified.verifyEnteredName(page)
        await Helpers.QAlified.verifyEnteredMessage(page)
    });

});    