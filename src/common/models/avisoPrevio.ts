export interface avisoPrevioSchema {
    dataAviso : Date,
    dataRescisao : Date,
    justificado : boolean,
    motivo : string
}

export class AvisoPrevio implements avisoPrevioSchema {
    public dataAviso : Date
    public dataRescisao : Date
    public justificado : boolean
    public motivo : string

  constructor (avisoPrevio : avisoPrevioSchema) {
      this.dataAviso    = avisoPrevio.dataAviso
      this.dataRescisao = avisoPrevio.dataRescisao
      this.justificado  = avisoPrevio.justificado
      this.motivo       = avisoPrevio.motivo
  }

}
