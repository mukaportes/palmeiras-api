import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import JogadorType from '../../models/jogador/type'
import JogadorInput from '../../models/jogador/type/jogador-type-input'
import repository from '../../repositories/jogador'

const instanceRepository = new repository();

const resolverCreateJogador = async (_, { input }, context) => {
    let newJogador = instanceRepository(input)
    try {
        let result = await newJogador.save()
    } catch (error) {
        throw new Error(error)
    }
}

const createJogador = {
    type: new GraphQLObjectType({
        name: 'CreateJogador',
        fields: {
            jogador: { type: JogadorType, description: 'Jogador return created' },
        }
    }),
    description: 'Create Jogador',
    args: {
        input: { type: JogadorInput }
    },
    resolve: resolverCreateJogador
}

export { createJogador }