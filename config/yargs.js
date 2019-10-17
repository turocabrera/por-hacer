const descripcion = {
    demand: true,
    alias: 'd'
}


const completado = {
    alias: 'c',
    demand: true
}

const argv = require('yargs')
    .command('crear', 'Crear elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza elemento por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'listar elementos por hacer')
    .command('borrar', 'borrar elemento por hacer', {

    })
    .help()
    .argv;

module.exports = {
    argv
}