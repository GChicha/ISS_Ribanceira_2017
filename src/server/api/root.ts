import { Router } from 'express'
import { Db } from 'mongodb'

import { Empresas } from '../controladores/empresas'

export class ApiRouter {
    private _router : Router = Router()
    private empresas : Empresas

    constructor (Db : Db) {
        this._router.get("/", (req, res) => {
            res.json({
                mensagem : "Hello World"
            })
        })

        this.empresas = new Empresas(Db)
        this.router.use("/empresas", this.empresas.router)
    }

    get router() : Router {
        return this._router
    }
}