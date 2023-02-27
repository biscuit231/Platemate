const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    price: Float
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
    img: String
    items: [Item]
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type Address {
    _id: ID
    location: String
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
    users: [User]
    restaurants: [Restaurant]
    addresses: [Address]
    restaurant: [Item]
    item(_id: ID!): Item
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
