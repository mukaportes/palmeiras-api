import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} from 'graphql';

const fields = {
    id: {
        type: GraphQLString,
        description: 'Id da posicao'
    },
    nome: {
        type: GraphQLString,
        description: 'Nome da posicao'
    },
};

const posicao = new GraphQLObjectType({
    name: 'Posicao',
    description: 'Posicao schema',
    fields: () => (fields)
});

export default posicao;