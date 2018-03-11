import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} from 'graphql';

const fields = {
    clube: {
        type: GraphQLString,
        description: 'Nome do clube'
    },
    local: {
        type: GraphQLString,
        description: 'Estado do clube ou país para clubes estrangeiros'
    },
    inicio: {
        type: GraphQLInt,
        description: 'Ano em que começou no clube'
    },
    termino: {
        type: GraphQLInt,
        description: 'Ano em que saiu do clube'
    },
};

const inputClubeJogador = new GraphQLInputObjectType({
    name: 'InputClubeJogador',
    description: 'Clube Jogador Type input schema',
    fields: () => (fields)
});

export default inputClubeJogador;