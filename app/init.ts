import { TableBuild } from './models/table'
import { Team, TeamBuild } from './models/teams'

const AguaSanta = new TeamBuild('Água Santa', 'A')
const Botafogo = new TeamBuild('Botafogo', 'C')
const Bragantino = new TeamBuild('Bragantino', 'D')
const Corinthians = new TeamBuild('Corinthians', 'A')
const Ferroviaria = new TeamBuild('Ferroviária', 'B')
const Guarani = new TeamBuild('Guarani', 'A')
const InterLimeira = new TeamBuild('Inter de Limeira', 'A')
const Ituano = new TeamBuild('Ituano', 'C')
const Mirassol = new TeamBuild('Mirassol', 'C')
const Novorizontino = new TeamBuild('Novorizontino', 'B')
const Palmeiras = new TeamBuild('Palmeiras', 'C')
const PontePreta = new TeamBuild('Ponte Preta', 'D')
const SantoAndre = new TeamBuild('Santo André', 'D')
const Santos = new TeamBuild('Santos', 'D')
const SaoBernardo = new TeamBuild('São Bernardo', 'B')
const SaoPaulo = new TeamBuild('São Paulo', 'B')

const Teams: Team[] = [
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
]

const Table = new TableBuild(Teams)
Table.showTableGroup()
Table.showTableComplete()
