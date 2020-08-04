const axios = require('axios');
const getLugarLatLon = async ( direccion )=>{
// el API ya realiza el encoded
//const encodedDireccion = encodeURI(direccion);
var instance = axios.create({
    baseURL:`https://geocode.xyz/${direccion}?json=1&auth=493428707938635550566x6860`,
    timeout:15000,
})

const resp = await instance.get();
    if(resp.data.err || !resp.data.standard)
    throw new Error('No se encontraron resultados para ', direccion)

    const dir = `${resp.data.standard.city}, ${resp.data.standard.countryname}`;
    const lat = resp.data.latt;
    const lon = resp.data.longt;
    return {
        direccion:dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}