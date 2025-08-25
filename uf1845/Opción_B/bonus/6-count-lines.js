/*   Lee el archivo "poema.txt" y muestra cuántas líneas contiene. */

const fs = require('fs');

fs.readFile('poema.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const lineas = data.split('\n');
  console.log(`El archivo contiene ${lineas.length} líneas.`);
});
