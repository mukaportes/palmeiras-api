import { GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLNonNull, 
    GraphQLList, 
    GraphQLID } from 'graphql'

import jogadorType from '../../models/jogador/type'
import jogadorRepository from '../../repositories/jogador'

// instancia um novo repositorio
const instanceRepository = new jogadorRepository()

const getAllJogador = {
    type: new GraphQLList(jogadorType),
    description: 'GET All jogador',
    args: {},
    resolve: async (_, args, context) => {
        return await instanceRepository.getAll()
    }    
}

const getByIdJogador = {
    type: jogadorType,
    description: 'GET by id jogador',
    args: {
        id: {
            type: GraphQLInt,
            description: 'Id do jogador'
        }
    },
    resolve: async(_, args, context) => {
        let result = await instanceRepository.getById(args.id)
        return result[0]
    }
}

const getByNomeJogador = {
    type: new GraphQLList(jogadorType),
    description: 'GET by nome jogador',
    args: {
        nome: {
            type: GraphQLString,
            description: 'Nome de jogo do jogador'
        }
    },
    resolve: async(_, args, context) => {
        let result = await instanceRepository.getByNome(args.nome)
        return result
    }
}

const getByPosicaoJogador = {
    type: new GraphQLList(jogadorType),
    description: 'GET by posicao jogador',
    args: {
        posicao: {
            type: GraphQLInt,
            description: 'Posição do jogador'
        }
    },
    resolve: async(_, args, context) => {
        let result = await instanceRepository.getByPosicao(args.posicao)
        return result
    }
}

export { 
    getAllJogador, getByIdJogador, getByNomeJogador, getByPosicaoJogador
}
