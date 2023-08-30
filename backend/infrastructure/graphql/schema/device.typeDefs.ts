import { gql } from "apollo-server-express";

export const deviceTypeDefs = gql`
  type Device {
    _id: ID!
    name: String!
    mobileNumber: String!
    lastConnection: String!
    latitude: Float!
    longitude: Float!
  }

  type Query {
    getDevices: [Device]
  }
`;
