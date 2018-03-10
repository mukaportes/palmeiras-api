const mongoose = require('mongoose')
// import AutoIncrement from 'mongoose/mongoose-sequence'
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const clubesSchema = new Schema({
    nomePopular: { type: String },
	nome: { type: String },
	cidade: { type: String },
    estado: { type: String },
    fundacao: { type: Number },
    estadio: [
        {
            nome: String,
            capacidade: Number,
            cidade: String,
            estado: String
        }
    ],
})

clubesSchema.plugin(AutoIncrement, {inc_field: 'id'})

export const Clubes = mongoose.model('Clubes', clubesSchema)
export default Clubes