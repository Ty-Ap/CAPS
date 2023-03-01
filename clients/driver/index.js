'use strict';


const handler = require('./driver');
const { io } = require('socket.io-client');

const socket = io.connect('http://localhost:3001/caps');

socket.on('pickup', (payload) => {
  setTimeout(() => {
    handler(payload);
  }, 1000);
});

socket.on('in-transit', (payload) => {
  setTimeout(() => {
    socket.emit('delivered', payload);

  }, 1000);
});

socket.on('delivered', (payload) => {
  console.log(`DRIVER: delivered ${payload.orderID}`);
});