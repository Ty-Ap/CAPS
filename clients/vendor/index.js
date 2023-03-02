'use strict';

// const eventPool = require('../eventPool');
const {vendorOrder, deliveredThanks} = require('./vendor');


const { io } = require('socket.io-client');

const socket = io.connect('http://localhost:3001/caps');



socket.emit('getAll', {store: '1-800-flowers'});


setInterval(() => {
  vendorOrder(socket);
}, 3000);


socket.on('delivered', (payload) => {
  deliveredThanks(payload);
  socket.emit('received', payload);
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