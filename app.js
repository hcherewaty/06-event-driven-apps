'use strict';

const fs = require('fs');
const EE = require('events');
const util = require('util');
const events = new EE();
const readFile = util.promisify(fs.readFile);


const alterFile = (file) => {
  readFile(file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    return text;
  }).then(text => {
    fs.writeFile( file, text.toString().toUpperCase(), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  })
    .catch(err => events.emit('error', handleError));
};

function handleError(error) {
  events.on('error', error);
}





let file = process.argv.slice(2).shift();
alterFile(file);
