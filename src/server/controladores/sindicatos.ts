import { MongoClient, Collection, Db, InsertOneWriteOpResult } from 'mongodb'
import { Router } from 'express'
import { Sindicato, sindicatoSchema, sindicatoDbSchema } from '../../common/models/sindicato'

import { ControladorGenerico } from './generico'

export class Sindicatos extends ControladorGenerico<Sindicato> {
    constructor(db : Db) {
        super(Sindicato, db)
    }

    public routes() : void {
        this.router.get('/', (req, res) => {
            if (req.query.id !== undefined) {
                this.findId(req.query.id)
                    .then(doc => res.json(doc))
                    .catch(err => {
                        res.status(404)
                        res.json(err)
                    })
            }
            // Query com possíveis campos
            else {
                let query = {}

                if (req.query.nome !== undefined) {
                    query["nome"] = req.query.nome
                }
                else if (req.query.ramoAtividade !== undefined) {
                    query["ramoAtividade"] = req.query.ramoAtividade
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
