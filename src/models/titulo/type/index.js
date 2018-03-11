import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} from 'graphql'

const fields = {
    competicao: {
        type: GraphQLString,
        description: 'Competição relacionada ao título'
    },
    ano: {
        type: GraphQLInt,
        description: 'Ano de conquista do título'
    },
}

const titulo = new GraphQLObjectType({
    name: 'Titulo',
    description: 'Titulo schema',
    fields: () => (fields)
})

export default titulo