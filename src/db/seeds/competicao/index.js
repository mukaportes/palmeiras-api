import mongoose from 'mongoose';
import Competicao from '../../../models/competicao';

async function competicaoSeeder() {
    const createCompeticaoPromises = [];
    await Competicao.remove({});

    const competicao = [
        {
            nome: 'Campeonato Paulista'
        },
        {
            nome: 'Copa do Brasil'
        },
        {
            nome: 'Campeonato Brasileiro Série A'
        },
        {
            nome: 'Campeonato Brasileiro Série B'
        },
        {
            nome: 'Copa Sul-Americana'
        },
        {
            nome: 'Copa Libertadores'
        },
        {
            nome: 'Recopa Sul-Americana'
        },
        {
            nome: 'Amistosos'
        },
    ];

    competicao.forEach(competicoes => {
        createCompeticaoPromises.push(Competicao.create(competicoes));
    });

    return Promise.all(createCompeticaoPromises);
}

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('Done, mongoose connection disconnected.');
    });
};

async function initSeed() {

    await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api');

    console.log('***** seeding session instances...');
    await competicaoSeeder();

    closeConnection();
}

initSeed();