const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

clima.getClima(40.750000,-74.000000)
  .then(console.log)
  .catch(console.log);

// lugar.getLugarLatLng(argv.direccion)
//   .then(console.log);



  