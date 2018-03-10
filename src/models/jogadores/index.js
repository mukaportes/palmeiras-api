const mongoose = require('mongoose')
// import AutoIncrement from 'mongoose/mongoose-sequence'
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const jogadoresSchema = new Schema({
    nomeJogador: { type: String },
	nome: { type: String },
	posicao: { type: String },
    clubeAtual: { type: Number },
    naturalidade: { type: String },
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

jogadoresSchema.plugin(AutoIncrement, {inc_field: 'id'})

export const Jogadores = mongoose.model('Jogadores', jogadoresSchema)
export default Jogadores