import { Router } from 'express'
import { Db } from 'mongodb'

import { Empresas } from '../controladores/empresas'
import { Sindicatos } from '../controladores/sindicatos'
import { Contratos } from '../controladores/contratos'

export class ApiRouter {
    private _router : Router = Router()

    private empresas : Empresas
    private sindicatos : Sindicatos
    private contratos : Contratos

    constructor (Db : Db) {
        this._router.get("/", (req, res) => {
            res.json({
                mensagem : "Hello World"
            })
        })

        this.empresas = new Empresas(Db)
        this.router.use("/empresas", this.empresas.router)

        this.sindicatos = new Sindicatos(Db)
        this.router.use("/sindicatos", this.sindicatos.router)

        this.contratos = new Contratos(Db)
        this.router.use("/contratos", this.contratos.router)
    }

    get router() : Router {
        return this._router
    }
}
