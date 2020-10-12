import { gql } from 'apollo-server-express'
import db from '../database.mjs'

const typeDefs = gql`
    extend type Query {
        favouriteFoods: [FavouriteFood]
        favouriteFood(id: ID!): FavouriteFood
    }
    type FavouriteFood {
        id: ID!
        slug: String
        name: String
    }
`

const resolvers = {
    Query: {
        favouriteFoods: async () => db.favouriteFoods.findAll(),
        favouriteFood: async (obj, args, context, info) => db.favouriteFoods.findByPk(args.id)
    }
}

export default {typeDefs, resolvers}
