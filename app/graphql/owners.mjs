import { gql } from 'apollo-server-express'
import db from '../database.mjs'

const typeDefs = gql`
    extend type Query {
        owners: [Owner]
        owner(id: ID!): Owner
    }
    type Owner {
        id: ID!
        name: String
        email: String
    }
    
`

const resolvers = {
    Query: {
        owners: async () => db.owners.findAll(),
        owner: async (obj, args, context, info) => db.owners.findByPk(args.id)
    },
}

export default {typeDefs, resolvers}
