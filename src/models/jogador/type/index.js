import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList
} from 'graphql';

import tituloType from '../../titulo/type'
import clubeJogadorType from '../../clube-jogador/type'

const fields = {
    id: {
        type: GraphQLInt,
        description: 'Id do jogador'
    },
    nomeJogador: {
        type: GraphQLString,
        description: 'Nome usado pelo jogador'
    },
    nome: {
        type: GraphQLString,
        description: 'Nome de nascença do jogador'
    },
    posicao: {
        type: GraphQLString,
        description: 'Posiçao do jogador'
    },
    clubeAtualId: {
        type: GraphQLInt,
        description: 'Id do clube atual do jogador'
    },
    cidade: {
        type: GraphQLString,
        description: 'Cidade onde o jogador nasceu'
    },
    estado: {
        type: GraphQLString,
        description: 'Estado onde o jogador nasceu'
    },
    dataNascimento: {
        type: GraphQLString,
        description: 'Data de nascimento do jogador'
    },
    altura: {
        type: GraphQLFloat,
        description: 'Altura do jogador'
    },
    numero: {
        type: GraphQLInt,
        description: 'Numero usado pelo jogador no seu clube atual'
    },
    jogos: {
        type: GraphQLInt,
        description: 'Jogos pelo clube atual do jogador'
    },
    gols: {
        type: GraphQLInt,
        description: 'Gols pelo clube atual do jogador'
    },
    clubes: {
        type: new GraphQLList(clubeJogadorType),
        description: 'Lista de clubes pelos quais o jogador jogou'
    },
    titulos: {
        type: new GraphQLList(tituloType),
        description: 'Lista de titulos conquistados pelo jogador'
    },
};

const jogador = new GraphQLObjectType({
    name: 'Jogador',
    description: 'Jogador schema',
    fields: () => (fields)
});

export default jogador;