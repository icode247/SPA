import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { TransactionResolver } from './resolvers/resolvers'

async function main() {
    const schema = await buildSchema({
        resolvers: [TransactionResolver],
        emitSchemaFile: true,
        validate: false,
    })

    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    });

    const app = Express();

    await server.start();

    server.applyMiddleware({ app });

    app.listen({ port: 3330 }, () =>
        console.log(
            `Server ready and listening at ==> http://localhost:3330${server.graphqlPath}`
        )
    );
};

main().catch((error) => {
    console.log(error, 'error');
});