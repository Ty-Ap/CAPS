'use strict';

let Chance = require('chance');
let chance = new Chance();

const widgetOrder = (socket, payload = null) => {
  if(!payload){
    payload = {
      store: 'acme-widgets',
      orderID: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }

  socket.emit('JOIN', payload.store);
  console.log('VENDOR: Order to be picked up');
  socket.emit('pickup', payload);
};

const deliveredThanks = (payload) => {
  console.log(`VENDOR: recieved ${payload.orderID} thank you!`);
};


module.exports = {widgetOrder, deliveredThanks};


