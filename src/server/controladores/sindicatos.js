const Sindicato = require('../../common/models/sindicato')
const ControladorGenerico = require('./generico')

module.exports = class Sindicatos extends ControladorGenerico {
    constructor(db) {
        super(Sindicato, db)
    }

    routes() {
        this.router.get('/', (req, res) => {
            if (req.query.id !== undefined) {
                this.findId(req.query.id)
                    .then(doc => res.json(doc))
                    .catch(err => {
                        res.status(404)
                        res.json(err)
                    })
            }
            else {
                let query = {}

                if (req.query.nome !== undefined) {
                    query["_nome"] = req.query.nome
                }
                else if (req.query.ramoAtividade !== undefined) {
                    query["_ramoAtividade"] = req.query.ramoAtividade
                }

                this.find(query)
                    .then(doc => {
                        if (doc.length == 0)
                            res.status(404)
                        res.json(doc)
                    })
                    .catch(doc => {
                        res.status(404)
                        res.json(doc)
                    })
            }
        })

        this.router.post('/', (req, res) => {
            this.cadastrar(req.body)
                .then(val => res.json(val))
                .catch(val => res.json(val))
        })
    }
}
