interface Team {
    name: string
    group: string
    points: number
    games: number
    won: number
    drawn: number
    lost: number
    goalsFor: number
    goalsAgainst: number
    goalsDifference: number
}

export class TeamBuild implements Team {
    name: string
    group: string
    points: number
    games: number
    won: number
    drawn: number
    lost: number
    goalsFor: number
    goalsAgainst: number
    goalsDifference: number

    constructor (name: string) {
      this.name = name
    }
}
