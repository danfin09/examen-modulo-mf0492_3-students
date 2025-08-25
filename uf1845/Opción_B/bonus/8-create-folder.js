/*  Crea una carpeta llamada "archivos" si no existe.
Si carpeta ya existe, muestra un mensaje de error */

const fs = require('fs');
const carpeta = 'archivos';

fs.access(carpeta, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(carpeta, (err) => {
      if (err) {
        console.error(`Error al crear la carpeta: ${err}`);
      } else {
        console.log(`Carpeta "${carpeta}" creada correctamente.`);
      }
    });
  } else {
    console.error(`Error: La carpeta "${carpeta}" ya existe.`);
  }
});
