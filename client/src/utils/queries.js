import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      email
      collectionCount
      collections {
        _id
        collectionName
        category
        itemCount
        items {
          _id
          itemName
          commentCount
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query {
    users {
      _id
      email
      collections {
        _id
        collectionName
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      collections {
        _id
        collectionName
      }
    }
  }
`;

export const QUERY_COLLECTIONS = gql`
  query collections($email: String!) {
    collections(email: $email) {
      _id
      collectionName
      category
      
    }
  }
`;

export const QUERY_COLLECTION = gql`
  query collection($collectionId: ID!) {
    collection(collectionId: $collectionId) {
      _id
      collectionName
      category
     
    }
  }
`;

export const QUERY_ITEMS = gql`
  query items($collectionId: ID!) {
    items(collectionId: $collectionId) {
      _id
      itemName
      description
      commentCount
      comments {
        _id
        commentText
      }
    }
  }
`;

export const QUERY_ITEM = gql`
  query item($itemId: ID!) {
    item(itemId: $itemId) {
      _id
      itemName
      description
      commentCount
      comments {
        _id
        commentText
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments($itemId: ID!) {
    comments(itemId: $itemId) {
      _id
      commentText
    }
  }
`;

export const QUERY_COMMENT = gql`
  query comment($commentId: ID!) {
    comment(commentId: $commentId) {
      _id
      commentText
    }
  }
`
