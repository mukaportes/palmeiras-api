import JogadorModel from '../../models/jogador'

class JogadorRepository {
    async getAll() {
        let result = JogadorModel.find({})
        return result
    }
}

export default JogadorRepository;