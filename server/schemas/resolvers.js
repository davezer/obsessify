const { AuthenticationError } = require('apollo-server-express');
const { User, Collection, Item, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('collections')
                
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },

        collections: async (parent, { email }) => {
            const params = email ? { email } : {};
            return Collection.find(params).sort({ createdAt: -1 });
        },
        collection: async (parent, { _id }) => {
            return Collection.findOne({ _id });
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('collections')
        },
        user: async (parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('collections')
        } 
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addCollection: async (parent, args, context) => {
            if (context.user) {
                const collection = await Collection.create({ ...args, email: context.user.email });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { collections: collection._id } },
                    { new: true }
                );

                return collection;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addItem: async (parent, { collectionId, itemName, description }, context) => {
            if (context.user) {
                const item = await Item.create({ itemName, description });
                console.log(item);
                
                await Collection.findByIdAndUpdate(
                    { _id: collectionId },
                    { $push: { items: item._id } },
                    { new: true, runValidators: true }
                );
                
                return item;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { itemId, commentText }, context) => {
            if (context.user) {
                const userEmail = context.user.email;
                console.log(userEmail);
                const updatedItem = await Item.findOneAndUpdate(
                    { _id: itemId },
                    { $push: { comments: { commentText, email: userEmail } } },
                    { new: true }
                );
                return updatedItem;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Mutation to remove a collection from a User
        removeCollection: async (parent, {  collectionId }, context) => {
            // return Collection.findOneAndDelete({ _id: collectionId });
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { collections: collectionId } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Mutation to remove an item from a Collection
        removeItem: async (parent, { collectionId, itemId }) => {
            return Collection.findOneAndUpdate(
                { _id: collectionId },
                { $pull: { items: itemId } },
                { new: true }
            )
        },
        // Mutation to remove a comment from an Item
        removeComment: async (parent, { itemId, commentId }) => {
            return Item.findOneAndUpdate(
                { _id: itemId },
                { $pull: { comments: { _id: commentId } } },
                { new: true }
            )
        }
    }
};

module.exports = resolvers;