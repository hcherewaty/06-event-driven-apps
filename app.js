'use strict';

const fs = require('fs');
// const EE = require('events');
const util = require('util');
// const events = new EE();
const readFile = util.promisify(fs.readFile);
const events = require('./events.js');
const func = require('./functions.js');



const alterFile = (file) => {
  readFile(file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    return text;
  }).then(text => {
    fs.writeFile( file, text.toString().toUpperCase(), (err, data) => {
      if(err) { throw err; }
      events.emit('saved', file);
    });
  })
    .catch(err => events.emit('error', err));
};

// function handleError(error) {
//   events.on('error', error);
// }

// events.on('saved', save);

// function save(file) {
//   console.log(`${file} saved`);
// }

let file = process.argv.slice(2).shift();
alterFile(file);
