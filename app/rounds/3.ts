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

const game1 = new GameBuild(Palmeiras, AguaSanta, 'Allianz Parque', new Date(2022, 1, 1, 19))
game1.setGame(1, 0)

const game2 = new GameBuild(Botafogo, Ferroviaria, 'Santa Cruz', new Date(2022, 1, 1, 21))
game2.setGame(1, 1)

const game3 = new GameBuild(SantoAndre, SaoBernardo, 'Bruno José Daniel', new Date(2022, 1, 2, 19))
game3.setGame(1, 0)

const game4 = new GameBuild(PontePreta, Novorizontino, 'Moisés Lucarelli', new Date(2022, 1, 2, 19))
game4.setGame(2, 0)

const game5 = new GameBuild(Corinthians, Santos, 'Neo Química Arena', new Date(2022, 1, 2, 21, 35))
game5.setGame(1, 2)

const game6 = new GameBuild(Ituano, InterLimeira, 'Novelli Júnior', new Date(2022, 1, 3, 19))
game6.setGame(2, 1)

const game7 = new GameBuild(Mirassol, Guarani, 'Municipal de Mirassol', new Date(2022, 1, 3, 19))
game7.setGame(2, 0)

const game8 = new GameBuild(Bragantino, SaoPaulo, 'Nabi Abi Chedid', new Date(2022, 1, 3, 21, 30))
game8.setGame(4, 3)

export const Round = new RoundBuild('3ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
