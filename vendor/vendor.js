const eventPool = require('../eventPool');

function simulatePickup(storeName) {
  const vendorOrderPayload = { storeName };
  eventPool.emit('pickup', vendorOrderPayload);
};

module.exports = simulatePickup();