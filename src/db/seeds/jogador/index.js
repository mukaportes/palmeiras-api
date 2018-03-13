import mongoose from 'mongoose'
import Jogador from '../../../models/jogador'

async function jogadorSeeder() {
    const createJogadorPromises = []
    await Jogador.remove({})

    const jogador = [
        {
            nomeJogador: 'Fernando Prass',
            nome: 'Fernando Büttenbender Prass',
            posicao: 1,
            clubeAtual: 1,
            cidade: 'Porto Alegre',
            estado: 'RS',
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
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2012,
                    termino: 0
                }
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
        },
        {
            nomeJogador: 'Jailson',
            nome: 'Jailson Marcelino dos Santos',
            posicao: 1,
            clubeAtual: 1,
            cidade: 'São José dos Campos',
            estado: 'SP',
            dataNascimento: '1981-07-20',
            altura: 1.86,
            numero: 42,
            jogos: 46,
            gols: 0,
            clubes: [
                {
                    clube: 'Joseense',
                    local: 'SP',
                    inicio: 2000,
                    termino: 2002
                },
                {
                    clube: 'Campinense',
                    local: 'PB',
                    inicio: 2003,
                    termino: 2005
                },
                {
                    clube: 'Ituano',
                    local: 'SP',
                    inicio: 2006,
                    termino: 2006
                },
                {
                    clube: 'Guaratinguetá',
                    local: 'SP',
                    inicio: 2007,
                    termino: 2009
                },
                {
                    clube: 'Juventude',
                    local: 'RS',
                    inicio: 2009,
                    termino: 2009
                },
                {
                    clube: 'Guaratinguetá',
                    local: 'SP',
                    inicio: 2010,
                    termino: 2012
                },
                {
                    clube: 'Oeste',
                    local: 'SP',
                    inicio: 2012,
                    termino: 2013
                },
                {
                    clube: 'Ceará',
                    local: 'CE',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2014,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Copa do Brasil',
                    ano: 2015
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016
                },
            ]
        },
        {
            nomeJogador: 'Weverton',
            nome: 'Weverton Pereira da Silva',
            posicao: 1,
            clubeAtual: 1,
            cidade: 'Rio Branco',
            estado: 'AC',
            dataNascimento: '1987-12-13',
            altura: 1.89,
            numero: 21,
            jogos: 1,
            gols: 0,
            clubes: [
                {
                    clube: 'Remo',
                    local: 'PA',
                    inicio: 2006,
                    termino: 2007
                },
                {
                    clube: 'Corinthians',
                    local: 'SP',
                    inicio: 2008,
                    termino: 2008
                },
                {
                    clube: 'América',
                    local: 'RN',
                    inicio: 2009,
                    termino: 2009
                },
                {
                    clube: 'Botafogo',
                    local: 'SP',
                    inicio: 2010,
                    termino: 2010
                },
                {
                    clube: 'Portuguesa',
                    local: 'SP',
                    inicio: 2010,
                    termino: 2012
                },
                {
                    clube: 'Atlético',
                    local: 'PR',
                    inicio: 2012,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Campeonato Paulista do Interior',
                    ano: 2010
                },
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2008
                },
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2011
                },
                {
                    competicao: 'Campeonato Paranaense',
                    ano: 2016
                },
                {
                    competicao: 'Jogos Olímpicos',
                    ano: 2016
                },
            ]
        },
        {
            nomeJogador: 'Daniel Fuzato',
            nome: 'Daniel Cerantula Fuzato',
            posicao: 1,
            clubeAtual: 1,
            cidade: "Santa Bárbara D'Oeste",
            estado: 'SP',
            dataNascimento: '1997-07-04',
            altura: 1.90,
            numero: 51,
            jogos: 0,
            gols: 0,
            clubes: [
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                }
            ],
            titulos: []
        },
        {
            nomeJogador: 'Antonio Carlos',
            nome: 'Antônio Carlos Cunha Capocasali Júnior',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            dataNascimento: '1993-03-07',
            altura: 1.91,
            numero: 25,
            jogos: 20,
            gols: 2,
            clubes: [
                {
                    clube: 'Corinthians',
                    local: 'SP',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Oeste',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Avaí',
                    local: 'SC',
                    inicio: 2014,
                    termino: 2015
                },
                {
                    clube: 'Flamengo',
                    local: 'RJ',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Ponte Preta',
                    local: 'SP',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                }
            ],
            titulos: []
        },
        {
            nomeJogador: 'Edu Dracena',
            nome: 'Eduardo Luís Abonízio de Souza',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'Dracena',
            estado: 'SP',
            dataNascimento: '1981-05-18',
            altura: 1.87,
            numero: 3,
            jogos: 75,
            gols: 0,
            clubes: [
                {
                    clube: 'Guarani',
                    local: 'SP',
                    inicio: 1999,
                    termino: 2002
                },
                {
                    clube: 'Olympiakos',
                    local: 'Grécia',
                    inicio: 2002,
                    termino: 2002
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2003,
                    termino: 2006
                },
                {
                    clube: 'Fenerbahçe',
                    local: 'Turquia',
                    inicio: 2006,
                    termino: 2009
                },
                {
                    clube: 'Botafogo',
                    local: 'SP',
                    inicio: 2010,
                    termino: 2010
                },
                {
                    clube: 'Santos',
                    local: 'SP',
                    inicio: 2009,
                    termino: 2015
                },
                {
                    clube: 'Corinthians',
                    local: 'SP',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Campeonato Grego',
                    ano: 2003
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2003
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2004
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2006
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2003
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2010
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2003
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2015
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016
                },
                {
                    competicao: 'Campeonato Turco',
                    ano: 2007
                },
                {
                    competicao: 'Supercopa da Turquia',
                    ano: 2008
                },
                {
                    competicao: 'Campeonato Paulista',
                    ano: 2010
                },
                {
                    competicao: 'Campeonato Paulista',
                    ano: 2011
                },
                {
                    competicao: 'Campeonato Paulista',
                    ano: 2012
                },
                {
                    competicao: 'Copa Libertadores',
                    ano: 2011
                },
                {
                    competicao: 'Recopa Sul-Americana',
                    ano: 2012
                },
            ]
        },
        {
            nomeJogador: 'Emerson Santos',
            nome: 'Emerson Raymundo Santos',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'Itaborai',
            estado: 'RJ',
            dataNascimento: '1995-04-05',
            altura: 1.84,
            numero: 34,
            jogos: 0,
            gols: 0,
            clubes: [
                {
                    clube: 'Botafogo',
                    local: 'RJ',
                    inicio: 2015,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                }
            ],
            titulos: []
        },
        {
            nomeJogador: 'Juninho',
            nome: 'José Carlos Ferreira Júnior',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'Londrina',
            estado: 'PR',
            dataNascimento: '1995-02-01',
            altura: 1.87,
            numero: 4,
            jogos: 25,
            gols: 0,
            clubes: [
                {
                    clube: 'Coritiba',
                    local: 'PR',
                    inicio: 2015,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Campeonato Paranense',
                    ano: 2017
                }
            ]
        },
        {
            nomeJogador: 'Luan',
            nome: 'Luan Garcia Teixeira',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'Vitória',
            estado: 'ES',
            dataNascimento: '1993-05-10',
            altura: 1.88,
            numero: 13,
            jogos: 23,
            gols: 1,
            clubes: [
                {
                    clube: 'Vasco da Gama',
                    local: 'RJ',
                    inicio: 2012,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Campeonato Carioca',
                    ano: 2015
                },
                {
                    competicao: 'Campeonato Carioca',
                    ano: 2016
                },
                {
                    competicao: 'Jogos Olímpicos',
                    ano: 2016
                }
            ]
        },
        {
            nomeJogador: 'Pedrao',
            nome: 'Pedro Henrique de Oliveira Correia',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'Sao Paulo',
            estado: 'SP',
            dataNascimento: '1997-05-03',
            altura: 1.94,
            numero: 44,
            jogos: 0,
            gols: 0,
            clubes: [
                {
                    clube: 'Água Santa',
                    local: 'SP',
                    inicio: 2016,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                }
            ],
            titulos: []
        },
        {
            nomeJogador: 'Thiago Martins',
            nome: 'Thiago Martins Bueno',
            posicao: 2,
            clubeAtual: 1,
            cidade: 'São João Evangelista',
            estado: 'MG',
            dataNascimento: '1995-03-17',
            altura: 1.85,
            numero: 31,
            jogos: 47,
            gols: 4,
            clubes: [
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Paysandu',
                    local: 'PA',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 2017
                },
                {
                    clube: 'Bahia',
                    local: 'BA',
                    inicio: 2017,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2013,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Diogo Barbosa',
            nome: 'Diogo Barbosa Mendanha',
            posicao: 4,
            clubeAtual: 1,
            cidade: 'Terra Nova do Norte',
            estado: 'MT',
            dataNascimento: '1992-08-17',
            altura: 1.79,
            numero: 6,
            jogos: 0,
            gols: 0,
            clubes: [
                {
                    clube: 'Vasco da Gama',
                    local: 'RJ',
                    inicio: 2010,
                    termino: 2011
                },
                {
                    clube: 'Sport',
                    local: 'PE',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Guarani',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Coritiba',
                    local: 'PR',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Atlético',
                    local: 'GO',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'Goiás',
                    local: 'GO',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Botafogo',
                    local: 'RJ',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2017,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Copa do Brasil',
                    ano: 2011,
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2017,
                },
            ]
        },
        {
            nomeJogador: 'Diogo Barbosa',
            nome: 'Diogo Barbosa Mendanha',
            posicao: 4,
            clubeAtual: 1,
            cidade: 'Terra Nova do Norte',
            estado: 'MT',
            dataNascimento: '1992-08-17',
            altura: 1.79,
            numero: 6,
            jogos: 0,
            gols: 0,
            clubes: [
                {
                    clube: 'Vasco da Gama',
                    local: 'RJ',
                    inicio: 2010,
                    termino: 2011
                },
                {
                    clube: 'Sport',
                    local: 'PE',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Guarani',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Coritiba',
                    local: 'PR',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Atlético',
                    local: 'GO',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'Goiás',
                    local: 'GO',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Botafogo',
                    local: 'RJ',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2017,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                }
            ],
            titulos: [
                {
                    competicao: 'Copa do Brasil',
                    ano: 2011,
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2017,
                },
            ]
        },
        {
            nomeJogador: 'Fabiano',
            nome: 'Fabiano Leismann',
            posicao: 3,
            clubeAtual: 1,
            cidade: 'São João do Oeste',
            estado: 'SC',
            dataNascimento: '1991-11-18',
            altura: 1.88,
            numero: 32,
            jogos: 31,
            gols: 2,
            clubes: [
                {
                    clube: 'Sao Luiz',
                    local: 'RS',
                    inicio: 2018,
                    termino: 2009
                },
                {
                    clube: 'Chapecoense',
                    local: 'SC',
                    inicio: 2009,
                    termino: 2014
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2015,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Catarinense',
                    ano: 2011,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Jean',
            nome: 'Jean Raphael Vanderlei Moreira',
            posicao: 3,
            clubeAtual: 1,
            cidade: 'Campo Grande',
            estado: 'MS',
            dataNascimento: '1986-06-24',
            altura: 1.70,
            numero: 2,
            jogos: 94,
            gols: 12,
            clubes: [
                {
                    clube: 'Sao Paulo',
                    local: 'SP',
                    inicio: 2005,
                    termino: 2011
                },
                {
                    clube: 'América',
                    local: 'SP',
                    inicio: 2006,
                    termino: 2006
                },
                {
                    clube: 'Penafiel',
                    local: 'Portugal',
                    inicio: 2008,
                    termino: 2008
                },
                {
                    clube: 'Fluminense',
                    local: 'RJ',
                    inicio: 2012,
                    termino: 2015
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Carioca',
                    ano: 2012,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2008,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2012,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016,
                },
                {
                    competicao: 'Superclássico das Américas',
                    ano: 2012,
                },
                {
                    competicao: 'Copa das COnfederações',
                    ano: 2013,
                },
            ]
        },
        {
            nomeJogador: 'Marcos Rocha',
            nome: 'Marcos Luís Rocha Aquino',
            posicao: 3,
            clubeAtual: 1,
            cidade: 'Sete Lagoas',
            estado: 'MG',
            dataNascimento: '1988-12-11',
            altura: 1.76,
            numero: 22,
            jogos: 10,
            gols: 0,
            clubes: [
                {
                    clube: 'Atlético',
                    local: 'MG',
                    inicio: 2008,
                    termino: 2008
                },
                {
                    clube: 'Uberlandia',
                    local: 'MG',
                    inicio: 2008,
                    termino: 2008
                },
                {
                    clube: 'CRB',
                    local: 'AL',
                    inicio: 2008,
                    termino: 2008
                },
                {
                    clube: 'Atlético',
                    local: 'MG',
                    inicio: 2009,
                    termino: 2009
                },
                {
                    clube: 'Ponte Preta',
                    local: 'SP',
                    inicio: 2010,
                    termino: 2010
                },
                {
                    clube: 'América',
                    local: 'MG',
                    inicio: 2010,
                    termino: 2012
                },
                {
                    clube: 'Atlético',
                    local: 'MG',
                    inicio: 2013,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa Libertadores',
                    ano: 2013,
                },
                {
                    competicao: 'Recopa Sul-Americana',
                    ano: 2014,
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2014,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2012,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2013,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2015,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2017,
                },
            ]
        },
        {
            nomeJogador: 'Mayke',
            nome: 'Mayke Rocha Oliveira',
            posicao: 3,
            clubeAtual: 1,
            cidade: 'Carangola',
            estado: 'MG',
            dataNascimento: '1992-11-10',
            altura: 1.78,
            numero: 12,
            jogos: 27,
            gols: 1,
            clubes: [
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2013,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2013,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2014,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2014,
                },
            ]
        },
        {
            nomeJogador: 'Victor Luis',
            nome: 'Victor Luis Chuab Zamblauskas',
            posicao: 4,
            clubeAtual: 1,
            cidade: 'São Paulo',
            estado: 'SP',
            dataNascimento: '1993-06-23',
            altura: 1.80,
            numero: 26,
            jogos: 52,
            gols: 2,
            clubes: [
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Ceará',
                    local: 'CE',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Botafogo',
                    local: 'RJ',
                    inicio: 2016,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2013,
                },
            ]
        },
        {
            nomeJogador: 'Alejandro Guerra',
            nome: 'Alejandro Abraham Guerra Morales',
            posicao: 6,
            clubeAtual: 1,
            cidade: 'Caracas',
            estado: 'Venezuela',
            dataNascimento: '1985-07-09',
            altura: 1.72,
            numero: 18,
            jogos: 45,
            gols: 7,
            clubes: [
                {
                    clube: 'Caracas',
                    local: 'Venezuela',
                    inicio: 2005,
                    termino: 2010
                },
                {
                    clube: 'Deportivo Anzoátegui',
                    local: 'Venezuela',
                    inicio: 2010,
                    termino: 2011
                },
                {
                    clube: 'Mineros de Guayana',
                    local: 'Venezuela',
                    inicio: 2011,
                    termino: 2014
                },
                {
                    clube: 'Atlético Nacional',
                    local: 'Colombia',
                    inicio: 2014,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Venezuelano',
                    ano: 2004,
                },
                {
                    competicao: 'Campeonato Venezuelano',
                    ano: 2006,
                },
                {
                    competicao: 'Campeonato Venezuelano',
                    ano: 2007,
                },
                {
                    competicao: 'Campeonato Venezuelano',
                    ano: 2009,
                },
                {
                    competicao: 'Campeonato Venezuelano',
                    ano: 2010,
                },
                {
                    competicao: 'Copa Venezuela',
                    ano: 2009,
                },
                {
                    competicao: 'Torneio Finalización do Campeonato Colombiano',
                    ano: 2015,
                },
                {
                    competicao: 'Superliga Colombiana',
                    ano: 2016,
                },
                {
                    competicao: 'Copa Libertadores',
                    ano: 2016,
                },
                {
                    competicao: 'Copa Colombia',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Bruno Henrique',
            nome: 'Bruno Henrique Corsini',
            posicao: 5,
            clubeAtual: 1,
            cidade: 'Apucarana',
            estado: 'PR',
            dataNascimento: '1989-10-21',
            altura: 1.80,
            numero: 19,
            jogos: 26,
            gols: 4,
            clubes: [
                {
                    clube: 'Iraty',
                    local: 'PR',
                    inicio: 2008,
                    termino: 2012
                },
                {
                    clube: 'Atlético',
                    local: 'MG',
                    inicio: 2010,
                    termino: 2011
                },
                {
                    clube: 'Londrina',
                    local: 'PR',
                    inicio: 2012,
                    termino: 2013
                },
                {
                    clube: 'Portuguesa',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Corinthians',
                    local: 'SP',
                    inicio: 2014,
                    termino: 2016
                },
                {
                    clube: 'Palermo',
                    local: 'Itália',
                    inicio: 2016,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2015,
                },
                {
                    competicao: 'Campeonato Paranaense do Interior',
                    ano: 2013,
                },
            ]
        },
        {
            nomeJogador: 'Felipe Melo',
            nome: 'Felipe Melo de Carvalho',
            posicao: 5,
            clubeAtual: 1,
            cidade: 'Volta Redonda',
            estado: 'RJ',
            dataNascimento: '1983-06-26',
            altura: 1.83,
            numero: 30,
            jogos: 41,
            gols: 2,
            clubes: [
                {
                    clube: 'Flamengo',
                    local: 'RJ',
                    inicio: 2001,
                    termino: 2003
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2003,
                    termino: 2003
                },
                {
                    clube: 'Mallorca',
                    local: 'Espanha',
                    inicio: 2005,
                    termino: 2005
                },
                {
                    clube: 'Racing Santander',
                    local: 'Espanha',
                    inicio: 2005,
                    termino: 2007
                },
                {
                    clube: 'Almería',
                    local: 'Espanha',
                    inicio: 2007,
                    termino: 2008
                },
                {
                    clube: 'Fiorentina',
                    local: 'Itália',
                    inicio: 2008,
                    termino: 2009
                },
                {
                    clube: 'juventus',
                    local: 'Itália',
                    inicio: 2009,
                    termino: 2010
                },
                {
                    clube: 'Galatasaray',
                    local: 'Turquia',
                    inicio: 2011,
                    termino: 2015
                },
                {
                    clube: 'Inter de Milão',
                    local: 'Itália',
                    inicio: 2015,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Carioca',
                    ano: 2001,
                },
                {
                    competicao: 'Copa dos Campeões',
                    ano: 2001,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2003,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2003,
                },
                {
                    competicao: 'Copa do Brasil',
                    ano: 2003,
                },
                {
                    competicao: 'Campeonato Turco',
                    ano: 2012,
                },
                {
                    competicao: 'Campeonato Turco',
                    ano: 2013,
                },
                {
                    competicao: 'Copa das Confederações',
                    ano: 2009,
                },
            ]
        },
        {
            nomeJogador: 'Gustavo Scarpa',
            nome: 'Gustavo Henrique Furtado Scarpa',
            posicao: 6,
            clubeAtual: 1,
            cidade: 'Campinas',
            estado: 'SP',
            dataNascimento: '1994-01-05',
            altura: 1.79,
            numero: 14,
            jogos: 8,
            gols: 2,
            clubes: [
                {
                    clube: 'Fluminense',
                    local: 'RJ',
                    inicio: 2014,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa da Primeira Liga',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Hyoran',
            nome: 'Hyoran Kauê Dalmoro',
            posicao: 6,
            clubeAtual: 1,
            cidade: 'Chapecó',
            estado: 'SC',
            dataNascimento: '1993-05-25',
            altura: 1.74,
            numero: 28,
            jogos: 7,
            gols: 1,
            clubes: [
                {
                    clube: 'Flamengo',
                    local: 'SP',
                    inicio: 2011,
                    termino: 2011
                },
                {
                    clube: 'Corinthians',
                    local: 'SP',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Chapecoense',
                    local: 'SC',
                    inicio: 2013,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Catarinense',
                    ano: 2016,
                },
                {
                    competicao: 'Copa Sul-Americana',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Lucas Lima',
            nome: 'Lucas Rafael Araújo Lima',
            posicao: 6,
            clubeAtual: 1,
            cidade: 'Marília',
            estado: 'SP',
            dataNascimento: '1990-07-09',
            altura: 1.75,
            numero: 20,
            jogos: 11,
            gols: 1,
            clubes: [
                {
                    clube: 'Inter de Limeira',
                    local: 'SP',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Internacional',
                    local: 'RS',
                    inicio: 2012,
                    termino: 2013
                },
                {
                    clube: 'Sport',
                    local: 'PE',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Santos',
                    local: 'SP',
                    inicio: 2014,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Gaúcho',
                    ano: 2013,
                },
                {
                    competicao: 'Campeonato Paulista',
                    ano: 2015,
                },
                {
                    competicao: 'Campeonato Paulista',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Michel Bastos',
            nome: 'Michel Fernandes Bastos',
            posicao: 6,
            clubeAtual: 1,
            cidade: 'Pelotas',
            estado: 'RS',
            dataNascimento: '1983-08-02',
            altura: 1.79,
            numero: 15,
            jogos: 44,
            gols: 2,
            clubes: [
                {
                    clube: 'Pelotas',
                    local: 'RS',
                    inicio: 2001,
                    termino: 2001
                },
                {
                    clube: 'Feyenoord',
                    local: 'Holanda',
                    inicio: 2001,
                    termino: 2002
                },
                {
                    clube: 'Excelsior',
                    local: 'Holanda',
                    inicio: 2002,
                    termino: 2003
                },
                {
                    clube: 'Atlético',
                    local: 'PR',
                    inicio: 2003,
                    termino: 2006
                },
                {
                    clube: 'Gremio',
                    local: 'RS',
                    inicio: 2004,
                    termino: 2004
                },
                {
                    clube: 'Figueirense',
                    local: 'SC',
                    inicio: 2005,
                    termino: 2005
                },
                {
                    clube: 'Lille',
                    local: 'França',
                    inicio: 2006,
                    termino: 2009
                },
                {
                    clube: 'Lyon',
                    local: 'França',
                    inicio: 2009,
                    termino: 2013
                },
                {
                    clube: 'Schalke 04',
                    local: 'Alemanha',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Al Ain',
                    local: 'Emirados Árabes',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Roma',
                    local: 'Itália',
                    inicio: 2003,
                    termino: 2006
                },
                {
                    clube: 'São Paulo',
                    local: 'SP',
                    inicio: 2014,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa da França',
                    ano: 2012,
                },
                {
                    competicao: 'Supercopa da França',
                    ano: 2012,
                },
            ]
        },
        {
            nomeJogador: 'Moisés',
            nome: 'Moisés Lima Magalhães',
            posicao: 6,
            clubeAtual: 1,
            cidade: 'Belo Horizonte',
            estado: 'MG',
            dataNascimento: '1988-03-17',
            altura: 1.84,
            numero: 10,
            jogos: 65,
            gols: 8,
            clubes: [
                {
                    clube: 'América',
                    local: 'MG',
                    inicio: 2007,
                    termino: 2010
                },
                {
                    clube: 'Sport',
                    local: 'PE',
                    inicio: 2010,
                    termino: 2010
                },
                {
                    clube: 'Boa Esporte',
                    local: 'MG',
                    inicio: 2011,
                    termino: 2011
                },
                {
                    clube: 'Portuguesa',
                    local: 'SP',
                    inicio: 2012,
                    termino: 2012
                },
                {
                    clube: 'HNK Rijeka',
                    local: 'Croácia',
                    inicio: 2014,
                    termino: 2015
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série C',
                    ano: 2009,
                },
                {
                    competicao: 'Campeonato Paulista Série A-2',
                    ano: 2012,
                },
                {
                    competicao: 'Copa da Croácia',
                    ano: 2014,
                },
                {
                    competicao: 'Supercopa da Croácia',
                    ano: 2014,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Tche Tche',
            nome: 'Danilo das Neves Pinheiro',
            posicao: 5,
            clubeAtual: 1,
            cidade: 'São Paulo',
            estado: 'SP',
            dataNascimento: '1992-08-30',
            altura: 1.75,
            numero: 8,
            jogos: 105,
            gols: 5,
            clubes: [
                {
                    clube: 'Audax',
                    local: 'SP',
                    inicio: 2011,
                    termino: 2014
                },
                {
                    clube: 'Guaratinguetá',
                    local: 'SP',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'Ponte Preta',
                    local: 'SP',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Boa Esporte',
                    local: 'MG',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Audax',
                    local: 'SP',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Thiago Santos',
            nome: 'Thiago dos Santos',
            posicao: 5,
            clubeAtual: 1,
            cidade: 'Curitiba',
            estado: 'PR',
            dataNascimento: '1989-09-05',
            altura: 1.81,
            numero: 5,
            jogos: 105,
            gols: 4,
            clubes: [
                {
                    clube: 'Prudentópolis',
                    local: 'PR',
                    inicio: 2008,
                    termino: 2011
                },
                {
                    clube: 'URT',
                    local: 'MG',
                    inicio: 2011,
                    termino: 2011
                },
                {
                    clube: 'Nacional',
                    local: 'MG',
                    inicio: 2011,
                    termino: 2013
                },
                {
                    clube: 'Araxá',
                    local: 'MG',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Betim',
                    local: 'MG',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Linense',
                    local: 'SP',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'América',
                    local: 'MG',
                    inicio: 2014,
                    termino: 2015
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2015,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa do Brasil',
                    ano: 2015,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Artur',
            nome: 'Artur Victor Guimarães',
            posicao: 7,
            clubeAtual: 1,
            cidade: 'Fortaleza',
            estado: 'CE',
            dataNascimento: '1998-02-15',
            altura: 1.63,
            numero: 37,
            jogos: 1,
            gols: 0,
            clubes: [
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Novorizontino',
                    local: 'SP',
                    inicio: 2017,
                    termino: 2017
                },
                {
                    clube: 'Londrina',
                    local: 'PR',
                    inicio: 2017,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2018,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa da Primeira Liga',
                    ano: 2017,
                },
            ]
        },
        {
            nomeJogador: 'Miguel Borja',
            nome: 'Miguel Ángel Borja Hernández',
            posicao: 7,
            clubeAtual: 1,
            cidade: 'Tierralata',
            estado: 'Colombia',
            dataNascimento: '1993-01-26',
            altura: 1.83,
            numero: 9,
            jogos: 53,
            gols: 17,
            clubes: [
                {
                    clube: 'Cúcuta Deportivo',
                    local: 'Colombia',
                    inicio: 2011,
                    termino: 2011
                },
                {
                    clube: 'Cortuluá',
                    local: 'Colombia',
                    inicio: 2012,
                    termino: 2013
                },
                {
                    clube: 'La Equidad',
                    local: 'Colombia',
                    inicio: 2013,
                    termino: 2014
                },
                {
                    clube: 'Olimpo',
                    local: 'Argentina',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'Livorno',
                    local: 'Itália',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Santa Fe',
                    local: 'Colombia',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Cortuluá',
                    local: 'Colombia',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Atletico Nacional',
                    local: 'Colombia',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa Sul-Americana',
                    ano: 2015,
                },
                {
                    competicao: 'Superliga da Colombia',
                    ano: 2015,
                },
                {
                    competicao: 'Copa Libertadores',
                    ano: 2016,
                },
                {
                    competicao: 'Copa Colombia',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Deyverson',
            nome: 'Deyverson Brum Silva',
            posicao: 7,
            clubeAtual: 1,
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            dataNascimento: '1991-05-08',
            altura: 1.88,
            numero: 16,
            jogos: 20,
            gols: 7,
            clubes: [
                {
                    clube: 'Mangaratibense',
                    local: 'RJ',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Benfica B',
                    local: 'Portugal',
                    inicio: 2012,
                    termino: 2013
                },
                {
                    clube: 'Belenenses',
                    local: 'Portugal',
                    inicio: 2013,
                    termino: 2015
                },
                {
                    clube: 'Colonia',
                    local: 'Alemanha',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Levante',
                    local: 'Espanha',
                    inicio: 2015,
                    termino: 2016
                },
                {
                    clube: 'Alavés',
                    local: 'Espanha',
                    inicio: 2016,
                    termino: 2017
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: []
        },
        {
            nomeJogador: 'Dudu',
            nome: 'Eduardo Pereira Rodrigues',
            posicao: 7,
            clubeAtual: 1,
            cidade: 'Goiania',
            estado: 'GO',
            dataNascimento: '1992-01-07',
            altura: 1.66,
            numero: 7,
            jogos: 174,
            gols: 43,
            clubes: [
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2009,
                    termino: 2010
                },
                {
                    clube: 'Coritiba',
                    local: 'PR',
                    inicio: 2010,
                    termino: 2010
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2011,
                    termino: 2011
                },
                {
                    clube: 'Dínamo de Kiev',
                    local: 'Rússia',
                    inicio: 2011,
                    termino: 2014
                },
                {
                    clube: 'Gremio',
                    local: 'RS',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2015,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Copa Sendai',
                    ano: 2009,
                },
                {
                    competicao: 'Campeonato Brasileiro Série B',
                    ano: 2010,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2011,
                },
                {
                    competicao: 'Mundial Sub-20',
                    ano: 2011,
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
        },
        {
            nomeJogador: 'Keno',
            nome: 'Marcos da Silva França',
            posicao: 7,
            clubeAtual: 1,
            cidade: 'Salvador',
            estado: 'BA',
            dataNascimento: '1989-09-10',
            altura: 1.78,
            numero: 11,
            jogos: 65,
            gols: 13,
            clubes: [
                {
                    clube: 'América',
                    local: 'SE',
                    inicio: 2009,
                    termino: 2011
                },
                {
                    clube: 'Botafogo',
                    local: 'BA',
                    inicio: 2012,
                    termino: 2012
                },
                {
                    clube: 'Águia de Marabá',
                    local: 'PA',
                    inicio: 2013,
                    termino: 2013
                },
                {
                    clube: 'Paraná',
                    local: 'PR',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'Santa Cruz',
                    local: 'CE',
                    inicio: 2014,
                    termino: 2014
                },
                {
                    clube: 'São José',
                    local: 'RS',
                    inicio: 2014,
                    termino: 2016
                },
                {
                    clube: 'Atlax',
                    local: 'México',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Ponte Preta',
                    local: 'SP',
                    inicio: 2015,
                    termino: 2015
                },
                {
                    clube: 'Santa Cruz',
                    local: 'CE',
                    inicio: 2016,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Pernambucano',
                    ano: 2016,
                },
                {
                    competicao: 'Copa do Nordeste',
                    ano: 2016,
                },
            ]
        },
        {
            nomeJogador: 'Willian',
            nome: 'Willian Gomes de Siqueira',
            posicao: 7,
            clubeAtual: 1,
            cidade: 'Tres Fronteiras',
            estado: 'SP',
            dataNascimento: '1986-11-19',
            altura: 1.70,
            numero: 29,
            jogos: 65,
            gols: 18,
            clubes: [
                {
                    clube: 'Guarani',
                    local: 'SP',
                    inicio: 2004,
                    termino: 2005
                },
                {
                    clube: 'Atlético',
                    local: 'PR',
                    inicio: 2006,
                    termino: 2008
                },
                {
                    clube: 'Vila Nova',
                    local: 'GO',
                    inicio: 2009,
                    termino: 2009
                },
                {
                    clube: 'Corinthians',
                    local: 'SP',
                    inicio: 2011,
                    termino: 2012
                },
                {
                    clube: 'Metalist',
                    local: 'Ucrania',
                    inicio: 2012,
                    termino: 2013
                },
                {
                    clube: 'Cruzeiro',
                    local: 'MG',
                    inicio: 2013,
                    termino: 2016
                },
                {
                    clube: 'Palmeiras',
                    local: 'SP',
                    inicio: 2017,
                    termino: 0
                },
            ],
            titulos: [
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2011,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 203,
                },
                {
                    competicao: 'Campeonato Brasileiro Série A',
                    ano: 2014,
                },
                {
                    competicao: 'Copa Libertadores',
                    ano: 2012,
                },
                {
                    competicao: 'Campeonato Mineiro',
                    ano: 2014,
                },
            ]
        },
    ]

    jogador.forEach(jogadores => {
        createJogadorPromises.push(Jogador.create(jogadores))
    })

    return Promise.all(createJogadorPromises)
}

const closeConnection = () => {
    mongoose.connection.close(() => {
        console.log('Done, mongoose connection disconnected.')
    })
}

async function initSeed() {

    await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api')

    console.log('***** seeding session instances...')
    await jogadorSeeder()

    closeConnection()
}

initSeed()