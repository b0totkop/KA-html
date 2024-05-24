const fs = require('fs');

// directories
if (!fs.existsSync('./vers')) {
    fs.mkdir('./vers', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder created');
    });
  } else {
    fs.rmdir('./assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder deleted');
    });
}

// writing files
fs.writeFile('./vers/oszlopok.txt', 'petőfi sándor: oszlopok\nlemegyek a boltba\noszlopok', () => {
    console.log('file was written');
});

// reading files
fs.readFile('./vers/oszlopok.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});