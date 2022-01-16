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

const game1 = new GameBuild(Santos, Botafogo, 'Vila Belmiro', new Date(2022, 0, 29, 11))
const game2 = new GameBuild(SaoBernardo, Palmeiras, 'Primeiro de Maio', new Date(2022, 0, 29, 16))
const game3 = new GameBuild(Ferroviaria, AguaSanta, 'Fonte Luminosa', new Date(2022, 0, 29, 18, 30))
const game4 = new GameBuild(PontePreta, InterLimeira, 'Moisés Lucarelli', new Date(2022, 0, 29, 18, 30))
const game5 = new GameBuild(SaoPaulo, Ituano, 'Morumbi', new Date(2022, 0, 30, 16))
const game6 = new GameBuild(SantoAndre, Corinthians, 'Bruno José Daniel', new Date(2022, 0, 30, 18, 30))
const game7 = new GameBuild(Novorizontino, Mirassol, 'Jorge Ismael de Biasi', new Date(2022, 0, 30, 20, 30))
const game8 = new GameBuild(Bragantino, Guarani, 'Brinco de Ouro', new Date(2022, 0, 31, 20))

export const Round = new RoundBuild('2ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
