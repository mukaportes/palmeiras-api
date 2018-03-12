# palmeiras-api

palmeiras-api é uma API não-oficial, de código aberto, que fornece dados coletados do site oficial da
Sociedade Esportiva Palmeiras sobre seus jogadores e clube (futuramente com mais features).

## Rodando o projeto

Siga os passos abaixo de instalação da API e seus comandos para rodar a API localmente em sua máquina.

### Pré-requisitos

What things you need to install the software and how to install them

```
NodeJS versao acima de 8.0.0
```

```
GIT
```

### Instalando

Baixe o projeto usando o comando abaixo para clonar este repositório:

```
cd pasta-destino-do-clone
git clone https://github.com/mukaportes/palmeiras-api
```

Entre na pasta nova e use o comando git abaixo para ir para a branch mais completa durante o desenvolvimento da API:

```
cd pasta-destino-do-clone/palmeiras-api
git checkout dev
```

Por fim, use o comando abaixo para instalar as dependencias da aplicação:

```
npm install
```

Use o comando abaixo para iniciar a aplicação na porta **localhost:8084**:

```
npm start
```

## Ferramentas Utilizadas

* [GraphQL](http://graphql.org/) - Linguagem de API utilizada
* [MongoDB](https://www.mongodb.com/) - Banco de dados utilizado
* [Mongoose](http://mongoosejs.com/) - ODM JavaScript utilizado
* [Express](http://expressjs.com/pt-br/) - Framework JS utilizado
* [Mongoose-Sequence](https://github.com/ramiel/mongoose-sequence) - Ferramenta para Auto-Incremento
para schemas feitos com Mongoose
* [Babel](https://babeljs.io/) - Transpilador JS utilizado


<!-- ## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
