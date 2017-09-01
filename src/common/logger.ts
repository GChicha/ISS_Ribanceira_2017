import * as logger from 'winston'

export class Logger extends logger.Logger {
    constructor(section : string) {
        super({
            transports: [
                new (logger.transports.Console)({
                    colorize : true,
                    label: section,
                    timestamp: true
                })
            ]
        })
    }
}
