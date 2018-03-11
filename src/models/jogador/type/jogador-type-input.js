import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLID
} from 'graphql';

import clubeJogadorInputType from '../../clube-jogador/type/clube-jogador-input-type'
import tituloInputType from '../../titulo/type/titulo-input-type'

const fields = {
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
        type: new GraphQLList(clubeJogadorInputType),
        description: 'Lista de clubes pelos quais o jogador jogou'
    },
    titulos: {
        type: new GraphQLList(tituloInputType),
        description: 'Lista de titulos conquistados pelo jogador'
    },
}

const inputJogador = new GraphQLInputObjectType({
    name: 'InputJogador',
    description: 'Jogador Type input schema',
    fields: () => (fields)
})

export default inputJogador