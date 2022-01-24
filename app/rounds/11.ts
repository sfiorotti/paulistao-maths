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

const game1 = new GameBuild(InterLimeira, SaoBernardo, 'Major Levy Sobrinho', new Date(2022, 2, 13))
const game2 = new GameBuild(Botafogo, Novorizontino, 'Santa Cruz', new Date(2022, 2, 13))
const game3 = new GameBuild(AguaSanta, SantoAndre, 'Distrital do Inamar', new Date(2022, 2, 13))
const game4 = new GameBuild(Guarani, Ferroviaria, 'Brinco de Ouro', new Date(2022, 2, 13))
const game5 = new GameBuild(Ituano, Bragantino, 'Novelli Junior', new Date(2022, 2, 13))
const game6 = new GameBuild(Mirassol, SaoPaulo, 'Municipal de Mirassol', new Date(2022, 2, 13))
const game7 = new GameBuild(Palmeiras, Santos, 'Allianz Parque', new Date(2022, 2, 13))
const game8 = new GameBuild(Corinthians, PontePreta, 'Neo Química Arena', new Date(2022, 2, 13))

export const Round = new RoundBuild('11ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])