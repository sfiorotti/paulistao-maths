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

const game2 = new GameBuild(Ferroviaria, Santos, 'Fonte Luminosa', new Date(2022, 2, 5, 18, 30))

const game3 = new GameBuild(SantoAndre, Ituano, 'Bruno José Daniel', new Date(2022, 2, 5, 20, 30))

const game4 = new GameBuild(PontePreta, AguaSanta, 'Moisés Lucarelli', new Date(2022, 2, 5, 20, 30))

const game5 = new GameBuild(Palmeiras, Guarani, 'Allianz Parque', new Date(2022, 2, 6, 16))

const game6 = new GameBuild(Novorizontino, InterLimeira, 'Jorge Ismael de Biasi', new Date(2022, 2, 6, 18, 30))

const game7 = new GameBuild(SaoBernardo, Mirassol, 'Primeiro de Maio', new Date(2022, 2, 6, 18, 30))

const game8 = new GameBuild(Bragantino, Botafogo, 'Nabi Abi Chedid', new Date(2022, 2, 6, 20, 30))

export const Round = new RoundBuild('10ª rodada', [game1, game2, game3, game4, game5, game6, game7, game8])
