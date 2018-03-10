import mongoose from 'mongoose';
import Clubes from '../../../models/clubes';

async function clubesSeeder() {
    const createClubesPromises = [];
    await Clubes.remove({});

    const clubes = [
        {
            nomePopular: 'Palmeiras',
            nome: 'Sociedade Esportiva Palmeiras',
            cidade: 'São Paulo',
            estado: 'SP',
            fundacao: 1914,
            estadio: [
                {
                    nome: 'Allianz Parque',
                    cidade: 'São Paulo',
                    estado: 'SP',
                    capacidade: 43000
                }
            ]
        }

    ];

    clubes.forEach(clube => {
        createClubesPromises.push(Clubes.create(clube));
    });

    return Promise.all(createClubesPromises);
}

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('Done, mongoose connection disconnected.');
    });
};

async function initSeed() {

    await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api');

    console.log('***** seeding session instances...');
    await clubesSeeder();

    closeConnection();
}

initSeed();