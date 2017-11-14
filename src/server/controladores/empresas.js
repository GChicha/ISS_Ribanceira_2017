const ControladorGenerico = require('./generico');
const Empresa = require('../../common/models/empresa');
const Funcionario = require('../../common/models/funcionario');

module.export = class Empresas extends ControladorGenerico {
    constructor(db) {
        super(Empresa, db);
    }

    routes() {
        this.router.get('/', (req, res) => {
            this.find()
                .then(values => res.json(values))
                .catch(val => res.json(val));
        });

        this.router.post('/', (req, res) => {
            const empresa = req.body;
            this.cadastrar(empresa)
                .then(val => res.json(val))
                .catch(val => res.json(val));
        });
    }
};
