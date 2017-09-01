import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Logger } from '../common/logger'
import * as logger from 'winston'

export class App {
    public app : express.Application
    public logger : Logger = new Logger("App")

    constructor() {
        this.app = express()

        this.config()

        this.route()
    }

    private config() {
        /* Configuração de middleware */
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({
           extended : true
        }))
    }

    private route() {
        /* Rota estatica para os arquivos do cliente */
        this.app.use('/static', express.static(__dirname + '/dist/client'))
    }
}

let app = new App()
