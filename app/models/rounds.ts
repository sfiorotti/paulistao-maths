import { Game } from './games'

interface Round {
  games: Game[]
}

export class RoundBuild implements Round {
  games: Game[]

  constructor (games: Game[]) {
    this.games = games
  }
}
