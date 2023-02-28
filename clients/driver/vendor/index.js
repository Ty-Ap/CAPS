'use strict';

// const eventPool = require('../eventPool');
const handler = require('./vendor');


const { io } = require('socket.io-client');

const socket = io.connect('http://localhost:3001/caps');

let store = '1-206-flowers';

socket.emit('JOIN', store);


setInterval(() => {
  handler(store);
}, 3000);


socket.on('delivered', (payload) => {
  console.log(`VENDOR: Order ${payload.orderID} delivered`);
  process.exit(0);
});

// var Chance = require('chance');
// var chance = new Chance();


// const newPackage = (store) => {
//   setInterval(() => {

//     const payload = {
//       store: store,
//       orderID: chance.guid(),
//       customer: chance.name(),
//       address: chance.address(),
//     };
//     eventPool.emit('pickup', payload);
//   }, 5000);
// }  


// module.exports = newPackage;

// eventPool.on('VENDOR', (store) => {
//   setTimeout(() => {
//     handler(store);
//   }, 1000);
// });