import { gql } from 'apollo-server-express'
import db from '../database.mjs'

const typeDefs = gql`
    extend type Query {
        cats: [Cat]
        cat(id: ID!): Cat
    }
    type Cat {
        id: ID!
        name: String
        colour_id: Int
        colour: Colour
        favourite_food_id: Int
        favourite_food: FavouriteFood
        owner_id: Int
        owner: Owner
        on_holiday_at_owner_id: Int
        on_holiday_at_owner: Owner
    }
    
`

const resolvers = {
    Query: {
        cats: async () => db.cats.findAll(),
        cat: async (obj, args, context, info) => db.cats.findByPk(args.id)
    },
    Cat: {
        owner: async (obj) => db.owners.findByPk(obj.owner_id),
        favourite_food: async (obj) => db.favouriteFoods.findByPk(obj.favourite_food_id),
        on_holiday_at_owner: async (obj) => db.owners.findByPk(obj.on_holiday_at_owner_id),
        colour: async (obj) => db.colours.findByPk(obj.colour_id)
    }
}

export default {typeDefs, resolvers}
