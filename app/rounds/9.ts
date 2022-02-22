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

const game1 = new GameBuild(Mirassol, PontePreta, 'Municipal de Mirassol', new Date(2022, 1, 26, 18, 30))
game1.setGame(1, 1)

const game2 = new GameBuild(Guarani, SantoAndre, 'Brinco de Ouro', new Date(2022, 1, 26, 20, 30))
game2.setGame(2, 3)

const game3 = new GameBuild(Ituano, Ferroviaria, 'Novelli Júnior', new Date(2022, 1, 26, 20, 30))
game3.setGame(3, 1)

const game4 = new GameBuild(Corinthians, Bragantino, 'Neo Química Arena', new Date(2022, 1, 27, 11))
game4.setGame(1, 0)

const game5 = new GameBuild(InterLimeira, Palmeiras, 'Major Levy Sobrinho', new Date(2022, 1, 27, 16))
game5.setGame(0, 0)

const game6 = new GameBuild(Santos, Novorizontino, 'Vila Belmiro', new Date(2022, 1, 27, 18, 30))
game6.setGame(2, 2)

const game7 = new GameBuild(Botafogo, SaoBernardo, 'Santa Cruz', new Date(2022, 1, 27, 20, 30))
game7.setGame(1, 0)

const game8 = new GameBuild(AguaSanta, SaoPaulo, 'Distrital do Inamar', new Date(2022, 1, 28, 15))
game8.setGame(1, 2)

export const Round = new RoundBuild('9ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
