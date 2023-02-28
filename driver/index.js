'use strict';

const eventPool = require('../eventPool');
const handler = require('./driver');


eventPool.on('pickup', (payload) => {
  setTimeout(() => {
    handler(payload);
  }, 1000);
});