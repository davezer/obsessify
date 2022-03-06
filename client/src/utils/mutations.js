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

export const SAVE_ITEM = gql`
  mutation saveItem($item: itemInput!){
    saveItem(item: $item){
      _id
      username
      email
      collection {
        itemName
        description
        username
        comments
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: String!) {
    removeItem(itemId: $itemId) {
      _id
      username
      email
      item {
        itemName
        description
        username
        comments
      }
      commentCount
    }
  }
`;