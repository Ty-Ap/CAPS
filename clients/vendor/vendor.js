'use strict';

// const eventPool = require('../eventPool');


var Chance = require('chance');
var chance = new Chance();


const vendorOrder = (socket, payload = null) =>{
  if(!payload){
    payload = {
      store: '1-800-flowers',
      orderID: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  socket.emit('JOIN', payload.store);
  console.log('VENDOR: Order ready for pickup.');
  socket.emit('pickup', payload);
};

const deliveredThanks = (payload) => {
  console.log(`VENDOR: recieved ${payload.orderID} thank you!`);
};

module.exports = {vendorOrder, deliveredThanks};

// module.exports = (store) => {
  
//   const payload = {
//     store: store,
//     orderID: chance.guid(),
//     customer: chance.name(),
//     address: chance.address(),
//   };

//   // console.log(`PICKUP: ${{ payload }}`);
//   socket.emit('pickup', payload);

// };
