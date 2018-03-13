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
        description: 'Id da competicao'
    },
    nome: {
        type: GraphQLString,
        description: 'Nome da competicao'
    },
};

const competicao = new GraphQLObjectType({
    name: 'Competicao',
    description: 'Competicao schema',
    fields: () => (fields)
});

export default competicao;