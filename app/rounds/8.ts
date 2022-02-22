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

const game1 = new GameBuild(Palmeiras, SantoAndre, 'Allianz Parque', new Date(2022, 1, 19, 16))
game1.setGame(1, 0)

const game2 = new GameBuild(Botafogo, Corinthians, 'Santa Cruz', new Date(2022, 1, 19, 18, 30))
game2.setGame(1, 1)

const game3 = new GameBuild(Guarani, PontePreta, 'Brinco de Ouro', new Date(2022, 1, 19, 20, 30))
game3.setGame(3, 0)

const game4 = new GameBuild(SaoBernardo, Ituano, 'Primeiro de Maio', new Date(2022, 1, 19, 20, 30))
game4.setGame(1, 0)

const game5 = new GameBuild(AguaSanta, Mirassol, 'Distrital do Inamar', new Date(2022, 1, 20, 11))
game5.setGame(1, 2)

const game6 = new GameBuild(Santos, SaoPaulo, 'Vila Belmiro', new Date(2022, 1, 20, 18, 30))
game6.setGame(0, 3)

const game7 = new GameBuild(InterLimeira, Ferroviaria, 'Major Levy Sobrinho', new Date(2022, 1, 20, 20, 30))
game7.setGame(1, 2)

const game8 = new GameBuild(Novorizontino, Bragantino, 'Jorge Ismael de Biasi', new Date(2022, 1, 20, 20, 30))
game8.setGame(0, 3)

export const Round = new RoundBuild('8ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
