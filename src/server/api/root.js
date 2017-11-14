const Router = require('express').Router;

const Empresas = require('../controladores/empresas');
const Sindicatos = require('../controladores/sindicatos');

module.exports = class ApiRouter {
    constructor(Db) {
        this.router = Router();

        this._router.get('/', (req, res) => {
            res.json({
                mensagem: 'Hello World',
            });
        });

        this.empresas = new Empresas(Db);
        this.router.use('/empresas', this.empresas.router);

        this.sindicatos = new Sindicatos(Db);
        this.router.use('/sindicatos', this.sindicatos.router);
    }
};
