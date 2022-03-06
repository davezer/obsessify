const { gql } = require('apollo-server-express');

// need to do some work on the mutations, not sure they are right
const typeDefs = gql`

    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        email: String
        collectionCount: Int
        collections: [Collection]
    }

    type Collection {
        _id: ID
        collectionName: String
        category: String
        email: String
        itemCount: Int
        items: [Item]
    }

    type Item {
        _id: ID
        itemName: String
        description: String
        email: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        email: String
    }

    type Query {
        me: User
        users: [User]
        user(email: String!): User
        collections(email: String): [Collection]
        collection(_id: ID!): Collection
        items: [Item]
        item(_id: ID!): Item
        comments: [Comment]
        comment(_id: ID!): Comment
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        addCollection(collectionName: String!, category: String!): Collection
        addItem(collectionId: ID!, itemName: String!, description: String!): Item
        addComment(itemId: ID!, commentText: String!): Item
        removeCollection(collectionId: ID!): Collection
        removeItem(collectionId: ID!, itemId: ID!): Collection
        removeComment(itemId: ID!, commentId: ID!): Item
    }
`;

module.exports = typeDefs;