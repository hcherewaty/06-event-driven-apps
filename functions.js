'use strict';

const events = require('./events.js');
const app = require('./app.js');

events.on('error', handleError);
events.on('saved', handleSave);

function handleError(error) {
  console.error(error);
}

function handleSave(file) {
  console.log(`${file} saved`);
}