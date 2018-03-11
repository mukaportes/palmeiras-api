import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import queries from '../queries'
import mutations from '../mutations'

let rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Palmeiras API GraphQL Schema',
    fields: () => (queries)
})

let rootMutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Palmeiras API Mutation GraphQL Schema',
    fields: () => (mutations)
})

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})

export default schema