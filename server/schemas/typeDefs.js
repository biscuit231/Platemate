const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Item model
  type Item {
    _id: ID
    name: String
    description: String
    price: Int
    available: Boolean
    type: String
    img: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    items: [Item]
  }
`;

module.exports = typeDefs;
