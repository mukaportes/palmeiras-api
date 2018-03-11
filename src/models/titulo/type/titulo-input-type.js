import {
    GraphQLInputObjectType,
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

const inputTitulo = new GraphQLInputObjectType({
    name: 'InputTitulo',
    description: 'Titulo Type input schema',
    fields: () => (fields)
})

export default inputTitulo