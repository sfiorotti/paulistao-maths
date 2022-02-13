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

const game1 = new GameBuild(Botafogo, AguaSanta, 'Santa Cruz', new Date(2022, 1, 12, 16))
game1.setGame(0, 2)

const game2 = new GameBuild(Novorizontino, Guarani, 'Jorge Ismael de Biasi', new Date(2022, 1, 12, 16))
game2.setGame(1, 2)

const game3 = new GameBuild(SantoAndre, Ferroviaria, 'Bruno José Daniel', new Date(2022, 1, 12, 18, 30))
game3.setGame(2, 2)

const game4 = new GameBuild(InterLimeira, Mirassol, 'Major Levy Sobrinho', new Date(2022, 1, 13, 11))
game4.setGame(2, 2)

const game5 = new GameBuild(Santos, Ituano, 'Vila Belmiro', new Date(2022, 1, 13, 16))
const game6 = new GameBuild(PontePreta, SaoPaulo, 'Moisés Lucarelli', new Date(2022, 1, 13, 18, 30))
const game7 = new GameBuild(SaoBernardo, Bragantino, 'Primeiro de Maio', new Date(2022, 1, 13, 20, 30))
const game8 = new GameBuild(Palmeiras, Corinthians, 'Allianz Parque', new Date(2022, 2, 17, 20, 30))

export const Round = new RoundBuild('6ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
