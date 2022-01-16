import { Game } from './games'

export interface Round {
  name: string
  games: Game[]
}

export class RoundBuild implements Round {
  name: string
  games: Game[]

  constructor (name: string, games: Game[]) {
    this.name = name
    this.games = games
  }
}
