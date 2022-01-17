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

const game1 = new GameBuild(InterLimeira, Palmeiras, 'Major Levy Sobrinho', new Date(2022, 1, 26))
const game2 = new GameBuild(Botafogo, SaoBernardo, 'Santa Cruz', new Date(2022, 1, 26))
const game3 = new GameBuild(AguaSanta, SaoPaulo, 'Distrital do Inamar', new Date(2022, 1, 26))
const game4 = new GameBuild(Guarani, SantoAndre, 'Brinco de Ouro', new Date(2022, 1, 26))
const game5 = new GameBuild(Ituano, Ferroviaria, 'Novelli Júnior', new Date(2022, 1, 26))
const game6 = new GameBuild(Mirassol, PontePreta, 'Municipal de Mirassol', new Date(2022, 1, 26))
const game7 = new GameBuild(Corinthians, Bragantino, 'Neo Química Arena', new Date(2022, 1, 26))
const game8 = new GameBuild(Santos, Novorizontino, 'Vila Belmiro', new Date(2022, 1, 26))

export const Round = new RoundBuild('9ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
