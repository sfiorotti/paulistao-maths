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

const game1 = new GameBuild(Botafogo, SantoAndre, 'Santa Cruz', new Date(2022, 0, 25, 19))
game1.setGame(0, 0)

const game2 = new GameBuild(Corinthians, Ferroviaria, 'Neo Química Arena', new Date(2022, 0, 25, 21))
game2.setGame(0, 0)

const game3 = new GameBuild(AguaSanta, SaoBernardo, 'Distrital do Inamar', new Date(2022, 0, 26, 15))
game3.setGame(0, 1)

const game4 = new GameBuild(InterLimeira, Santos, 'Major Levy Sobrinho', new Date(2022, 0, 26, 19))
game4.setGame(0, 0)

const game5 = new GameBuild(Ituano, Novorizontino, 'Novelli Júnior', new Date(2022, 0, 26, 19))
game5.setGame(2, 0)

const game6 = new GameBuild(Palmeiras, PontePreta, 'Allianz Parque', new Date(2022, 0, 26, 21, 35))
game6.setGame(3, 0)

const game7 = new GameBuild(Mirassol, Bragantino, 'Municipal de Mirassol', new Date(2022, 0, 27, 20))
game7.setGame(3, 1)

const game8 = new GameBuild(Guarani, SaoPaulo, 'Brinco de Ouro', new Date(2022, 0, 27, 21, 30))
game8.setGame(2, 1)

export const Round = new RoundBuild('1ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
