import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Logger } from '../common/logger'
import * as logger from 'winston'
import * as httpLogger from 'morgan'

export class App {
    public app : express.Application
    public logger : Logger = new Logger("App")
    public port : number = parseInt(<string> process.env.PORT) || 8080

    constructor() {
        this.app = express()

        this.config()

        this.route()

        this.app.listen(this.port, () => {
            this.logger.info("Listening on: " + this.port)
        })
    }

    private config() {
        this.app.use(httpLogger('dev'))
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
