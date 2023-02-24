const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    price: Int
    available: Boolean
    type: String
    img: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    password: String
  }

  type Restaurant {
    _id: ID
    title: String
    location: String
    items: [Item]
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    items: [Item]
    restaurants: Restaurant
    restaurant: [Item]
    item(_id: ID!): Item
    user: User
    order(_id: ID!): Order
    checkout(items: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
