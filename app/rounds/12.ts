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

const game1 = new GameBuild(SantoAndre, InterLimeira, 'Bruno José Daniel', new Date(2022, 2, 20))
const game2 = new GameBuild(Ferroviaria, Mirassol, 'Fonte Luminosa', new Date(2022, 2, 20))
const game3 = new GameBuild(Novorizontino, Corinthians, 'Jorge Ismael de Biasi', new Date(2022, 2, 20))
const game4 = new GameBuild(PontePreta, Ituano, 'Moisés Lucarelli', new Date(2022, 2, 20))
const game5 = new GameBuild(Bragantino, Palmeiras, 'Nabi Abi Chedid', new Date(2022, 2, 20))
const game6 = new GameBuild(Santos, AguaSanta, 'Vila Belmiro', new Date(2022, 2, 20))
const game7 = new GameBuild(SaoBernardo, Guarani, 'Primeiro de Maio', new Date(2022, 2, 20))
const game8 = new GameBuild(SaoPaulo, Botafogo, 'Morumbi', new Date(2022, 2, 20))

export const Round = new RoundBuild('12ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
