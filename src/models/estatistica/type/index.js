import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList
} from 'graphql';

const fields = {
    jogadorId: {
        type: GraphQLInt,
        description: 'Id do jogador'
    },
    clubeId: {
        type: GraphQLInt,
        description: 'Clube do jogador no ano'
    },
    competicaoId: {
        type: GraphQLInt,
        description: 'Competição disputada'
    },
    ano: {
        type: GraphQLInt,
        description: 'Ano da estatística'
    },
    jogos: {
        type: GraphQLInt,
        description: 'Numero de jogos'
    },
    gols: {
        type: GraphQLInt,
        description: 'Numero de gols'
    },
    assistencias: {
        type: GraphQLInt,
        description: 'Numero de assistencias'
    },
};

const estatistica = new GraphQLObjectType({
    name: 'Estatistica',
    description: 'Estatistica schema',
    fields: () => (fields)
});

export default estatistica;