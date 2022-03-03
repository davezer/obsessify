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
        collections: [Collections]
    }

    type Collection {
        _id: ID
        collectionName: String
        category: String
        username: String
        itemCount: Int
        items: [Item]
    }

    type Item {
        _id: ID
        itemName: String
        description: String
        username: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        collections(username: String): [Collection]
        collection(_id: ID!): Collection
        items(collectionName: String): [Item]
        item(_id: ID!): Item
        comments(itemName: String): [Comment]
        comment(_id: ID!): Comment
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        addCollection(collectionName: String!): User
        addItem(collectionId: ID!, itemName: String!): Collection
        addComment(itemId: ID!): Item
        removeCollection(collectionId: ID!): Collection
        removeItem(collectionId: ID!, itemId: ID!): Collection
        removeComment(itemId: ID!, commentId: ID!): Item
    }
`;

module.exports = typeDefs;