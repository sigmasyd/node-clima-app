const axios = require('axios');

const getLugarLatLng = async ( dir ) => { 
  const encodedUrl = encodeURI( dir );
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {'x-rapidapi-key': 'e9cd5926a8msh8116907e2db34bdp10ac62jsnc98936b56062'}
  });

  const resp = await instance.get();

  if( resp.data.Results && resp.data.Results.length === 0 ){
    throw new Error(`No hay resultados para ${dir}`);
  }

  if(resp.data.Results){
    const data = resp.data.Results[0];
  }
  
  const direccion = 'New York City, New York'; //data.name;
  const lat = '40.750000'; //data.lat;
  const lng = '-74.000000'; //data.lon;
  
  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}