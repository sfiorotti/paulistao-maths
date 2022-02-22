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

const game1 = new GameBuild(SantoAndre, Novorizontino, 'Bruno José Daniel', new Date(2022, 1, 15, 19))
game1.setGame(0, 0)

const game2 = new GameBuild(Ferroviaria, Palmeiras, 'Fonte Luminosa', new Date(2022, 1, 16, 19))
game2.setGame(0, 2)

const game3 = new GameBuild(Ituano, Guarani, 'Novelli Júnior', new Date(2022, 1, 16, 19))
game3.setGame(3, 0)

const game4 = new GameBuild(PontePreta, Botafogo, 'Moisés Lucarelli', new Date(2022, 1, 16))
game4.setGame(0, 1)

const game5 = new GameBuild(Corinthians, SaoBernardo, 'Neo Química Arena', new Date(2022, 1, 16, 21, 30))
game5.setGame(3, 0)

const game6 = new GameBuild(Mirassol, Santos, 'Municipal de Mirassol', new Date(2022, 1, 17, 19))
game6.setGame(3, 2)

const game7 = new GameBuild(Bragantino, AguaSanta, 'Nabi Abi Chedid', new Date(2022, 1, 17, 19))
game7.setGame(2, 0)

const game8 = new GameBuild(SaoPaulo, InterLimeira, 'Morumbi', new Date(2022, 1, 17, 21, 30))
game8.setGame(0, 0)

export const Round = new RoundBuild('7ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
