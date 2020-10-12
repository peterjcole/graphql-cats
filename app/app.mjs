import express from 'express'
import { ApolloServer } from "apollo-server-express";

import cats from './graphql/cats.mjs'
import owners from './graphql/owners.mjs'
import colours from './graphql/colours.mjs'
import favouriteFoods from './graphql/favourite_food.mjs'

const app = express()

app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000`),
)

const server = new ApolloServer({
    modules: [cats, owners, colours, favouriteFoods]
})

server.applyMiddleware({ app })
