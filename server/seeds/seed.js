const db = require('../config/connection');
const { User, Restaurant, Order, Item, Address } = require('../models');

const userData = require('./userData.json');
const restaurantData = require('./restaurantData.json');
const addressData = require('./addressData.json');
const orderData = require('./orderData.json');

const kfcData = require('./kfcData.json');
const mcdonaldsData = require('./mcdonaldsData.json');
const ososmexicanData = require('./ososmexicanData.json');
const pizzahutData = require('./pizzahutData.json');
const subwayData = require('./subwayData.json');
const safaviData = require('./safaviData.json');


db.once('open', async () => {
  try {
    await Restaurant.deleteMany({});
    await User.deleteMany({});
    await Order.deleteMany({});
    await Item.deleteMany({});
    await Address.deleteMany({});

    await User.create(userData);
    await Address.insertMany(addressData);
    await Order.insertMany(orderData);
    await Restaurant.insertMany(restaurantData);

    for (let i = 0; i < kfcData.length; i++) {
     await Restaurant.create(kfcData[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
