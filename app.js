const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
 
const getInfo = async (direccion) => {
  try{
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat,coords.lng);
    return `El clima de ${coords.direccion} es de ${temp}`;
  }catch(e){
    console.log(e);
    return `No se pudo determinar el clima de ${direccion}`;
  }
}
  
getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);