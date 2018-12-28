'use strict';

const events = require('../events.js');
const app = require('../app.js');
const log = require('../functions.js');

describe('events', () => {
  it('spys on error console.log', () => {
    let consoleSpy = jest.spyOn(console, 'error');
    log.handleError();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('spys on save console.log', () => {
    let consoleSpy = jest.spyOn(console, 'message');
    log.handleSave();
    expect(consoleSpy).toHaveBeenCalled();
  });
});