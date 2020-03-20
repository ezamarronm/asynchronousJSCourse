let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //guardamos en la variable sólo el objeto XMLHttpRequest y no todo el require

const fetchData = (url_api) => {
  return new Promise((resolve,reject) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api, true); //Abrimos una conexión a la API con el asincronismo en TRUE
    xhttp.onreadystatechange = (() => { //Escuchamos los cambios de la conexion
      if (xhttp.readyState === 4) { //Si la peticion ha sido completada
        (xhttp.status === 200) //Si la peticion regresó un OK
          ? resolve(JSON.parse(xhttp.responseText)) // Resolvemos regresando el JSON
          : reject (new Error('Error', url_api)) //Sino regresamos un error
      }      
    });
    xhttp.send();
  })
}

module.exports = fetchData;
