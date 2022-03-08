import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_COLLECTION = gql`
  mutation addCollection($collectionName: String!, $category: String!) {
    addCollection(collectionName: $collection, category: $category) {
      _id
      collectionName
      category
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($collectionId: ID!, $itemName: String!, $description: String!) {
    addItem(collectionId: $collectionId, itemName: $itemName, description: $description) {
      _id
      itemName
      description
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($itemId: ID!, $commentText: String!) {
    addComment(itemId: $itemId, commentText: $commentText) {
      _id
      itemName
      comments {
        _id
        commentText
      }
    }
  }
`;

export const REMOVE_COLLECTION = gql`
  mutation removeCollection($collectionId: ID!) {
    removeCollection(collectionId: $collectionId) {
      _id
      email
      collectionCount
      collections {
        _id
        collectionName
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
    removeItem(itemId: $itemId) {
      _id
      itemName
      description
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
      itemName
      comments {
        _id
        commentText
      }
    }
  }
`;