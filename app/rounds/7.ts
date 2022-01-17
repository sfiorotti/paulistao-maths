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

const game1 = new GameBuild(SantoAndre, Novorizontino, 'Bruno José Daniel', new Date(2022, 1, 16))
const game2 = new GameBuild(Ferroviaria, Palmeiras, 'Fonte Luminosa', new Date(2022, 1, 16))
const game3 = new GameBuild(Ituano, Guarani, 'Novelli Júnior', new Date(2022, 1, 16))
const game4 = new GameBuild(Mirassol, Santos, 'Municipal de Mirassol', new Date(2022, 1, 16))
const game5 = new GameBuild(PontePreta, Botafogo, 'Moisés Lucarelli', new Date(2022, 1, 16))
const game6 = new GameBuild(Bragantino, AguaSanta, 'Nabi Abi Chedid', new Date(2022, 1, 16))
const game7 = new GameBuild(Corinthians, SaoBernardo, 'Neo Química Arena', new Date(2022, 1, 16))
const game8 = new GameBuild(SaoPaulo, InterLimeira, 'Morumbi', new Date(2022, 1, 16))

export const Round = new RoundBuild('7ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
