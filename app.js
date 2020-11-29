const axios = require('axios');
const argv = require('./config/yargs').argv;


const encodedUrl = encodeURI(argv.direccion);
console.log(argv.direccion,encodedUrl);

const instance = axios.create({
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
  headers: {
    'x-rapidapi-key': 'e9cd5926a8msh8116907e2db34bdp10ac62jsnc98936b56062'
  }
});

instance.get()
  .then(resp => {
    console.log(resp.data.Results);
  })
  .catch(console.log)
  ;