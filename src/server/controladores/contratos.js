const ControladorGenerico = require('./generico');
const Contrato = require('../../common/models/contrato');

module.exports = class Contratos extends ControladorGenerico {
    constructor(db) {
        super(Contrato, db);
    }

    routes() {
        this.router.get('/', (req, res) => {
            this.find(req.query)
                .then(doc => res.json(doc))
                .catch(doc => res.json(doc));
        });
    }
};

