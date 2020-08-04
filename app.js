const colors = require('colors');
const lugar  = require('./lugar/lugar');
const clima  = require('./clima/clima');
const { getLugarLatLon } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options(
    {
        direccion:{
            alias:'d',
            desc:'Nombre de la ciudad para obtener el clima',
            demand:true
        }
    })
    .argv

    // clima.getClima(35,139)
    //     .then(console.log)
    //     .catch(console.log)
    // lugar.getLugarLatLon(argv.direccion)
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err))

    const getInfo = async ( direccion )=>{

        let coords = await getLugarLatLon(direccion);
        let clima = await getClima(coords.lat, coords.lon)

        return `El clima de ${direccion} es de ${clima.temperatura} C, humedad ${clima.humedad}%`.blue;
    }

    getInfo(argv.direccion)
        .then(console.log)
        .catch(err => console.log(`No se encontraron resultados para ${argv.direccion}`.red))

