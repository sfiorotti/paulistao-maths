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

const game1 = new GameBuild(Novorizontino, Palmeiras, 'Jorge Ismael de Biasi', new Date(2022, 0, 23, 16))
game1.setGame(0, 2)

const game2 = new GameBuild(AguaSanta, Ituano, 'Distrital do Inamar', new Date(2022, 1, 9, 15))
const game3 = new GameBuild(SaoPaulo, SantoAndre, 'Morumbi', new Date(2022, 1, 9, 19))
const game4 = new GameBuild(Bragantino, InterLimeira, 'Nabi Abi Chedid', new Date(2022, 1, 9, 20, 30))
const game5 = new GameBuild(Ferroviaria, PontePreta, 'Fonte Luminosa', new Date(2022, 1, 9, 21, 30))
const game6 = new GameBuild(Guarani, Botafogo, 'Brinco de Ouro', new Date(2022, 1, 9, 21, 30))
const game7 = new GameBuild(Santos, SaoBernardo, 'Vila Belmiro', new Date(2022, 1, 10, 19))
const game8 = new GameBuild(Corinthians, Mirassol, 'Neo Química Arena', new Date(2022, 1, 10, 21, 30))

export const Round = new RoundBuild('5ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
