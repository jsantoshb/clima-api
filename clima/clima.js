const axios = require('axios');
const apiKey = 'e5f6817d4ce88ed3d1b015c20d52d3c4'
const getClima = async ( lat, lon )=>{

var resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

if(resp.data.cod != 200)
    throw new Error('No se pudo obtener la temperatura');

    const temperatura = resp.data.main.temp;
    const humedad = resp.data.main.humidity;
    return {
        temperatura,
        humedad
    }
}




module.exports = {
    getClima
}