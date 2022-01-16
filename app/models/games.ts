import { Team } from './teams'

export interface Game {
  principal: Team
  visitor: Team
  goalsPrincipal: number
  goalsVisitor: number
  stadium: string
  datetime: Date
}

export class GameBuild implements Game {
  principal: Team
  visitor: Team
  goalsPrincipal: number
  goalsVisitor: number
  stadium: string
  datetime: Date

  constructor (principal: Team, visitor: Team, stadium: string, datetime: Date) {
    this.principal = principal
    this.visitor = visitor
    this.stadium = stadium
    this.datetime = datetime
  }
}
