/* 
  Crea un fichero llamado "user.json" que contenga el siguiente objeto convertido en JSON:
 
  {
    "name": "Ana",
    "age": 30,
    "email": "ana@mail.com"
  }
 */


const fs = require('fs');

const path = require('path');

const user = {
  name: "Ana",
  age: 30,
  email: "ana@mail.com"
};

const contenidoJSON = JSON.stringify(user, null, 2);

fs.writeFile('user.json', contenidoJSON, (err) => {
  if (err) {
    console.error('Error al crear el archivo:', err);
  } else {
    console.log('Archivo "user.json" creado correctamente.');
  }
});
