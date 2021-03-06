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

  setGame (goalsPrincipal: number, goalsVisitor: number) {
    this.goalsPrincipal = goalsPrincipal
    this.goalsVisitor = goalsVisitor

    this.principal.setGoalsFor(goalsPrincipal)
    this.principal.setGoalsAgainst(goalsVisitor)

    this.visitor.setGoalsFor(goalsVisitor)
    this.visitor.setGoalsAgainst(goalsPrincipal)

    if (goalsPrincipal > goalsVisitor) {
      this.principal.setWon()
      this.visitor.setLost()
    } else if (goalsPrincipal < goalsVisitor) {
      this.principal.setLost()
      this.visitor.setWon()
    } else {
      this.principal.setDrawn()
      this.visitor.setDrawn()
    }
  }
}
