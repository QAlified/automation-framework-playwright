// @ts-check
const { devices } = require('@playwright/test');

/**
 * Leer variables de entorno desde un archivo.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',


  /* Tiempo máxino en el que un test puede correr.*/
  timeout: 30 * 1000,
  expect: {
    /**
     * Tiempo máximo en el que un expect() debería de esperar para encontrar la condición
     * Por ejemplo en `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Correr tests en archivos en paralelo */
  fullyParallel: true,
  /*  Fallo de la compilación en CI si tu accidentalmente dejaste test.only en el código fuente*/
  forbidOnly: !!process.env.CI,
  /* Reintento solo en CI*/
  retries: process.env.CI ? 2 : 0,
  /* Optar por no correr tests paralelos en CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporte a usar. Vea https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Debajo se encuentran las configuraciones compartidas para todos los projectos. Vea https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Tiempo máximo en el que cada acción, como por ejemplo 'click', se pueda tomar. Por defecto es cero (sin límite).*/
    actionTimeout: 0,
    /* 
    URL base para usar en acciones como 'await page.goto('/')`.*/
    baseURL: 'https://pokeapi.co',

    /* Recolectar rastro cuando se reintenta un test fallido. Vea https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    launchOptions: {
      slowMo: 1000,
    },
  },

  /* Configurar projectos para la mayoría de navegadores */
  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
        //Este parámetro se utiliza con valor false para poder visualizar el navegador, en caso de que los test visuales fallen o que
        //no se quiera ver el navegador, setear en true.
        headless: false,
      },
    },
  
  ]
  /* 
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: false,
      },
    },

  //   Vista de celular. 
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        headless: false,
      },
     },
     {
      name: 'Mobile Safari',
     use: {
        ...devices['iPhone 12'],
      },
     },   
  ],
*/
  /* 
  Carpeta para los archivos de los tests como capturas de pantallas, videos, rastros, etc. */
  // outputDir: 'test-results/',

  /* Correr tu servidor de desarrollador local antes de empezar los tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;
