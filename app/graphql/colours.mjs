import { gql } from 'apollo-server-express'
import db from '../database.mjs'

const typeDefs = gql`
    extend type Query {
        colours: [Colour]
        colour(id: ID!): Colour
    }
    type Colour {
        id: ID!
        slug: String
        name: String
    }
    
`

const resolvers = {
    Query: {
        colours: async () => db.colours.findAll(),
        colour: async (obj, args, context, info) => db.colours.findByPk(args.id)
    }
}


export default {typeDefs, resolvers}