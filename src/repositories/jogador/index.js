import JogadorModel from '../../models/jogador'

class JogadorRepository {
    async getAll() {
        let result = await JogadorModel.find({})
        return result
    }

    async getById(id) {
        try {
            let result = await JogadorModel.find({ id: id })
            // console.warn('jogador by id', result)
            return result
        } catch (error) {
            return error
        }
    }
    
    async getByNome(nome) {
        try {
            let result = await JogadorModel.find({ 
                nomeJogador: { $regex : new RegExp(nome, "i") } 
            })
            // console.warn('jogador by nome', result)
            return result
        } catch (error) {
            return error
        }
    }

    async getByPosicao(posicao) {
        try {
            let result = await JogadorModel.find({ 
                posicao: posicao 
            })
            // console.warn('jogador by posicao', result)
            return result
        } catch (error) {
            return error
        }
    }
}

export default JogadorRepository;