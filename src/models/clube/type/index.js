import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} from 'graphql';

import estadioType from '../../estadio/type'

const fields = {
    nomePopular: {
        type: GraphQLString,
        description: 'Nome popular do clube'
    },
    nome: {
        type: GraphQLString,
        description: 'Nome completo do clube'
    },
    cidade: {
        type: GraphQLString,
        description: 'Cidade do clube'
    },
    estado: {
        type: GraphQLString,
        description: 'Estado do clube'
    },
    fundacao: {
        type: GraphQLInt,
        description: 'Ano no qual o clube foi fundado'
    },
    estadio: {
        type: new GraphQLList,
        description: 'Coverage business model Id'
    },
};

const clube = new GraphQLObjectType({
    name: 'Clube',
    description: 'Clube schema',
    fields: () => (fields)
});

export default clube;