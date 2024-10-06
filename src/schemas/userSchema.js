import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  # Queries
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  # Mutations
  type Mutation {
    createUser(name: String!, email: String!, age: Int): User
    updateUser(id: ID!, name: String, email: String, age: Int): User
    deleteUser(id: ID!): User
  }
`;

export default typeDefs;
