const fetchDataIndex = require('../utils/fetchDataIndex');
const API = 'http://rickandmortyapi.com/api/character/';

const getCharacternDimension = async (url_api,index) => {
  try {
    const data = await fetchDataIndex(url_api)
    const character = await fetchDataIndex(`${url_api}${data.results[index].id}`)
    const origin = await fetchDataIndex(character.origin.url) 
  
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error('Hubo un error: ', error);
  }
}

const loopGet = async () => {
console.log('Before');
for (let index = 0; index < 5; index++) {
  
  await getCharacternDimension(API,index);
}
console.log('After');
}
loopGet()