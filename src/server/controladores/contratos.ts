import { MongoClient, Collection, Db } from 'mongodb'
import { Router } from 'express'

import { ControladorGenerico } from './generico'
import { Contrato } from '../../common/models/contrato'

export class Contratos extends ControladorGenerico<Contrato> {
    constructor(db : Db) {
        super(Contrato, db)
    }

    public routes() {
        this.router.get('/', (req, res) => {
            this.find(req.query)
                .then(doc => res.json(doc))
                .catch(doc => res.json("Erro"))
        })
    }
}

