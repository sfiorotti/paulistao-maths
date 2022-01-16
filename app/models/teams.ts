export interface Team {
  name: string
  group: string
  points(): number
  games(): number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalsDifference(): number
}

export class TeamBuild implements Team {
  name: string
  group: string
  won: number = 0
  drawn: number = 0
  lost: number = 0
  goalsFor: number = 0
  goalsAgainst: number = 0

  constructor (name: string, group: string) {
    this.name = name
    this.group = group
  }

  points (): number {
    return (this.won * 3) + this.drawn
  }

  games (): number {
    return this.won + this.drawn + this.lost
  }

  goalsDifference (): number {
    return this.goalsFor - this.goalsAgainst
  }
}
