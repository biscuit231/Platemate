const { Item } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    items: async () => {
      // Get and return all documents from the classes collection
      return await Item.find({});
    }
  }
};

module.exports = resolvers;
