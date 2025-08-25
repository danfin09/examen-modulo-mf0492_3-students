/*   Lee el fichero "poema.txt" y reemplaza todas las apariciones de la palabra "noche" por "día".
  Guarda el resultado en un nuevo archivo llamado "poema-editado.txt".
  */

  const fs = require('fs');


fs.readFile('poema.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el fichero:', err);
    return;
  }

  
  const contenidoEditado = data.replace(/noche/g, 'día');

  fs.writeFile('poema-editado.txt', contenidoEditado, (err) => {
    if (err) {
      console.error('Error al escribir el fichero editado:', err);
    } else {
      console.log('Fichero "poema-editado.txt" con palabra cambiada.');
    }
  });
});

