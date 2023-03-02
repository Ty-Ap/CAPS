'use strict';

const { io } =require('socket.io-client');
const { deliveredThanks, widgetOrder } = require('./widgets');

const socket = io.connect('http://localhost:3001/caps');

socket.emit('getAll', {store: 'acme-widgets'});

setInterval(()=>{
  widgetOrder(socket);

}, 7000);

socket.on('delivered', (payload) =>{
  deliveredThanks(payload);
  socket.emit('received', payload);
});