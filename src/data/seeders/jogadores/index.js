import mongoose from 'mongoose';
import Jogadores from '../../../models/jogadores';

async function jogadoresSeeder() {
    const createJogadoresPromises = [];
    await Jogadores.remove({});

    const jogadores = [
        {
            nomeJogador: 'Fernando Prass',
            nome: 'Fernando Büttenbender Prass',
            posicao: 1,
            clubeAtual: 1,
            naturalidade: 'Porto Alegre/RS',
            dataNascimento: '1978-07-09',
            altura: 1.91,
            numero: 1,
            jogos: 258,
            gols: 0,
            clubes: [
                {
                    clube: 'Gremio',
                    local: 'RS',
                    inicio: 1998,
                    termino: 1999
                },
                {
                    clube: 'Francana',
                    local: 'SP',
                    inicio: 2000,
                    termino: 2000
                },
                {
                    clube: 'Vila Nova',
                    local: 'GO',
                    inicio: 2001,
                    termino: 2001
                },
                {
                    clube: 'Gremio',
                    local: 'RS',
                    inicio: 2001,
                    termino: 2001
                },
                {
                    clube: 'Coritiba',
                    local: 'PR',
                    inicio: 2002,
                    termino: 2005
                },
                {
                    clube: 'União de Leiria',
                    local: 'Portugal',
                    inicio: 2005,
                    termino: 2008
                },
                {
                    clube: 'Vasco da Gama',
                    local: 'RJ',
                    inicio: 2009,
                    termino: 2012
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Gaucho',
                    ano: 1999
                },
                {
                    competicao: 'Copa Sul',
                    ano: 1999
                },
                {
                    competicao: 'Campeonato Goiano',
                    ano: 2001
                },
                {
                    competicao: 'Campeonato Paranaense',
                    ano: 2004
                },
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2009
                },
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2013
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2011
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2015
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016
                },
            ]
        }

    ];

    jogadores.forEach(jogador => {
        createJogadoresPromises.push(Jogadores.create(jogador));
    });

    return Promise.all(createJogadoresPromises);
}

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('Done, mongoose connection disconnected.');
    });
};

async function initSeed() {

    await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api');

    console.log('***** seeding session instances...');
    await jogadoresSeeder();

    closeConnection();
}

initSeed();