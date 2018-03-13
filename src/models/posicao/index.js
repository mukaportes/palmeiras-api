const mongoose = require('mongoose')
// import AutoIncrement from 'mongoose/mongoose-sequence'
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const posicaoSchema = new Schema({
	nome: { type: String },
})

posicaoSchema.plugin(AutoIncrement, {inc_field: 'id'})

export const Posicao = mongoose.model('Posicao', posicaoSchema)
export default Posicao