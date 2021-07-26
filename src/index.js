import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start()

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://nest:02101998@cluster0.kuwl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

    app.listen({ port: 4000 }, () => 
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer()