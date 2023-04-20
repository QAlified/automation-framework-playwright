# Playwright Template

El proyecto consiste en un framework de automatización de pruebas basado en Playwright que sirve como punto de partida en cualquier proyecto de automatización de pruebas web UI.

Este framework provee todas las funcionalidades necesarias para abordar la automatización de pruebas web con Playwright de una forma estándar, reduciendo tiempos de configuración y construcción, minimizando la curva de aprendizaje y el nivel técnico requerido para su uso.

A su vez, encapsula lógica en común y brinda un marco de trabajo fácilmente configurable y extendible según la necesidad de cada proyecto.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia local del proyecto en funcionamiento para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Requisitos necesarios para el correcto funcionamiento del template y cómo instalarlos.

* [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win)
* [Nodejs](https://nodejs.org/en/download)
* Extensión 'Playwright Test for VSCode' en Visual Studio Code (Opcional)


### Instalación 🔧

A continuación se describen los pasos para descargar e instalar el template y visualizarlo desde Visual Studio Code.

1. Descargar una copia o clonar el código del repositorio desde GitHub.
2. Importar el proyecto en Code.
3. Desde la barra de herramientas superior, dirigirse a _Terminal > New Terminal_
4. Desde la terminal, ejecutar el comando _npm install_

Este proceso también se puede realizar desde una terminal nativa de su sistema operativo.

## Diseño de pruebas ⚙️

A continuación se presenta información y ejemplos que detallan cómo comenzar a crear las pruebas automatizadas usando las clases del template.

Si ya estás familiarizad@ con los conceptos de Playwright, te invitamos a analizar y comprender la estructura de clases y paquetes del template.


### Primeros pasos

Comenzamos creando un archivo de tipo _spec.js_ en la carpeta _tests_. Dentro de dicho archivo, añadimos el siguiente código:
```javascript
//Se importan las funciones correspondientes de Playwright
const { test } = require('@playwright/test');

   test('Test de ejemplo', async ({ page }) => {
       
   });
```

Luego de esto debemos crear los POM (Page Object Model) para mejor orden y comprendimiento de las pruebas. Para ello, creamos un archivo con formato _.js_ dentro de la carpeta _helpers_. Dentro de dicho archivo, añadimos el siguiente código:

```javascript
module.exports = {
    
}
```

Para este ejemplo, crearemos una función el cuál nos redirige a una URL especificada, por lo que dentro del _module.exports_, añadimos el siguiente código:

```javascript
async  goToExamplePage (page) {
        await page.goto('https://qalified.com/');
},
```

Luego de esto, desde el archivo _spec.js_, importamos el módulo e invocamos la función que creamos.

```javascript
const { test } = require('@playwright/test');
const POMEjemplo = require('../helpers/POM.js')

   test('Test de ejemplo', async ({ page }) => {
       await POMEjemplo.goToExamplePage(page);
   });
```

Finalmente, para ejecutar nuestro test hay dos maneras: A través de la terminal o desde la extensión _Playwright Test for VSCode_.

##### Terminal
1. Abrimos una nueva terminal desde la pestaña _Terminal > New Terminal_, utilizamos la terminal por defecto de nuestro sistema operativo o utilizamos una terminal previamente creada.

2. Desde dicha terminal, ejecutamos el comando ```npx playwright test -g 'Test de ejemplo'```

##### Extensión
1. Presionamos sobre el ícono 'Testing', ubicado en la barra lateral izquierda
2. Ejecutamos las pruebas deseadas desde el directorio de tests desplegados

### Interactuando con elementos de la web

Utilizando el parámetro _page_  es posible simular interacciones con los distintos elementos de la interfaz gráfica Web. Para ello, primero se define el parámetro _page_ dentro del test. 

```javascript
test('Test de ejemplo', async ({ page }) =>...
```

Dentro de los scripts con formato _.js_, realizamos una función con clicks en elementos.

```javascript
//También se debe de añadir el parámetro 'page' en los paréntesis las funciones para poder utilizar dichas funcionalidades
async  clickOnButton (page) {
        await page.click("//button[@class='botonejemplo']");
},
```
Cabe destacar que siempre que se pueda, se deben de parametrizar los selectores, URLs y/o textos que se utilizen de forma recurrente. Para ello, se utilizan archivos _.json_ creados en la carpeta _config_ o _selectors_, según corresponda el contexto. 

_Ejemplo de un archivo JSON:_
```JSON
{
    "buttonExample":"//button[@class='botonejemplo']"
}
```

_Posterior importación y uso en los scripts:_
```javascript
const Data = require("../config/dataExample.json");
module.exports = {
    async  clickOnButton (page) {
        await page.click(Data.buttonExample);
    }
}
```

Para conocer más acciones disponibles con el parámetro _page_, visitar el apartado _Actions_ en la [documentación de Playwright](https://playwright.dev/docs/input).

### Verificaciones  _(Assertions)_ 

Para incorporar las verificaciones, es necesario importar la clase _expect_ en los scripts.
```javascript
const { expect } = require('@playwright/test');
```

Existen una multitud de validaciones con dicha clase. En el siguiente ejemplo se utiliza la función _toHaveText_  para verificar el texto ingresado en un elemento HTML de tipo párrafo.

```javascript
async verificarTexto(page){
    await expect("//p[@class='textoejemplo']").toHaveText('Hola Mundo');
}
```

También se pueden realizar validaciones según capturas de pantallas con la función _toHaveScreenshot()_. Cabe destacar que en caso de no tener una captura guardada con el nombre dado (En caso de que se lo haya guardado con un nombre específico), la primera ejecución de la prueba fallará y se creará una captura de pantalla automáticamente. Así a la segunda ejecución se verificará la pantalla del navegador contra dicha captura.

```javascript
async verificarVista(page){
    await expect(page).toHaveScreenshot(pantallaprincipal.jpg);
}
```

Con las sintaxis de _expect_ especificadas anteriormente, sucederá que si dicha verificación falla, la prueba entera se detendrá. Para evitar esto se puede utilizar la función _expect.soft_, así la prueba continuará a pesar de haber fallado dicha verificación, y mostrará un error al finalizarse.

```javascript
async verificarVista(page){
    await expect.soft(page).toHaveScreenshot(pantallaprincipal.jpg);
}
```

Para conocer mas usos de la clase _expect_, visitar el apartado _Assertions_ en la [documentación de Playwright](https://playwright.dev/docs/test-assertions).

### Reportes

Al finalizar una ejecución, el framework crea un reporte con los resultados de la ejecución. Dicho reporte se encuentra por defecto en la carpeta _playwright-report_ y se encuentra en formato HTML por defecto, pero también se puede realizar en formato JSON, XML, acciones de Github y/o reportes personalizados. Cada uno tiene una método de configuración distinto.

El reporte HTML puede ser visualizado abriendo el archivo con el mismo formato en la carpeta _playwright-report_ o puede ser abierto mediante la terminal con el comando ```npx playwright show-report```

Por defecto, cada vez que se corre un test, el reporte es reemplazado por el nuevo generado. Esto si se quiere se puede modificar de distintas maneras, entre ellas están cambiando el nombre de cada reporte mediante código o habilitando el visor de rastro. Esto último se realiza agregando el argumento _--trace on_ a nuestro comando de ejecutar pruebas mediante la terminal.

Puede leer más acerca de esto en  el apartado _Reporters_ [aquí](https://playwright.dev/docs/test-reporters).

Por información más específica sobre el Visor de Rastro, lea el apartado _Trace Viewer_ [aquí](https://playwright.dev/docs/trace-viewer-intro)

### Otras funcionalidades

 * _Request_ : Manejo de peticiones hacia APIs y Bases de Datos.
 * _Connection_ : Manejo de conexiones a bases de datos.
 * _TYPES_ : Manejos de tipos de variables SQL en las peticiones sobre Bases de Datos.

## Construido con 🛠️

* [Playwright](https://playwright.dev/) - El framework de automatización.
* [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win) - Editor de código.

## Autores ✒️

* [**QAlified**](https://qalified.com/)

## Contacto 📢

info@qalified.com

---
⌨️ con ❤️ por QAlified
