import mongoose from 'mongoose';
import Posicao from '../../../models/posicao';

async function posicaoSeeder() {
    const createPosicaoPromises = [];
    await Posicao.remove({});

    const posicao = [
        {
            nome: 'Goleiro'
        },
        {
            nome: 'Lateral Direito'
        },
        {
            nome: 'Zagueiro'
        },
        {
            nome: 'Lateral Esquerdo'
        },
        {
            nome: 'Volante'
        },
        {
            nome: 'Meia'
        },
        {
            nome: 'Atacante'
        },
    ];

    posicao.forEach(posicoes => {
        createPosicaoPromises.push(Posicao.create(posicoes));
    });

    return Promise.all(createPosicaoPromises);
}

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('Done, mongoose connection disconnected.');
    });
};

async function initSeed() {

    await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api');

    console.log('***** seeding session instances...');
    await posicaoSeeder();

    closeConnection();
}

initSeed();