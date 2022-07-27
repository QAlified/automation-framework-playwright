var Connection = require('tedious').Connection;
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
const Data = require("../../config/data.json");

const executeSQL = (verb, payload) => new Promise((resolve, reject) => {
    var result = "";    
    const paramPayload = (payload != null) ? JSON.stringify(payload) : '';
    

    const connection = new Connection({
        server: Datos.servidor,//Modificar en el archivo Data.json los datos de authenticacion de la DB
            authentication: {
                type: 'default',
                options: {
                    userName: Data.credenciales.usuario, //Modificar en el archivo Data.json los datos de authenticacion de la DB
                    password: Data.credenciales.password  //Modificar en el archivo Data.json los datos de authenticacion de la DB
                }
            },
            options: {
                encrypt: false,
                database: Data.BaseDatos  //Modificar en el archivo Data.json los datos de authenticacion de la DB
            }
    });
    

    const request = new Request(verb, (err) => {
        if (err) {
            reject(err);
        } else {
            if ((result == "" || result == null || result == "null")) result = "[]";  
            resolve(result);
        }       
    });    
    request.addParameter('payload', TYPES.NVarChar, paramPayload, Infinity);

    request.on('row', columns => {
        columns.forEach(column => {
            result += column.value;                
        });
    });

    connection.on('connect', err => {
        if (err) {
            reject(err);
        }
        else {
            connection.execSql(request);
        }
    });   

    connection.connect();    
});

exports.executeSQL = executeSQL;