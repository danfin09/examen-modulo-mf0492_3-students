/*   Lee el fichero "user.json" y muestra por consola el nombre del usuario.
 */

const fs = require('fs');

fs.readFile('user.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el fichero:', err);
    return;
  }

  const user = JSON.parse(data);
  console.log('Nombre del usuario:', user.name);
});
2