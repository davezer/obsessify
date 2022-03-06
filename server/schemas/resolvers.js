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
                const item = await Item.create({ collectionId, itemName, description });
                
                console.log(item.itemName);
                const updatedCollection = await Collection.findByIdAndUpdate(
                    { _id: collectionId },
                    { $push: { items: item._id } },
                    { new: true, runValidators: true }
                );
                console.log(updatedCollection);
                return updatedCollection;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { itemId, commentText }, context) => {
            if (context.user) {
                const userEmail = context.user.email;
                console.log(userEmail);
                const updatedItem = await Item.findOneAndUpdate(
                    { _id: itemId },
                    { $push: { comments: { commentText, userEmail } } },
                    { new: true }
                );
                return updatedItem;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeCollection: async (parent, { collectionId }) => {
            return Collection.findOneAndDelete({ _id: collectionId });
        },
        removeItem: async (parent, { collectionId, itemId }) => {
            return Collection.findOneAndUpdate(
                { _id: collectionId },
                { $pull: { items: { _id: itemId} } },
                { new: true }
            )
        },
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