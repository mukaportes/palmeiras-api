const mongoose = require('mongoose')
// import AutoIncrement from 'mongoose/mongoose-sequence'
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const jogadorSchema = new Schema({
    nomeJogador: { type: String },
	nome: { type: String },
	posicao: { type: String },
    clubeAtual: { type: Number },
    cidade: { type: String },
    estado: { type: String },
    dataNascimento: { type: String },
    altura: { type: Number },
    numero: { type: Number },
    jogos: { type: Number },
    gols: { type: Number },
    clubes: [
        {
            clube: String,
            local: String,
            inicio: Number,
            termino: Number
        }
    ],
    titulos: [
        {
            competicao: String,
            ano: Number,
        }
    ],
})

jogadorSchema.plugin(AutoIncrement, {inc_field: 'id'})

export const Jogador = mongoose.model('jogadores', jogadorSchema)
export default Jogador