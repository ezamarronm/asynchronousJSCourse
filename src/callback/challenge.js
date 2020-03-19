let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //guardamos en la variable sólo el objeto XMLHttpRequest y no todo el require
// let API = 'https://rickandmortyapi.com/api/character';
let API = 'https://rickandmortyapi.com/api/character/'


function fetchData(url_api, callback){
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET',url_api, true); //Abrimos una conexión a la API con el asincronismo en TRUE
  xhttp.onreadystatechange = function (event) { //Escuchamos los cambios de la conexion
    if (xhttp.readyState === 4) { //Si la peticion ha sido completada
      if (xhttp.status === 200) { //Si la peticion regreso un OK
        callback(null, JSON.parse(xhttp.responseText)); //iniciamos el la funcion callback que hara uso de la informacion; parseamos puese la respuesta que se recibe es un texto
        //console.log(JSON.parse(xhttp.responseText))
      }else{
        const error = new Error('Error ' + url_api + ' status: ' + xhttp.status) ;
        return callback(error, null); //callback(error, informacion)
      }
    }      
  }
  xhttp.send();
}

for (let index = 0; index < 5; index++) {
  fetchData(API, function (error1, data1) {
    if (error1) {
      return console.log(error1);
    }
    fetchData(API + data1.results[index].id, function (error2, data2) {
      if(error2) return console.error(error2);
      fetchData(data2.origin.url, function (error3, data3) {
        if(error3) return console.log(error3);
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
      })
    })
  })

}
