import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      email
      collection {
        _id
        collectionName
        category
        email
        items {
          _id
          itemName
          email
          commentCount
        }
      }
    }
  }
`;

