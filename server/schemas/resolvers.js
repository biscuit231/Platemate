const { AuthenticationError } = require('apollo-server-express');
const { Item, User, Restaurant, Order, Address } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('pk_live_51MdW8iGLek4VvT99EoLXIQFqrbR6sKGlzRBmq4hmSZS8VhhpWEyJKtbq5rBnFYhB0O7s6Bpma6QVSpfRNOZ9Ospm00iVcyIvne');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    items: async () => {
      return await Item.find({});
    },
    users: async () => {
      return await User.find({});
    },
    restaurants: async () => {
      return await Restaurant.find({});
    },
    addresses: async () => {
      return await Address.find({});
    },
    restaurant: async (parent, args) => {
      return await Restaurant.findById(args.id).populate('items');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ items: args.items });
      const line_items = [];

      const { items } = await order.populate('items');

      for (let i = 0; i < items.length; i++) {
        const item = await stripe.items.create({
          name: items[i].name,
          description: items[i].description,
          images: [`${url}/images/${items[i].image}`]
        });

        const price = await stripe.prices.create({
          item: item.id,
          unit_amount: items[i].price * 100,
          currency: 'AUD',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, {firstName, lastName, password, email, phoneNumber}) => {
      const user = await User.create({firstName, lastName, password, email, phoneNumber});
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
