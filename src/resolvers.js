import { User } from "./models/Cat";
import mongoose from "mongoose";

export const resolvers = {
    Mutation: {
        createUser: async (_, { name }) => {
            const user = new User({ name });
            await user.save()
            return user;
        },
    },
    Query: {
        users: () => User.find()
    },
};

