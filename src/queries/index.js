import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql'

import * as queriesJogador from './jogador'

const queries = {
    ...queriesJogador,
};

export default queries