const axios = require('axios');

const getClima = async (lat,lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7c32305720b8a75d1143be94377b9338&units=metric`);
  return resp.data.main.temp;
}

module.exports = {
  getClima
}