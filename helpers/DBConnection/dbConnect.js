//Se importan los componentes necesarios para crear la conexión y petición a una base de datos
var Connection = require('tedious').Connection;
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
//Se importan las credenciales de dicha base de datos
const Data = require("../../config/data.json");

const executeSQL = (verb, payload) => new Promise((resolve, reject) => {
    var result = "";    
    const paramPayload = (payload != null) ? JSON.stringify(payload) : '';
    
    //Se ordenan dichas credenciales con su correspondiente parámetro para crear una conexión y se guarda la sintaxis en una variable
    const connection = new Connection({
        server: Datos.servidor,
            authentication: {
                type: 'default',
                options: {
                    userName: Data.credenciales.usuario, 
                    password: Data.credenciales.password
                }
            },
            options: {
                encrypt: false,
                database: Data.BaseDatos  
            }
    });
    
//Se define la función Request en una variable y se le añade un manejo de errores
    const request = new Request(verb, (err) => {
        if (err) {
            reject(err);
        } else {
            if ((result == "" || result == null || result == "null")) result = "[]";  
            resolve(result);
        }       
    });    
    //Se añade el parámetro 'payload' a la petición
    request.addParameter('payload', TYPES.NVarChar, paramPayload, Infinity);

    //Se guardan los valores de las filas según las columnas en la variable 'result'
    request.on('row', columns => {
        columns.forEach(column => {
            result += column.value;                
        });
    });

    //Se define la conexión a la base de datos
    connection.on('connect', err => {
        if (err) {
            reject(err);
        }
        else {
            connection.execSql(request);
        }
    });   

    //Se conecta a la base de datos
    connection.connect();    
});
//Se exportan las funciones del script para ser utilizadas en los tests
exports.executeSQL = executeSQL;