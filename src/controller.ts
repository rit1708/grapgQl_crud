import User, { IUser } from "./model/user";

const Controller = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email }: { name: string; email: string }) => {
      const newUser = new User({ name, email });
      return await newUser.save();
    },
    updateUser: async (_: any, { id, name, email }: { id: string; name?: string; email?: string }) => {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true } 
      );
      if (!updatedUser) throw new Error("User not found");
      return updatedUser;
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw new Error("User not found");
      return deletedUser;
    },
  },
};

export default Controller;
