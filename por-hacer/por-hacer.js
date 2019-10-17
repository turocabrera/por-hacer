const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
        let data = JSON.stringify(listadoPorHacer);
        data = escribirDisco(data);
        console.log(data);
    }
    /**
     * 
     * @param {*} data 
     */
const escribirDisco = (data) => {
        return new Promise((resolve, reject) => {

            fs.writeFile(`db/data.json`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`${data}`);
                }
            });
        });
    }
    /**
     * 
     */
const cargarDB = () => {
        try {
            listadoPorHacer = require('../db/data.json');
        } catch (error) {
            listadoPorHacer = [];
        }
        console.log(listadoPorHacer);
    }
    /**
     * 
     * @param {*} descripcion 
     */
const crear = (descripcion) => {

        cargarDB();

        let porHacer = {
            descripcion,
            completado: false
        };

        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    }
    /**
     * obtener listado
     */
const getListado = () => {
        cargarDB();
        return listadoPorHacer;
    }
    /**
     * Actualizar un elemento
     * @param {*} descripcion 
     * @param {*} completado 
     */
const actualizar = (descripcion, completado) => {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

        if (index >= 0) {
            listadoPorHacer[index].completado = completado;
            guardarDB();
            return true;
        }
        return false;
    }
    /**
     * Borrar un elemento de la lista
     * @param {*} descripcion 
     */
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}