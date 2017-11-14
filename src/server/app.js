const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const httpLogger = require('morgan');
const MongoClient = require('mongodb').MongoClient;

const ApiRouter = require('./api/root');

module.exports = class App {
    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT, 10) || 8080;

        this.dbUrl = process.env.DBURL || 'mongodb://iss:123@ds123124.mlab.com:23124/ribanceira';
        this.config();

        this.DbSetup();

        this.route();

        this.app.listen(this.port, () => {
            console.info(`Listening on: ${this.port}`);
        });
    }

    /**
     * Conecta o banco de dados
     *
     * E após conectado configura as rotas das APIs dependentes do banco
     *
     * @
     * @memberof App
     */
    DbSetup() {
        MongoClient.connect(this.dbUrl)
            .then((db) => {
                this.apiRouter = new ApiRouter(db);

                this.db = db;
                console.info('Conectado ao Banco de Dados');

                this.api();
            })
            .catch((err) => {
                console.error('Erro de conexão com o banco de dados');
                console.error(err);

                throw new Error('Não foi possivel conentar com o banco');
            });
    }

    api() {
        this.app.use('/api', this.apiRouter.router);
    }

    config() {
    /* Configuração de middleware */
    // FIXME: Tem de tirar a necessidade de um outro logger só para requisições http
        this.app.use(httpLogger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
    }

    route() {
    /* Rota estatica para os arquivos do cliente */
        this.app.use('/', express.static(path.resolve('./dist')));
        this.app.get('/*', (req, res) => {
            res.sendFile(`${path.resolve('./dist')}/index.html`);
        });
    }

    static main() {
        const app = new App();
    }
};
