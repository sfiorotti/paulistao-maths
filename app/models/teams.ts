export interface Team {
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
  setWon(): void
  setLost(): void
  setDrawn(): void
  setGoalsFor(goals: number): void
  setGoalsAgainst(goals: number): void
  calculatePoints(): void
}

export class TeamBuild implements Team {
  name: string
  group: string
  won: number = 0
  drawn: number = 0
  lost: number = 0
  goalsFor: number = 0
  goalsAgainst: number = 0
  goalsDifference: number = 0
  points: number = 0
  games: number = 0

  constructor (name: string, group: string) {
    this.name = name
    this.group = group
  }

  calculateGames (): void {
    this.games = this.won + this.drawn + this.lost
  }

  calculateGoalsDifference (): void {
    this.goalsDifference = this.goalsFor - this.goalsAgainst
  }

  calculatePoints (): void {
    this.calculateGames()
    this.calculateGoalsDifference()
    this.points = (this.won * 3) + this.drawn
  }

  setWon (): void {
    this.won += 1
  }

  setLost (): void {
    this.lost += 1
  }

  setDrawn (): void {
    this.drawn += 1
  }

  setGoalsFor (goals: number): void {
    this.goalsFor += goals
  }

  setGoalsAgainst (goals: number): void {
    this.goalsAgainst += goals
  }
}
