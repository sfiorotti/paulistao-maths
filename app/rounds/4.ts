import {
  AguaSanta,
  Botafogo,
  Bragantino,
  Corinthians,
  Ferroviaria,
  Guarani,
  InterLimeira,
  Ituano,
  Mirassol,
  Novorizontino,
  Palmeiras,
  PontePreta,
  SantoAndre,
  Santos,
  SaoBernardo,
  SaoPaulo
} from '../initTeams'
import { GameBuild } from '../models/games'
import { RoundBuild } from '../models/rounds'

const game1 = new GameBuild(SaoBernardo, PontePreta, 'Primeiro de Maio', new Date(2022, 1, 5, 11))
game1.setGame(2, 0)

const game2 = new GameBuild(AguaSanta, Novorizontino, 'Distrital do Inamar', new Date(2022, 1, 5, 15))
game2.setGame(1, 0)

const game3 = new GameBuild(Mirassol, SantoAndre, 'Municipal de Mirassol', new Date(2022, 1, 6, 11))
game3.setGame(2, 2)

const game4 = new GameBuild(Guarani, Santos, 'Brinco de Ouro', new Date(2022, 1, 6, 16))
game4.setGame(1, 1)

const game5 = new GameBuild(Ituano, Corinthians, 'Novelli Júnior', new Date(2022, 1, 6, 18, 30))
game5.setGame(2, 3)

const game6 = new GameBuild(InterLimeira, Botafogo, 'Major Levy Sobrinho', new Date(2022, 1, 6, 20, 30))
game6.setGame(3, 0)

const game7 = new GameBuild(Ferroviaria, Bragantino, 'Fonte Luminosa', new Date(2022, 1, 6, 20, 30))
game7.setGame(1, 1)

const game8 = new GameBuild(SaoPaulo, Palmeiras, 'Morumbi', new Date(2022, 2, 10, 20, 30))
game8.setGame(0, 1)

export const Round = new RoundBuild('4ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
