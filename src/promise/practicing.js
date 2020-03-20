const fetchData = require('../utils/fetchDataIndex');
const API = 'https://rickandmortyapi.com/api/character/';
const API2 = 'https://rickandmortyapi.com/api/character/'; 

// //for (let index = 0; index < 5; index++) {  
//   fetchData(API)
//   .then(data => {
//     console.log(data.info.count);
//     return fetchData(`${API}${data.results[0].id}`)
//     //console.log(data.info.count, index);
//     //return fetchData(`${API}${data.results[index].id}`)
//   })
//   .then(data => {
//     console.log(data.name)
//     return fetchData(data.origin.url);
//   })
//   .then(data => {
//     console.log(data.dimension)
//   })
//   .catch( err => console.error(err))
// //}

// const ids = [1,2,3,4,5,6,7];
const ids = [0,1,2,3,4,5];
let promesas = ids.map( id => fetchData(API,id))
Promise.all(promesas)
.then(data => {

  let promesas = ids.map( id => fetchData(`${API}${data[id].results[id].id}`,id))
  Promise.all(promesas)
  .then(data => {
    let promesas = ids.map ( id => fetchData(data[id].origin.url));
    let nombres = ids.map( id => data[id].name)
    console.log(nombres)
    Promise.all(promesas)
    .then(data =>{
      let dimensiones = ids.map (id => data[id].dimension)
      console.log(dimensiones);
    })
  })
})


// fetchData(API)
// .then(data => {
//   console.log(data.info.count);
//   return fetchData(`${API}${data.results[0].id}`)
//   //console.log(data.info.count, index);
//   //return fetchData(`${API}${data.results[index].id}`)
// })
// .then(data => {
//   console.log(data.name)
//   return fetchData(data.origin.url);
// })
// .then(data => {
//   console.log(data.dimension)
// })
// .catch( err => console.error(err))

