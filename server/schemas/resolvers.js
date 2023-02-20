const { Item, User, Restaurant } = require('../models');

const resolvers = {
  Query: {
    items: async () => {
      return await Item.find({});
    },
    // restaurants: async () => {
    //   return await Restaurant.find({}).populate('items');
    // },
    // restaurant: async (parent, args) => {
    //   return await Restaurant.findById(args.id);
    // },
  },
  // Mutation: {
  //   addUser: async (parent, { firstname, lastname, email, phone, password }) => {
  //     return await User.create({ firstname, lastname, email, phone, password });
  //   },
  //   updateUser: async (parent, { id, firstname, lastname, phone, password }) => {
  //     return await User.findOneAndUpdate(
  //       { _id: id }, 
  //       { firstname },
  //       { lastname },
  //       { phone },
  //       { password },
  //       { new: true }
  //     );
  //   }
  // }
};

module.exports = resolvers;
