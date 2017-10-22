import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'winston'
import * as httpLogger from 'morgan'
import { MongoClient, Db } from 'mongodb'

import { ApiRouter } from './api/root'
import { Logger } from '../common/logger'

export class App {
    public app : express.Application = express()
    public logger : Logger = new Logger("App")
    public port : number = parseInt(<string> process.env.PORT) || 8080

    private apiRouter : ApiRouter

    private db : Db
    private dbUrl : string = process.env.DBURL || "mongodb://iss:123@ds123124.mlab.com:23124/ribanceira"

    constructor() {
        this.config()

        this.DbSetup()

        this.route()

        this.app.listen(this.port, () => {
            this.logger.info("Listening on: " + this.port)
        })
    }

    /**
     * Conecta o banco de dados
     * 
     * E após conectado configura as rotas das APIs dependentes do banco
     * 
     * @private
     * @memberof App
     */
    private DbSetup() {
        MongoClient.connect(this.dbUrl)
            .then((db) => {
                this.apiRouter = new ApiRouter(db)

                this.db = db
                this.logger.info("Conectado ao Banco de Dados")

                this.api()
            })
            .catch((err) => {
                this.logger.error("Erro de conexão com o banco de dados")
                this.logger.error(JSON.stringify(err, null, 4))
                process.exit(-1)
            })
    }

    private api() {
        this.app.use("/api", this.apiRouter.router)
    }

    private config() {
        /* Configuração de middleware */
        // FIXME: Tem de tirar a necessidade de um outro logger só para requisições http
        this.app.use(httpLogger('dev'))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({
           extended : true
        }))
    }

    private route() {
        /* Rota estatica para os arquivos do cliente */
        this.app.use('/', express.static('./dist'))
    }
}

let app = new App()
