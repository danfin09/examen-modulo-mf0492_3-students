/*  Renombra el archivo "user.json" a "usuario.json". */

const fs = require('fs');

fs.rename('user.json', 'usuario.json', (err) => {
  if (err) {
    console.error('Error al renombrar el archivo:', err);
  } else {
    console.log('Archivo renombrado correctamente a "usuario.json".');
  }
});
