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

export { 
    getAllJogador,
}
