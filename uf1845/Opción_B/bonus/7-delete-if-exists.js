/*  Borra el fichero "temp.txt" solo si existe en el directorio actual.
 Si fichero no existe, muestra un mensaje de error */

 const fs = require('fs');

const archivo = 'temp.txt';

fs.access(archivo, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Error: El archivo "${archivo}" no existe.`);
  } else {
    fs.unlink(archivo, (err) => {
      if (err) {
        console.error(`Error al borrar el archivo: ${err}`);
      } else {
        console.log(`Archivo "${archivo}" borrado correctamente.`);
      }
    });
  }
});
