import mongoose from 'mongoose';
import Clube from '../../../models/clube';

async function clubeSeeder() {
    const createClubePromises = [];
    await Clube.remove({});

    const clube = [
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

    clube.forEach(clubes => {
        createClubePromises.push(Clube.create(clubes));
    });

    return Promise.all(createClubePromises);
}

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('Done, mongoose connection disconnected.');
    });
};

async function initSeed() {

    await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api');

    console.log('***** seeding session instances...');
    await clubeSeeder();

    closeConnection();
}

initSeed();