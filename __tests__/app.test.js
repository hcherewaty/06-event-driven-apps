'use strict';

const events = require('./events.js');
const app = require('./app.js');
const func = require('./functions.js');

describe('helper functions', () => {
  it('it takes in one param', () => {
    let err = func.handleEror('err');
    expect(err).toBeTruthy();
  });
});