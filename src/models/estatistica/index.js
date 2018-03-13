const mongoose = require('mongoose')

const Schema = mongoose.Schema

const estatisticaSchema = new Schema({
    jogadorId: { type: Number },
	clubeId: { type: Number },
    competicaoId: { type: Number },
    ano: { type: Number },
    jogos: { type: Number },
    gols: { type: Number },
    assistencias: { type: Number }
})

export const Estatistica = mongoose.model('Estatistica', estatisticaSchema)
export default Estatistica