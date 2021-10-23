import "reflect-metadata";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PORT } from './secrets'

const main = async () => {
    const port = PORT || 4000;

    const app = express();

    

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
            ApolloServerPluginLandingPageDisabled()
        ]
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app, 
        path: '/api',
    });

    app.listen(port, () => {
        console.log(`Server started on localhost:${port}${apolloServer.graphqlPath}`);
    });
}


main().catch((err) => {
    console.error(err)
})