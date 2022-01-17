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

const game1 = new GameBuild(InterLimeira, Ferroviaria, 'Major Levy Sobrinho', new Date(2022, 1, 20))
const game2 = new GameBuild(Botafogo, Corinthians, 'Santa Cruz', new Date(2022, 1, 20))
const game3 = new GameBuild(AguaSanta, Mirassol, 'Distrital do Inamar', new Date(2022, 1, 20))
const game4 = new GameBuild(Novorizontino, Bragantino, 'Jorge Ismael de Biasi', new Date(2022, 1, 20))
const game5 = new GameBuild(Guarani, PontePreta, 'Brinco de Ouro', new Date(2022, 1, 20))
const game6 = new GameBuild(Palmeiras, SantoAndre, 'Allianz Parque', new Date(2022, 1, 20))
const game7 = new GameBuild(Santos, SaoPaulo, 'Vila Belmiro', new Date(2022, 1, 20))
const game8 = new GameBuild(SaoBernardo, Ituano, 'Primeiro de Maio', new Date(2022, 1, 20))

export const Round = new RoundBuild('8ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
