'use strict';

const eventPool = require('./eventPool');
require('./vendor/vendor');
require('./driver/driver.js');



eventPool.on('package', (payload) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - package event received: ${JSON.stringify(payload)}`);
});



eventPool.on('package', (payload) => {
  console.log('GlobalEventPool: package event received');
});

eventPool.on('pickup', (payload) => {
  console.log('GlobalEventPool: pickup event received');
});

eventPool.on('in-transit', (payload) => {
  console.log('GlobalEventPool: in-transit event received');
});

eventPool.on('delivered', (payload) => {
  console.log('GlobalEventPool: delivered event received');
});

