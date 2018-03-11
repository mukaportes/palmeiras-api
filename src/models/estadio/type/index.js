import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} from 'graphql';

const fields = {
    nome: {
        type: GraphQLString,
        description: 'Nome do estadio'
    },
    cidade: {
        type: GraphQLString,
        description: 'Cidade onde fica o estadio'
    },
    estado: {
        type: GraphQLString,
        description: 'Estado onde fica o estádio'
    },
    capacidade: {
        type: GraphQLInt,
        description: 'Capacidade do estádio'
    },
};

const estadio = new GraphQLObjectType({
    name: 'Estadio',
    description: 'Estadio schema',
    fields: () => (fields)
});

export default estadio;