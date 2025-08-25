/*   Añade la siguiente línea al final del fichero "log.txt":
 
  "Nuevo acceso detectado."
 
  Si el fichero no existe, debe crearse. 

  */

  const fs = require('fs');

const mensaje = 'Nuevo acceso detectado.\n';

fs.appendFile('log.txt', mensaje, (err) => {
  if (err) {
    console.error('Error al escribir en el fichero:', err);
  } else {
    console.log('Línea añadida correctamente a "log.txt".');
  }
});
