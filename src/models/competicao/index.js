const mongoose = require('mongoose')
// import AutoIncrement from 'mongoose/mongoose-sequence'
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const competicaoSchema = new Schema({
	nome: { type: String },
})

competicaoSchema.plugin(AutoIncrement, {inc_field: 'id'})

export const Competicao = mongoose.model('Competicao', competicaoSchema)
export default Competicao