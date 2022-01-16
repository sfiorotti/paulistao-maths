export interface Game {
    principal: string
    visitor: string
    goalsPrincipal: number
    goalsVisitor: number
    stadium: string
    datetime: Date
}

export class GameBuild implements Game {
    principal: string
    visitor: string
    goalsPrincipal: number
    goalsVisitor: number
    stadium: string
    datetime: Date

    constructor (principal: string, visitor: string, stadium: string, datetime: Date) {
      this.principal = principal
      this.visitor = visitor
      this.stadium = stadium
      this.datetime = datetime
    }
}
