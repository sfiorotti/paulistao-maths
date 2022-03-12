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

const game1 = new GameBuild(SaoPaulo, Corinthians, 'Morumbi', new Date(2022, 2, 5, 16))
game1.setGame(1, 0)

const game2 = new GameBuild(SantoAndre, Ituano, 'Bruno José Daniel', new Date(2022, 2, 5, 20, 30))
game2.setGame(0, 0)

const game3 = new GameBuild(PontePreta, AguaSanta, 'Moisés Lucarelli', new Date(2022, 2, 5, 20, 30))
game3.setGame(0, 1)

const game4 = new GameBuild(Palmeiras, Guarani, 'Allianz Parque', new Date(2022, 2, 6, 16))
game4.setGame(2, 0)

const game5 = new GameBuild(Novorizontino, InterLimeira, 'Jorge Ismael de Biasi', new Date(2022, 2, 6, 18, 30))
game5.setGame(1, 2)

const game6 = new GameBuild(SaoBernardo, Mirassol, 'Primeiro de Maio', new Date(2022, 2, 6, 18, 30))
game6.setGame(1, 1)

const game7 = new GameBuild(Bragantino, Botafogo, 'Nabi Abi Chedid', new Date(2022, 2, 6, 20, 30))
game7.setGame(2, 0)

const game8 = new GameBuild(Ferroviaria, Santos, 'Fonte Luminosa', new Date(2022, 2, 16, 19))

export const Round = new RoundBuild('10ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
