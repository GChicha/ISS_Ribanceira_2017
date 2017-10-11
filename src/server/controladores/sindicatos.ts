import { MongoClient, Collection, Db, InsertOneWriteOpResult } from 'mongodb'
import { Router } from 'express'
import { Sindicato, sindicatoSchema, sindicatoDbSchema } from '../../common/models/sindicato'

import { Controlador } from './controlador'

export class Sindicatos extends Controlador {
    public readonly router: Router = Router()

    constructor(db : Db) {
        super(db, "sindicatos")

        this.routes()
    }

    public async cadastrar(sindicato : Sindicato) {
        return this._collection.insertOne(sindicato)
    }

    public async findAll() : Promise<Array<Sindicato>> {
        return this._collection.find().map((doc : sindicatoSchema) => {
            return new Sindicato(doc)
        }).toArray()
    }

    public async findId(id : string) : Promise<Sindicato> {
        return new Promise<Sindicato>((resolve, reject) => {
            this._collection.findOne({_id: id})
                .then(doc => {
                    if (Object.keys(doc).length > 0)
                        resolve(new Sindicato(doc))
                    else
                        reject(new Error("Not Found"))
                })
                .catch(err => reject(err))
        })
    }

    public async find(query? : Object) : Promise<Array<Sindicato>> {
        return this._collection.find(query).map((doc : sindicatoDbSchema) => new Sindicato(doc)).toArray()
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
