import User from '../models/User.js';

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    }
  },
  Mutation: {
    createUser: async (_, { name, email, age }) => {
      const user = new User({ name, email, age });
      return await user.save();
    },
    updateUser: async (_, { id, name, email, age }) => {
      return await User.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
      );
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    }
  }
};

export default resolvers;
